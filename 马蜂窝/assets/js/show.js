$(function () {
    //头部鼠标移入  显示下拉菜单       start
    $('.head-nav-sales').mouseenter(function () {
        $('.dropdown-menu ul ').fadeIn(500);
    }).mouseleave(function () {
        $('.dropdown-menu ul').fadeOut(500);
    })
    //头部鼠标移入  显示下拉菜单       end
    //头部搜索框聚焦效果     start
    $('.head-search input').focus(function () {
        $('.head-nav-community a').removeClass('head-nav-active');
    }).blur(function () {
        $('.head-nav-community a').addClass('head-nav-active');
    })
    //头部搜索框聚焦效果     end
    //滚轮滑动 固定导航栏出现  start
    $(window).scroll(function () {
        if($(this).scrollTop()>=610) {
            // console.log(111);
            $('.float-bar').slideDown(500);
        }else {
            $('.float-bar').slideUp(500);
        }

        if($(window).scrollTop()>=870) {
            console.log(111);
            $('.side-sticky').css('opacity','1');
            $('.fix').show().addClass('fix-1');
            $('.legend').hide();
        }else {
            $('.side-sticky').css('opacity','0');
            $('.fix').hide().removeClass('fix-1');
            $('.legend').show();
        }
        var top1=$(window).scrollTop() + $(window).height() - $('.footer').offset().top;
        if(top1>0) {
            $('.fix').css('top','auto');
            $('.fix').css('bottom',top1+205);
        }
    })
    console.log($(window).scrollTop());
    //滚轮滑动 固定导航栏出现  end

    //右侧导航栏     start
    run();
    $(window).scroll(function () {
        run();
        var top = $(this).scrollTop() + $(window).height() - $('.footer').offset().top;
        if (top > 0) {
            $('.mfw-toolbar').css('bottom', top + 20);
            // $('.fix').css('bottom',top+300);
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
        $(document.documentElement).animate({scrollTop: 0}, 1000);
    })
    //右侧导航栏     end
    
    
//    轮播        start
    var index = 0;
    var len = $('.gs-content li').length-3;
    // 定时器
    var timer;

    run1();

    // 1.自动轮播函数
    function run1() {

        timer = setInterval(function () {
            console.log(index);
            // 隐藏当前(index)的图片
            $('.legend .gs-content li:eq(' + index + ')').fadeOut();
            $('.legend .gs-nav li:eq(' + index + ')').removeClass('on');
            index++;
            if (index >= len) {
                index = 0;
            }

            // 显示(index++)之后的图片
            $('.legend .gs-content li:eq(' + index + ')').fadeIn();
            $('.legend .gs-nav li:eq(' + index + ')').addClass('on');
        }, 3000);
    }

   /* $('.show-slider').mouseenter(function () {
        // 停止定时任务
        clearInterval(timer);
    }).mouseleave(function () {
        // 继续轮播
        run();
    })*/
    $('.legend .gs-nav li').click(function () {
        // 隐藏当前(index)的图片
        $('.legend .gs-content li:eq(' + index + ')').fadeOut();
        $('.legend .gs-nav li:eq(' + index + ')').removeClass('on');

        // 移入到哪个索引，对应索引的图片显示
        index = $(this).index();

        // 显示(index++)之后的图片
        $('.legend .gs-content li:eq(' + index + ')').fadeIn()
        $('.legend .gs-nav li:eq(' + index + ')').addClass('on');
    })






    var index1 = 0;
    var len1 = $('.gs-content li').length-3;
    // 定时器
    var timer1;

    run2();

    // 1.自动轮播函数
    function run2() {

        timer1 = setInterval(function () {
            console.log(index1);
            // 隐藏当前(index)的图片
            $('.fix .gs-content li:eq(' + index1 + ')').fadeOut();
            $('.fix .gs-nav li:eq(' + index1 + ')').removeClass('on');
            index1++;
            if (index1 >= len1) {
                index1 = 0;
            }

            // 显示(index++)之后的图片
            $('.fix .gs-content li:eq(' + index1 + ')').fadeIn();
            $('.fix .gs-nav li:eq(' + index1 + ')').addClass('on');
        }, 3000);
    }

    /* $('.show-slider').mouseenter(function () {
         // 停止定时任务
         clearInterval(timer);
     }).mouseleave(function () {
         // 继续轮播
         run();
     })*/
    $('.fix .gs-nav li').click(function () {
        // 隐藏当前(index)的图片
        $('.fix .gs-content li:eq(' + index1 + ')').fadeOut();
        $('.fix .gs-nav li:eq(' + index1 + ')').removeClass('on');

        // 移入到哪个索引，对应索引的图片显示
        index1 = $(this).index();

        // 显示(index++)之后的图片
        $('.fix .gs-content li:eq(' + index1 + ')').fadeIn()
        $('.fix .gs-nav li:eq(' + index1 + ')').addClass('on');
    })
//    轮播        end

//    点击对应的按钮 到达指定的楼层   start
    $('.moren').click (function () {
        $(window).scrollTop(700);
    })
    $('.city-1').click (function () {
        $(window).scrollTop(1767);
    })
    $('.city-2').click (function () {
        $(window).scrollTop(2667);
    })
//    点击对应的按钮 到达指定的楼层   end

    $('#smartGuideFeng').mouseenter(function () {
        $(this).animate({left:-50},500,function () {
            $('#smartGuide').animate({left:0},500);
        })
    })
    $('.smart-button').mouseenter(function () {
        $(this).css({background:'#ff9d00',color:'#fff'});
    }).mouseleave(function () {
        $('.smart-button').css({background:'none',color:'#666'});
    })
    $('.smart-button').click(function () {
        $('#smartGuide').animate({left:-600},500,function () {
            $('#smartGuideFeng').animate({left:0},500);
        })
    })
})