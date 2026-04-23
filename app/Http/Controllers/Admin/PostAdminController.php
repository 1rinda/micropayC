<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class PostAdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(): View
    {
        $posts = Post::orderByDesc('published_at')
            ->orderByDesc('created_at')
            ->get();

        return view('admin.posts.index', compact('posts'));
    }

    public function create(): View
    {
        return view('admin.posts.create', [
            'post' => new Post([
                'author' => 'MicroPay Team',
                'is_published' => true,
                'published_at' => now(),
            ]),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        Post::create($this->validatedData($request));

        return redirect()
            ->route('admin.posts.index')
            ->with('status', 'Blog post created successfully.');
    }

    public function edit(Post $post): View
    {
        return view('admin.posts.edit', compact('post'));
    }

    public function update(Request $request, Post $post): RedirectResponse
    {
        $post->update($this->validatedData($request, $post));

        return redirect()
            ->route('admin.posts.index')
            ->with('status', 'Blog post updated successfully.');
    }

    public function destroy(Post $post): RedirectResponse
    {
        $this->deleteManagedImage($post->image, 'uploads/posts/');
        $post->delete();

        return redirect()
            ->route('admin.posts.index')
            ->with('status', 'Blog post deleted successfully.');
    }

    private function validatedData(Request $request, ?Post $post = null): array
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('posts', 'slug')->ignore(optional($post)->id),
            ],
            'author' => ['required', 'string', 'max:255'],
            'category' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'image', 'max:5120'],
            'external_url' => ['nullable', 'url', 'max:255'],
            'excerpt' => ['nullable', 'string'],
            'content' => ['required', 'string'],
            'published_at' => ['nullable', 'date'],
            'is_published' => ['nullable', 'boolean'],
        ]);

        $validated['is_published'] = $request->boolean('is_published');
        $validated['image'] = $post->image ?? null;

        if ($request->hasFile('image')) {
            $validated['image'] = $this->storeImage($request->file('image'), 'uploads/posts');
            $this->deleteManagedImage(optional($post)->image, 'uploads/posts/');
        }

        return $validated;
    }

    private function storeImage(UploadedFile $image, string $directory): string
    {
        $targetDirectory = public_path($directory);

        if (! File::exists($targetDirectory)) {
            File::makeDirectory($targetDirectory, 0755, true);
        }

        $filename = uniqid('', true) . '.' . $image->getClientOriginalExtension();
        $image->move($targetDirectory, $filename);

        return trim($directory . '/' . $filename, '/');
    }

    private function deleteManagedImage(?string $path, string $managedPrefix): void
    {
        if (! $path || strpos($path, $managedPrefix) !== 0) {
            return;
        }

        $fullPath = public_path($path);

        if (File::exists($fullPath)) {
            File::delete($fullPath);
        }
    }
}
