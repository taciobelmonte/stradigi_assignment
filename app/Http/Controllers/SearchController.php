<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(){

        return view('index', ['route' => 'search']);

    }

    public function getsearch(){

        $response = array(
            'success' => 0,
            'message' => 'There was an error when trying to get content.',
            'data' => ''
        );

        $query = $_GET['query'];

        //  Initiate curl
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL,'https://api.giphy.com/v1/gifs/search?q='.$query.'&api_key=sswps9dkU0xxsI8vTgZTHv17rjko3NnX&limit=8');
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
