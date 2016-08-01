/**
 * Created by Administrator on 2016-07-18.
 */
$(function(){

    //主页各轮播图

    var mySwiper1 = new Swiper('#swiper-container1', {
        pagination: '.swiper-pagination',              //分页器
        autoplay: 2000,                                           //自动轮播
        speed: 1000,                                                //自动轮播速度
        autoplayDisableOnInteraction: false,
        parallax : true,                                            //视差效果
        loop: true                                                  //循环
    });

    function otherLunbo(swiperContainer){
        var mySwiper2 = new Swiper(swiperContainer, {
            pagination: '.swiper-pagination',
            loop: true,
            noSwiping: true,
            autoplayDisableOnInteraction: false
        });
        mySwiper2.params.autoplay = false;
    }
    otherLunbo("#swiper-container2");
    otherLunbo("#swiper-container3");
    otherLunbo("#swiper-container4");
    otherLunbo("#swiper-container5");

    //var mySwiper2 = new Swiper('#swiper-container2', {
    //    pagination: '.swiper-pagination',
    //    loop: true,
    //    noSwiping: true,
    //    autoplayDisableOnInteraction: false
    //});
    //mySwiper2.params.autoplay = false;
    //
    //var mySwiper3 = new Swiper('#swiper-container3', {
    //    pagination: '.swiper-pagination',
    //    loop: true,
    //    noSwiping: true,
    //    autoplayDisableOnInteraction: false
    //});
    //mySwiper3.params.autoplay = false;
    //
    //var mySwiper4 = new Swiper('#swiper-container4', {
    //    pagination: '.swiper-pagination',
    //    loop: true,
    //    noSwiping: true,
    //    autoplayDisableOnInteraction: false
    //});
    //mySwiper4.params.autoplay = false;
    //
    //var mySwiper5 = new Swiper('#swiper-container5', {
    //    pagination: '.swiper-pagination',
    //    loop: true,
    //    noSwiping: true,
    //    autoplayDisableOnInteraction: false
    //});
    //mySwiper5.params.autoplay = false;

    //页面数据适配

    var swiperContainer1=$("#swiper-container1");
    var p_yz=$("#p_yz");
    var p_ts=$("#p_ts");
    var p_yq=$("#p_yq");
    var p_ll=$("#p_ll");
    var p_yj=$("#p_yj");
    var p_other=$("#p_other");

    $.getJSON("json/index.json",function(data){
        //banner数据适配  start

        $(swiperContainer1).find(".swiper-slide").each(function(index,ele){
            if(data){
                $(".swper1img").eq(index).attr("src",data.banner[index].bannerimg);
                $(" .ban-title").eq(index).text(data.banner[index].banTitle);
                $(" .ban-cont").eq(index).text(data.banner[index].banCont);
            }else{
                $(" .swper1img").eq(index).attr("src","indexImg/banner2.jpg");
                $(".ban-title").eq(index).text("普罗旺斯的梦");
                $(" .ban-cont").eq(index).text("普罗旺斯(Provence)位于法国东南部，" +
                "毗邻地中海和意大利，从地中海沿岸延伸到内陆的丘陵地区，中间有大河“Rhone”流过。自古就以靓丽的阳光和蔚蓝的天空，迷人的地中海和心醉");
            }
        });

        //乐章模块适配
        $(p_yz).find(".artical-pic").each(function(index,ele){
            $(p_yz).find(".artical-pic").eq(index).attr("src",data.yuezhang[index].yzPic);
            $(p_yz).find(".artical-title").eq(index).text(data.yuezhang[index].articalTitle);
            $(p_yz).find(".author").eq(index).text(data.yuezhang[index].author);
            $(p_yz).find(".artical-cont").eq(index).text(data.yuezhang[index].articalCont);
            $(p_yz).find(".p-yz-date").eq(index).text(data.yuezhang[index].date);
            $(p_yz).find(".p-yz-hour_minute1").eq(index).text(data.yuezhang[index].time);
            $(p_yz).find(".zan-num").eq(index).text(data.yuezhang[index].zan);
            $(p_yz).find(".pl-num").eq(index).text(data.yuezhang[index].pl);
        });

        //听说模块适配
        $(data.tingshuo).each(function(index,ele){
            $(p_ts).find(" .to-left img").eq(index).attr("src",ele.albumPic);
            $(p_ts).find(".singer").eq(index).text(data.tingshuo[index].singer);
            $(p_ts).find(".album-name").eq(index).text(ele.albumName);
            $(p_ts).find(".album-desc").eq(index).text(ele.albumDesc);
        });

        //乐趣模块适配
        $(data.yuequ).each(function(index,ele){
            $(p_yq).find(" .artical-pic").eq(index).attr("src",ele.yqPic);
            $(p_yq).find(" .artical-title").eq(index).text(ele.articalTitle);
            $(p_yq).find(" .author").eq(index).text(ele.author);
            $(p_yq).find(" .artical-cont").eq(index).text(ele.articalCont);
            $(p_yq).find(" .p-yq-date").eq(index).text(ele.date);
            $(p_yq).find(" .p-yq-hour_minute1").eq(index).text(ele.time);
        });

        //聊聊模块适配
        $(data.liaoliao).each(function(index,ele){
            $(p_ll).find(" .cage").eq(index).text(ele.llCage);
            $(p_ll).find(" .chat-title").eq(index).text(ele.chatTitle);
            $(p_ll).find(" .chat-cont").eq(index).text(ele.chatCont);
        });

        //游记模块适配
        $(data.youji).each(function(index,ele){
            $(p_yj).find(" .note img").eq(index).attr("src",ele.yjPic);
            $(p_yj).find(" .note-title").eq(index).text(ele.noteTitle);
            $(p_yj).find(" .note-author").eq(index).text(ele.noteAuthor);
            $(p_yj).find(" .note-desc-cont").eq(index).text(ele.noteDesc);
        });

        //其他模块适配
        $(data.other).each(function(index,ele){
            $(p_other).find(".p-details img").eq(index).attr("src",ele);
        });
    })
});