<?php

namespace App\Http\Controllers\Admin;

use App\HomeSlide;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\View\View;

class HomeSlideAdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(): View
    {
        $slides = HomeSlide::ordered()->get();

        return view('admin.home-slides.index', compact('slides'));
    }

    public function edit(HomeSlide $homeSlide): View
    {
        return view('admin.home-slides.edit', compact('homeSlide'));
    }

    public function update(Request $request, HomeSlide $homeSlide): RedirectResponse
    {
        $homeSlide->update($this->validatedData($request, $homeSlide));

        return redirect()
            ->route('admin.home-slides.index')
            ->with('status', 'Slider updated successfully.');
    }

    private function validatedData(Request $request, HomeSlide $homeSlide): array
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'button_label' => ['nullable', 'string', 'max:255'],
            'button_url' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'image', 'max:5120'],
            'sort_order' => ['required', 'integer', 'min:0'],
            'is_active' => ['nullable', 'boolean'],
        ]);

        $validated['image'] = $homeSlide->image;
        $validated['is_active'] = $request->boolean('is_active');

        if ($request->hasFile('image')) {
            $validated['image'] = $this->storeImage($request->file('image'), 'uploads/home-slides');
            $this->deleteManagedImage($homeSlide->image, 'uploads/home-slides/');
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
