/**
 * Created by zbacao on 2016/7/26.
 */
$(function(){
    //Ò³ÃæµÄÇÐ»»
    $(".i_details").on("click",function(){
        $(".i_ite").css("display","block").siblings().css("display","none");
        $("")
    })
    $(".i_navMark").on("click",function(){
        $(".i_ite").css("display","block").siblings().css("display","none");
    });
    $(".i_navAll").on("click",function(){
        $(".i_bdowm").css("display","block").siblings().css("display","none");
    })


});

