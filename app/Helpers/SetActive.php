<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Request;

class SetActive
{
    public static function set_active($path, $active = 'active')
    {
        return call_user_func_array('Request::is', (array)$path) ? $active : ' ';
    }
}
