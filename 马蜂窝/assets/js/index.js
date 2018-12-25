$(function () {
    //头部
    var index = 0;
    var len = $('.show-image li').length;
    // 定时器
    var timer;

    run();

    // 1.自动轮播函数
    function run() {

        timer = setInterval(function () {

            // 隐藏当前(index)的图片
            $('.show-image li:eq(' + index + ')').fadeOut();
            $('.show-nav li:eq(' + index + ')').removeClass('show-nav-active');
            index++;
            if (index >= len) {
                index = 0;
            }

            // 显示(index++)之后的图片
            $('.show-image li:eq(' + index + ')').fadeIn();
            $('.show-nav li:eq(' + index + ')').addClass('show-nav-active');
        }, 3000);
    }

    $('.show-slider').mouseenter(function () {
        // 停止定时任务
        clearInterval(timer);
    }).mouseleave(function () {
        // 继续轮播
        run();
    })
    $('.show-nav li').click(function () {
        // 隐藏当前(index)的图片
        $('.show-image li:eq(' + index + ')').fadeOut();
        $('.show-nav li:eq(' + index + ')').removeClass('show-nav-active');

        // 移入到哪个索引，对应索引的图片显示
        index = $(this).index();

        // 显示(index++)之后的图片
        $('.show-image li:eq(' + index + ')').fadeIn()
        $('.show-nav li:eq(' + index + ')').addClass('show-nav-active');
    })
})

$(function () {
    var index = 0;
    var len = $('.slide-ul-2 li').length;
    // console.log(len)
    var timer;
    run()
    $('.slide-ul-2 li:first').clone(true).appendTo($('.slide-ul-2'));
    function run() {
        timer = setInterval(function () {
            $('.slide-ol-2 li:eq(' + index%len + ')').removeClass('active');
            if (index == len) {
                $('.slide-ul-2').css('margin-left', 0);
                index = 0;
            }
            index++;
            $('.slide-ol-2 li:eq(' + index%len + ')').addClass('active');
            $('.slide-ul-2').animate({marginLeft:-260*index}, 200);
        }, 3000);
    }

    $('.slide-ol-2 li').click(function () {
        $('.slide-ol-2 li:eq(' + index + ')').removeClass('active');

        index = $(this).index();

        $('.slide-ol-2 li:eq(' + index + ')').addClass('active');
        $('.slide-ul-2').stop(true).animate({marginLeft:-260*index}, 500);
    })
    $('.slide-ul-2').mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        run();
    })
    $('.slide-ol-2').mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        run();
    })
})

$(function () {
    var index = 0;
    var len = $('.slide-ul-1 li').length;
    // console.log(len)
    var timer;
    run()
    $('.slide-ul-1 li:first').clone(true).appendTo($('.slide-ul-1'));
    function run() {
        timer = setInterval(function () {
            $('.slide-ol-1 li:eq(' + index%len + ')').removeClass('active');
            if (index == len) {
                $('.slide-ul-1').css('margin-left', 0);
                index = 0;
            }
            index++;
            // console.log(index)
            $('.slide-ol-1 li:eq(' + index%len + ')').addClass('active');
            $('.slide-ul-1').animate({marginLeft:-260*index}, 200);
        }, 3000);
    }

    $('.slide-ol-1 li').click(function () {
        $('.slide-ol-1 li:eq(' + index + ')').removeClass('active');

        index = $(this).index();

        $('.slide-ol-1 li:eq(' + index + ')').addClass('active');
        $('.slide-ul-1').stop(true).animate({marginLeft:-260*index}, 500);
    })
    $('.slide-ul-1').mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        run();
    })
    $('.slide-ol-1').mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        run();
    })
})