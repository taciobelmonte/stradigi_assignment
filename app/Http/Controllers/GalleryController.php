<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index(){

        return view('index', ['route' => 'gallery']);

    }

    public function getGallery()
    {
        $response = array(
            'success' => 0,
            'message' => 'There was an error when trying to get content.',
            'data' => ''
        );

        $offset = $_GET['offset'];

        //  Initiate curl
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL,'https://api.giphy.com/v1/gifs/trending?api_key=sswps9dkU0xxsI8vTgZTHv17rjko3NnX&limit=12&offset='.$offset);
        $result=curl_exec($ch);
        curl_close($ch);

        $data = json_decode($result);

        if(!empty($data)){
            $response['success'] = 1;
            $response['data'] = $data;
            $response['message'] = 'OK';
        }

        return $response;
    }
}
