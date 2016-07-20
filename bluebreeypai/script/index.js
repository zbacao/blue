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

    var mySwiper2 = new Swiper('#swiper-container2', {
        pagination: '.swiper-pagination',
        loop: true,
        noSwiping: true,
        autoplayDisableOnInteraction: false
    });
    mySwiper2.params.autoplay = false;

    var mySwiper3 = new Swiper('#swiper-container3', {
        pagination: '.swiper-pagination',
        loop: true,
        noSwiping: true,
        autoplayDisableOnInteraction: false
    });
    mySwiper3.params.autoplay = false;

    var mySwiper4 = new Swiper('#swiper-container4', {
        pagination: '.swiper-pagination',
        loop: true,
        noSwiping: true,
        autoplayDisableOnInteraction: false
    });
    mySwiper4.params.autoplay = false;

    var mySwiper5 = new Swiper('#swiper-container5', {
        pagination: '.swiper-pagination',
        loop: true,
        noSwiping: true,
        autoplayDisableOnInteraction: false
    });
    mySwiper5.params.autoplay = false;

    //页面数据适配

    $.getJSON("json/index.json",function(data){
        //console.log(data);
        //banner数据适配  start
        $("#swiper-container1 .swiper-slide").each(function(index,ele){
            $("#swiper-container1 .swper1img").eq(index).attr("src",data.banner[index].bannerimg);
            $("#swiper-container1 .ban-title").eq(index).text(data.banner[index].banTitle);
            $("#swiper-container1 .ban-cont").eq(index).text(data.banner[index].banCont);
        });
        //banner数据适配  start

        //乐章模块适配
        $("#p_yz .artical-pic").each(function(index,ele){
            $("#p_yz .artical-pic").eq(index).attr("src",data.yuezhang[index].yzPic);
            $("#p_yz .artical-title").eq(index).text(data.yuezhang[index].articalTitle);
            $("#p_yz .author").eq(index).text(data.yuezhang[index].author);
            $("#p_yz .artical-cont").eq(index).text(data.yuezhang[index].articalCont);
            $("#p_yz .p-yz-date").eq(index).text(data.yuezhang[index].date);
            $("#p_yz .p-yz-hour_minute1").eq(index).text(data.yuezhang[index].time);
            $("#p_yz .zan-num").eq(index).text(data.yuezhang[index].zan);
            $("#p_yz .pl-num").eq(index).text(data.yuezhang[index].pl);
        });

        //听说模块适配
        $(data.tingshuo).each(function(index,ele){
            $("#p_ts .to-left img").eq(index).attr("src",ele.albumPic);
            $("#p_ts .singer").eq(index).text(data.tingshuo[index].singer);
            $("#p_ts .album-name").eq(index).text(ele.albumName);
            $("#p_ts .album-desc").eq(index).text(ele.albumDesc);
        });

        //乐趣模块适配
        $(data.yuequ).each(function(index,ele){
            $("#p_yq .artical-pic").eq(index).attr("src",ele.yqPic);
            $("#p_yq .artical-title").eq(index).text(ele.articalTitle);
            $("#p_yq .author").eq(index).text(ele.author);
            $("#p_yq .artical-cont").eq(index).text(ele.articalCont);
            $("#p_yq .p-yq-date").eq(index).text(ele.date);
            $("#p_yq .p-yq-hour_minute1").eq(index).text(ele.time);
        });

        //聊聊模块适配
        $(data.liaoliao).each(function(index,ele){
            $("#p_ll .cage").eq(index).text(ele.llCage);
            $("#p_ll .chat-title").eq(index).text(ele.chatTitle);
            $("#p_ll .chat-cont").eq(index).text(ele.chatCont);
        });

        //游记模块适配
        $(data.youji).each(function(index,ele){
            console.log(ele.yjPic);
            $("#p_yj .note img").eq(index).attr("src",ele.yjPic);
            $("#p_yj .note-title").eq(index).text(ele.noteTitle);
            $("#p_yj .note-author").eq(index).text(ele.noteAuthor);
            $("#p_yj .note-desc-cont").eq(index).text(ele.noteDesc);
        });

        //其他模块适配
        $(data.other).each(function(index,ele){
            $("#p_other .p-details img").eq(index).attr("src",ele);
        });
    })
});