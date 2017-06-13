var timer;
$(function() {

    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: 4000,
        loop: true,
        autoResize : true,
        cssWidthAndHeight : true,
         // 如果需要分页器
        pagination: '.pagination',
        paginationClickable :true,
        onInit: function(swiper){
            selectPic();
        }

    });
    $('.banner-left-arr').on('click', function() {
        mySwiper.swipePrev();
    });
    $('.banner-right-arr').on('click', function() {
        mySwiper.swipeNext();
    });

    $('window').on('resize', function() {
        selectPic();
        mySwiper.reInit();
    });

    function selectPic() {

        if ($(document).width() > 750) {
            $('.slide').each(function(idx, ele) {
                if(idx == 0) {
                    $(ele).find('img').attr('src', 'imgs/banner-pc-'+ 3 +'.png');
                } else  if (idx == $('.slide').length - 1){
                    $(ele).find('img').attr('src', 'imgs/banner-pc-'+ 1 +'.png');
                } else {
                    $(ele).find('img').attr('src', 'imgs/banner-pc-'+ idx +'.png');
                }
            });
            
        }
        else if ($(document).width() <= 750){
            $('.slide').each(function(idx, ele) {
                if(idx == 0) {
                    $(ele).find('img').attr('src', 'wapimgs/banner-web-'+ 3 +'.png');
                } else if (idx == $('.slide').length - 1){
                    $(ele).find('img').attr('src', 'wapimgs/banner-web-'+ 1 +'.png');
                } else {
                    $(ele).find('img').attr('src', 'wapimgs/banner-web-'+ idx +'.png');
                }
            });
        };
    }

    // 单选框选择
    var aRadios = document.getElementsByName('age');
    for (var i = 0; i < aRadios.length; i++) {

        aRadios[i].onclick = function() {
            for (var i = 0; i < aRadios.length; i++) {
                aRadios[i].parentNode.firstElementChild.style.background = 'transparent';
                aRadios[i].parentNode.firstElementChild.style.border = '1px solid #ccc';
            }

            if (this.checked) {
                this.parentNode.firstElementChild.style.background = '#7ed321';
                this.parentNode.firstElementChild.style.border = '1px solid #7ed321';
            }
        }
    }

});