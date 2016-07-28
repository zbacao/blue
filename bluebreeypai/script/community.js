$(function(){
    // 副导航的鼠标事件
    $('.sq-drag').on("click",function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(this).find(".sq-list").toggleClass('on');
        $(this).siblings().find(".sq-list").removeClass('on');
    })
})