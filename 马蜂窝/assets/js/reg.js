$(function() {
    $('.bottom-link a').click(function () {
        $('.login-box').toggle();
        $('.signup-box').toggle();
    })
    var loginBool = false;
    var pBool = false;
    $('.passport').blur(function () {
        var value = $(this).val().trim();
        var reg1 = /.+/;
        if (!reg1.test(value)) {
            $('.err-tip:eq(0)').show();
            loginBool = false;
            return;
        }
        else {
            $('.err-tip:eq(0)').hide();
            loginBool = true;
            return;
        }
    })
    $('.password').blur(function () {
        var value1 = $(this).val().trim();

        var reg2 = /.+/;
        if (!reg2.test(value1)) {
            $('.err-tip-1').show();
            pBool = false;
            return;
        }
        else {
            $('.err-tip-1').hide();
            pBool = true;
            return;
        }
    })
    $('.password').blur(function () {
        var value1 = $(this).val().trim();

        var reg2 = /^\w{4,}$/;
        if (!reg2.test(value1)) {
            $('.err-tip-2').show();
            pBool = false;
            return;
        }
        else {
            $('.err-tip-1').hide();
            pBool = true;
            return;
        }
    })
    $('.passport-6').blur(function () {
        var value10 = $(this).val().trim();

        var reg10 = /.+/;
        if (!reg10.test(value10)) {
            $('.err-tip-3').show();
            return;
        }
        else {
            $('.err-tip-3').hide();
            pBool = true;
            return;
        }
    })
    $('.passport-6').blur(function () {
        var value11 = $(this).val().trim();

        var reg11 = /^(13[0-9]|14[57]|15[012356789]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if (!reg11.test(value11)) {
            $('.err-tip-4').show();
            return;
        }
        else {
            $('.err-tip-4').hide();
            pBool = true;
            return;
        }
    })
})
