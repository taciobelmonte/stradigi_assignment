/*
 * Kraken
 * */
;

(function($){

    $.fn.Kraken = function(options){
        var body                    = $('body');
        var header                  = $('header');
        var burguer                 = $('.burguer');
        var mobileMenu              = $('.mobile-menu');
        var loading                 = $('.loading');
        var close                   = $('.close');
        var modal                   = $('#modal');
        var panel                   = $('#panel');
        var items                   = $('#items');
        var LIMIT                   = 12;
        var TOTALITEMS              = 1;
        var APITOKEN                = 'sswps9dkU0xxsI8vTgZTHv17rjko3NnX';

        var init = function(){
            body.addClass('loaded');

            if(body.hasClass('gallery'))
            //requestImages();

                if(body.hasClass('list-items'))
                    requestDynamicContent();
        };

        /**
         * RequestImages
         * @param offset
         *
         */
        var requestImages = function(offset){

            //Display loading
            loading.show();

            html = '';

            $.getJSON( '//api.giphy.com/v1/gifs/trending?api_key='+APITOKEN+'&limit=15&offset=' + offset, {
            }).done(function(data){

                if(data.meta.msg == 'OK'){

                    var counter = 0;

                    //Filling fields with Data
                    for (var i = 0; i < LIMIT; i++){

                        if(counter == 0)
                            html+= '<div class="row">';

                        html+='<div id="'+data.data[i].id+'" ' +
                            'data-title="'+data.data[i].title+'" ' +
                            'data-index="'+TOTALITEMS+'" ' +
                            'data-src="'+data.data[i].images.fixed_height_small.url+'" ' +
                            'data-full="'+data.data[i].images.fixed_height.url+'" ' +
                            'data-image-height="'+data.data[i].images.fixed_height.height+'" ' +
                            'data-image-width="'+data.data[i].images.fixed_height.width+'" ' +
                            'class="item col-25" ' +
                            'style="background:url('+data.data[i].images.fixed_height_small.url+');background-size:cover;">' +
                            '</div>';

                        if(counter == 3){
                            html+= '</div>';
                            counter=-1;
                        }

                        counter++;
                        TOTALITEMS++;
                    }

                    //Append all elements hidden into page
                    items.find('.inner').append($(html).css('opacity','0'));
                    html = '';

                    //Display each image one by one with fadeIn effect
                    var i = 0;
                    (function displayImages() {
                        items.find('.inner .row').eq(i++).addClass('animated').delay(100).fadeIn(300, displayImages);
                    })();

                    //Hide loading
                    loading.hide();

                    //Increment how many times load more was consulted
                    items.attr('data-loaded', parseInt(items.attr('data-loaded'))+1);
                }

            }).fail(function(jqxhr, textStatus, error){
                console.log('Requestion Failed: ' + textStatus);
            });
        };

        /**
         * requestDynamicContent
         *
         */
        var requestDynamicContent = function(){
            html = '';

            $.getJSON( '/getcontent', {
            }).done(function(data){

                if(data.success == 1){
                    // console.log(data);

                    for (var i = 0; i < data.data.length; i++){
                        html+='<article class="panel-item col-55 inner">' +
                            '<div class="center col-75">' +
                            '<h2>'+ data.data[i].title +'</h2>' +
                            '<div class="content-text"> <p>'+ data.data[i].text +'</p> </div>' +
                            '</div>' +
                            '</article>';
                    }
                    panel.append($(html));
                    html = '';
                }

            }).fail(function(jqxhr, textStatus, error){
                console.log('Requestion Failed: ' + textStatus);
            });
        };

        /**
         * Modal set
         */
        var setOption = function(modal, option, value){

            switch(option){
                case 'title':
                    modal.find('.posted').text(value);
                    break;
                case 'index':
                    modal.find('.index').text(value);
                    break;
                case 'src':
                    modal.find('.image-content img').attr('src', value);
                    break;
                case 'image-height':
                    modal.find('.inner-modal').height(''+(value+100) + 'px');
                    break;
                case 'image-width':
                    modal.find('.inner-modal').width(''+(value+50) + 'px');
                    break;
            }
        };

        /**
         * Modal close
         */
        var closeModal = function(modal){
            modal.find('.inner-modal').addClass('animated zoomOut');
            modal.find('.overlay').fadeOut(function(){

                modal.find('.inner-modal').removeClass('zoomIn animated zoomOut');
                modal.find('.inner-modal').hide();
            });
        };

        /**
         * Modal open
         */
        var openModal = function(modal){

            modal.find('.inner-modal').show().addClass('animated zoomIn');
            modal.find('.overlay').fadeIn();
        };

        //Events
        close.on('click', function(){
            closeModal(modal);
        });

        burguer.on('click', function(){
            $(this).toggleClass('open');
            header.toggleClass('open');
            mobileMenu.toggleClass('open');
        });

        $(document).on('click','.item' ,function(){

            var title  = $(this).data('title');
            var index  = $(this).data('index');
            var src    = $(this).data('full');
            var imageHeight = $(this).data('image-height');
            var imageWidth = $(this).data('image-width');

            setOption(modal, 'index', index);
            setOption(modal, 'title', title);
            setOption(modal, 'src', src);
            setOption(modal, 'image-height', imageHeight);
            setOption(modal, 'image-width', imageWidth);

            openModal(modal);
        });

        //Load more when scrolling page
        $(window).scroll(function() {
            if($(window).scrollTop() == $(document).height() - $(window).height())
                requestImages(items.attr('data-loaded') * LIMIT);
        });

        //Close modal when pressing esc
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                closeModal(modal);
            }
        });

        init();

        return this;
    }
})(jQuery);

jQuery(document).ready(function($) {

    $('#root').Kraken();

});
