<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;

class ListController extends Controller
{
    public function index(){

        return view('index', ['route' => 'list']);

    }
    public function getContent()
    {
        $response = array(
            'success' => 0,
            'message' => 'There was an error when trying to get content.',
            'data' => ''
        );

        //Retrieve content from file
        $json = File::get(storage_path() . "/json/panelPageContent.json");
        $data = json_decode($json);

        if(!empty($data)){
            $response['success'] = 1;
            $response['data'] = $data;
            $response['message'] = 'OK';
        }

        return $response;
    }
}
