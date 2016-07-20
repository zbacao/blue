/**
 * Created by Administrator on 2016-07-18.
 */
$(function(){
    $(".login-mengban").height($(window).height()-320);
    $(".login-reg-select>a").each(function(index,ele){
        $(ele).on("click",function(){
            $(".account-box").eq(index).css("display","block").siblings(".account-box").css("display","none");
            $(this).addClass("a1").siblings().removeClass("a1");
        });
    })
});