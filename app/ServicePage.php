<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ServicePage extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'page_title',
        'page_description',
        'image',
        'section_heading',
        'section_items',
        'extra_heading',
        'extra_items',
        'extra_paragraphs',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'section_items' => 'array',
        'extra_items' => 'array',
        'is_active' => 'boolean',
    ];

    public function getImageUrlAttribute(): string
    {
        if (empty($this->image)) {
            return asset('images/page-titles/bank.jpeg');
        }

        if (Str::startsWith($this->image, ['http://', 'https://'])) {
            return $this->image;
        }

        return asset($this->image);
    }

    public function getExtraParagraphListAttribute(): array
    {
        if (empty($this->extra_paragraphs)) {
            return [];
        }

        return preg_split('/\r\n|\r|\n/', trim($this->extra_paragraphs)) ?: [];
    }
}
