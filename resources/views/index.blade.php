<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="images/img-kraken.png">
        <meta name="csr-token" content="{{ csrf_token() }}">
        <link href="//fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/responsive.css') }}">
        <title>Kraken Website</title>

    </head>
    <body>
        <div id="root"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>