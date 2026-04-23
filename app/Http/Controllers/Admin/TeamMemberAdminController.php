<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\TeamMember;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\View\View;

class TeamMemberAdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(): View
    {
        $teamMembers = TeamMember::ordered()->get();

        return view('admin.team-members.index', compact('teamMembers'));
    }

    public function create(): View
    {
        return view('admin.team-members.create', [
            'teamMember' => new TeamMember([
                'sort_order' => TeamMember::max('sort_order') + 1,
                'is_active' => true,
                'show_on_homepage' => true,
            ]),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        TeamMember::create($this->validatedData($request));

        return redirect()
            ->route('admin.team-members.index')
            ->with('status', 'Team member created successfully.');
    }

    public function edit(TeamMember $teamMember): View
    {
        return view('admin.team-members.edit', compact('teamMember'));
    }

    public function update(Request $request, TeamMember $teamMember): RedirectResponse
    {
        $teamMember->update($this->validatedData($request, $teamMember));

        return redirect()
            ->route('admin.team-members.index')
            ->with('status', 'Team member updated successfully.');
    }

    public function destroy(TeamMember $teamMember): RedirectResponse
    {
        $this->deleteManagedImage($teamMember->image, 'uploads/team-members/');
        $teamMember->delete();

        return redirect()
            ->route('admin.team-members.index')
            ->with('status', 'Team member deleted successfully.');
    }

    private function validatedData(Request $request, ?TeamMember $teamMember = null): array
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'role' => ['required', 'string', 'max:255'],
            'bio' => ['nullable', 'string'],
            'image' => ['nullable', 'image', 'max:5120'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'is_active' => ['nullable', 'boolean'],
            'show_on_homepage' => ['nullable', 'boolean'],
        ]);

        $validated['image'] = $teamMember->image ?? null;
        $validated['sort_order'] = $validated['sort_order'] ?? 0;
        $validated['is_active'] = $request->boolean('is_active');
        $validated['show_on_homepage'] = $request->boolean('show_on_homepage');

        if ($request->hasFile('image')) {
            $validated['image'] = $this->storeImage($request->file('image'), 'uploads/team-members');
            $this->deleteManagedImage(optional($teamMember)->image, 'uploads/team-members/');
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
