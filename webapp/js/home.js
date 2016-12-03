
    (function($,w) {
        //banner
        w.home = {};
        home.index = 0;
        $('.slide-box').touchMove();
        $.autoPlay($('.slide-box'));
        $('.slide-box').on('touchstart', function() {
            clearInterval(adTimer);
        }).on('touchend', function() {
            $.autoPlay($('.slide-box'));
        });

        // side-nav activation
        home.winWidth = $(window).width();
        $('.nav-container').css({
            'transform': 'translateX(' + (-home.winWidth + 35) + 'px)',
            'width': home.winWidth - 35 + 'px'
        });

        $('.home-goods-list a').on('mousedown', function() {
            $('.side-nav').show().children('.nav-container').css({
                transform: 'translateX(0)'
            });
        });
        $('.cover').on('mousedown', function() {
            $('.nav-container').animate({
                transform: 'translateX(' + (-home.winWidth + 35) + 'px)'
            }, 500, function() {
                $('.side-nav').hide();
            });
        });
        //side-bar toggle
        $('.nav-box ul').on('mousedown', 'li', function(e) {
            $(this).addClass('current').siblings().removeClass('current');
            $('.item-list').html(getHtml(categoryDataList[$(this).index()]))
        });

        //side-bar data
        $('.item-list').html(getHtml(categoryDataList['0']));

        function getHtml(data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html += '<li><a href="#"><img src=http://img002.mllres.com/' + data[i].img + ' alt=""><span>' + data[i].name + '</span></a></li>';
            }
            return html;
        }

        //search module
        $('#search').mousedown(function() {
            $('.search-page').css('display', 'block');
        });
        $('.close-search').on('mousedown', function() {
            $('.search-page').css('display', 'none');
        })
    })($,window);
