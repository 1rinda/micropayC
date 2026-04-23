<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Support\Facades\Schema;

class BlogController extends Controller
{
    public function index()
    {
        if (! Schema::hasTable('posts')) {
            return view('blog.index', ['posts' => collect()]);
        }

        $posts = Post::published()
            ->latest('published_at')
            ->get();

        return view('blog.index', compact('posts'));
    }

    public function show($slug)
    {
        abort_unless(Schema::hasTable('posts'), 404);

        $post = Post::published()
            ->where('slug', $slug)
            ->firstOrFail();

        return view('blog.show', compact('post'));
    }
}
