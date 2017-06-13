$(function() {
    // wap端主导航
    $('.nav-btn').on('click', function() {

        if ($('.wapcontact').css('display') === 'block') {
            $('.wapcontact').css('display', 'none');
            $('.menbership').removeClass('active');
            $('.menbership').css({backgroundImage: 'url("../wapimgs/home_tel copy.png")'});
        }
        $('.wapnav').css({display: 'block'}).animate({opacity: 1}, 'fast');
    });

    $('.closenav').on('click', function() {
        $('.wapnav').animate({opacity: 0}, 'fast', function() {
            $(this).hide();
        });
    });

    // pc主导航
    $('nav li').each(function(idx, ele) {
        $(ele).hover(function() {
            if ($(this).children('.dropdown').length > 0) {
                $(this).children('.dropdown').css({display: 'block'});
            }
        }, function() {
            $(this).children('.dropdown').css({display: 'none'});
        });
    });

    // wap电话点击
    $('.menbership').on('click', function(e) {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.wapcontact').show();
            $(this).css({backgroundImage: 'url("../wapimgs/home_tel_pre.png")'});
        } else {
            $('.wapcontact').hide();
            $(this).css({backgroundImage: 'url("../wapimgs/home_tel copy.png")'});
        }
    });

    $(".wapcontact").on('click', function() {
        $('.menbership').removeClass('active');
        $('.menbership').css({backgroundImage: 'url("../wapimgs/home_tel copy.png")'});

        $(this).hide();
    });

    $(".wapnav, .wapcontact").on('touchmove', function(e) {
        e.preventDefault();
    });


    // wap端副导航箭头
    $('.right-arr').on('click', function() {
        $('.one').css({marginLeft: '-3.9rem'});

        $('.left-arr').css({display: 'block'});
        $(this).css({display: 'none'});
    });

    $('.left-arr').on('click', function() {
        $('.one').css({marginLeft: '0rem'});
        $('.right-arr').css({display: 'block'});
        $(this).css({display: 'none'});
    });
});
