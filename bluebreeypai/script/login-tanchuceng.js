/**
 * Created by Administrator on 2016-07-18.
 */
$(function(){
    var loginMengban=$(".login-mengban").get(0);
    var loginBox= $(".login-box");

    $("#log").on("click",function(){
        $(loginMengban).css({display:'block'});
        $(loginBox).css({display:'block'});
        window.onmousewheel=document.onmousewheel=function() {
            return false;
        }
    });


    $(loginMengban).on("click",function(){
        $(loginMengban).css({display:'none'});
        $(loginBox).css({display:'none'});
        window.onmousewheel=document.onmousewheel=function() {
            return true;
        }
    });


    $(".login-reg-select>a").each(function(index,ele){
        $(ele).on("click",function(){
            $(".account-box").eq(index).css("display","block").siblings(".account-box").css("display","none");
            $(this).addClass("a1").siblings().removeClass("a1");
        });
    });
});