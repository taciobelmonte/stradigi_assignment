<?php
URL::forceScheme('https');
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('{slug}', function($slug) {
  //  return view('index');
//})
//->where('slug', '(?!api)([A-z\d-\/_.]+)?');

//
//Route::get('/login', function () {
//    return view('index');
//});

//
//Route::get('register', function () {
//    return view('index');
//});
//
//Route::get('home', function () {
//    return view('index');
//});
//
//Route::get('forgotpassword', function () {
//    return view('index');
//});
//
//Route::get('password/reset/:token', function () {
//    return view('index');
//});


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('{slug}', function() {
    return view('index');
})
->where('slug', '(?!api)([A-z\d-\/_.]+)?');

Auth::routes();

Route::get('api/getgallery', 'GalleryController@getGallery');
Route::get('api/getcontent', 'ListController@getContent');
Route::get('api/getsearch', 'SearchController@getsearch');


//Route::get('/search', 'SearchController@index');
//Route::get('/getsearch', 'SearchController@getsearch' );
//Route::get('/gallery', 'GalleryController@index');
//Route::get('/getgallery', 'GalleryController@getGallery');
//Route::get('/list-items', 'ListController@index');
//Route::get('/getcontent', 'ListController@getContent');