<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test01/', function () {
    return view('test01');
});

Route::get('/test02/', function () {
    return view('test02');
});

Route::get('/vplan01/', function () {
    return view('vplan01');
});

Route::get('/vplan02/', function () {
    return view('vplan02');
});

Route::get('/vplan03/', function () {
    return view('vplan03');
});

Route::get('/index/', function () {
    return view('index');
});

// Use for API Test
Route::get('/api/', function () {
    echo "API Link";
});

Route::get('/api/test1', function () {
    return [ 1 => "a", 2 => "b", 3 => "c"];
});


