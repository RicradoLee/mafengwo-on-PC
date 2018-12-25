$(function () {
    //头部鼠标移入  显示下拉菜单       start
    $('.head-nav-sales').mouseenter(function () {
        $('.dropdown-menu ul ').fadeIn(500);
    }).mouseleave(function () {
        $('.dropdown-menu ul').fadeOut(500);
    })
    //头部鼠标移入  显示下拉菜单       end
    //右侧导航栏     start
    run();
    $(window).scroll(function () {
        run();
        var top = $(this).scrollTop() + $(window).height() - $('.footer').offset().top;
        if (top > 0) {
            $('.mfw-toolbar').css('bottom', top + 20);
        }
    })

    function run() {
        if ($(window).scrollTop() > 500) {
            $('.toolbar-item-top').show();
        } else {
            $('.toolbar-item-top').hide();
        }
    }

    //返回顶部
    $('.toolbar-item-top').click(function () {
        console.log(111);
        $(document.documentElement).animate({scrollTop: 0}, 1000);
    })
    //右侧导航栏     end
    //    轮播        start
    var index = 0;
    var len = $('.slide-box li').length;
    // 定时器
    var timer;

    run1();

    // 1.自动轮播函数
    function run1() {

        timer = setInterval(function () {
            // console.log(index);
            // 隐藏当前(index)的图片
            $('.slide-box li:eq(' + index + ')').fadeOut();
            $('.thumb-box li:eq(' + index + ')').removeClass('active');
            index++;
            if (index >= len) {
                index = 0;
            }

            // 显示(index++)之后的图片
            $('.slide-box li:eq(' + index + ')').fadeIn();
            $('.thumb-box li:eq(' + index + ')').addClass('active');
        }, 3000);
    }

    /* $('.show-slider').mouseenter(function () {
         // 停止定时任务
         clearInterval(timer);
     }).mouseleave(function () {
         // 继续轮播
         run();
     })*/
    $('.thumb-box li').click(function () {
        // 隐藏当前(index)的图片
        $('.slide-box li:eq(' + index + ')').fadeOut();
        $('.thumb-box li:eq(' + index + ')').removeClass('active');

        // 移入到哪个索引，对应索引的图片显示
        index = $(this).index();

        // 显示(index++)之后的图片
        $('.slide-box li:eq(' + index + ')').fadeIn()
        $('.thumb-box li:eq(' + index + ')').addClass('active');
    })
//    轮播        end
//     $('.drop-pop:eq('+indexTrigger+')').hide();
    $('.drop-item').click (function () {
        $('.drop-pop').hide()
        var indexTrigger=$(this).index();
        // console.log(indexTrigger);
        $(this).toggleClass('trigger-active').siblings().removeClass('trigger-active');


        if( $(this).attr('class')=='drop-item'){
            $('.drop-pop:eq('+indexTrigger+')').hide()
            console.log(1)
        }else{
            $('.drop-pop:eq('+indexTrigger+')').show();
            console.log(2)
        }
    })
})