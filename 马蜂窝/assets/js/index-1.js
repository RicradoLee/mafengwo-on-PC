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
        $(document.documentElement).animate({scrollTop: 0}, 1000);
    })
    //右侧导航栏     end
    //筛选框点击后弹出  start
    $('.tn-menu').click(function () {
        $('.tn-dropdown-pop').show();
    })
    $('.close').click(function () {
        $('.tn-dropdown-pop').hide();
    })
    $('.mui-search-inp').focus(function () {
        $(this).addClass("inp-active");
    }).blur(function () {
        $('.mui-search-inp').removeClass("inp-active");
    })
    //筛选框点击后弹出  end
//    container选项卡      start

    $('.tn-nav-hot').click (function () {
        $(document.documentElement).animate({scrollTop:970},1000);
        $(this).addClass("active").siblings().removeClass('active');
        console.log(111);
        $('.tn-list:eq(0)').fadeIn(1000);
        $('.tn-list:eq(1)').fadeOut();
    })
    $('.tn-nav-new').click (function () {
        $(document.documentElement).animate({scrollTop:970},1000);
        $(this).addClass("active").siblings().removeClass('active');
        $('.tn-list:eq(1)').fadeIn(1000);
        $('.tn-list:eq(0)').fadeOut();
    })
//    container选项卡      end
//图片延迟加载    start
    function lazyLoading() {
        $('.lazy').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                var newSrc = $(this).attr('data-src');
                $(this).attr('src', newSrc).hide().fadeIn('slow');
                $(this).removeClass('lazy')
            }
        })
    }
    lazyLoading();
    $(window).scroll(function(){
        lazyLoading();
    })
//图片延迟加载    end

        $('.searchtab li').click(function () {
//    input框原点转换    start
            var index=$('.searchtab li').attr('data-index');
            console.log(index);
            // $('.searchtab li i').addClass("tab-active");
        })
//    input框原点转换    end
})
$('.searchtab ul li i').click(function () {
    $('.searchtab ul li i').removeClass('tab-active');
    $(this).addClass('tab-active')
})