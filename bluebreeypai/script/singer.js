/**
 * @Author:      geekarl
 * @DateTime:    2016-07-21 23:43:21
 * @Description: 明天写关于专辑和歌曲列表切换的js事件
 */

 $(function(){
    // 专辑和歌曲页的切换显示
    $(".tab-zj a").on("click",function(){
        console.log('123');
        $(this).addClass('on');
        $(".tab-gq a").removeClass('on');
        $("div.gs-songs").css({display:"none"});
        $(".gs-albums").stop().fadeIn(300);
    });
    $(".tab-gq a").on("click",function(){
        $(this).addClass("on");
        $(".tab-zj a").removeClass('on');
        $(".gs-albums").css({display:"none"});
        $("div.gs-songs").stop().fadeIn(300); 
    });

    //专辑的收起和展开
    $(".gs-cover").on("click",function(){
        $(this).find(".gs-songlist").toggle(400);
        $(this).siblings("ul.gs-songs").stop().slideToggle(400);
        $(this).siblings(".gs-albumtri").stop().toggleClass('on');
    });
    $(".gs-albumtri").on("click",function(){
        $(this).siblings(".gs-cover").trigger('click');
    })

    //评论的回复框弹出事件
    $(".gs-comwhole").on("click",function(){
        if($(this).next('.gs-popreplay').length===0){
            var n = $(this).index(".gs-comwhole");
            // var cloneReply = $(".ts-popreplay").eq(0).clone(ture);
            var cloneEle = $('<div class="gs-popreplay"><div class="gspop-tri"></div><div class="gs-replaycont"><input type="text"><a href="javascript:;">回复</a></div><i></i></div>');
            cloneEle.insertAfter($(this));
            $(this).next('.gs-popreplay').stop().slideDown(300);
        }
        $(".gs-popreplay i").on("click",function(){
            $(this).parent().stop().slideUp(300,function(){
                $(this).remove();
            });
        });
        $(".gs-popreplay .gs-replaycont a").on("click",function(){
            var n = $(this).index(".gs-popreplay a");
            var str = $('.gs-popreplay input').val();
            if(!(str)){
                //这里提交回复触发ajax事件和添加回复事件。
            }
            $('.gs-popreplay').eq(n).on("click",function(){
                $(this).stop().slideUp(300,function(){
                    $(this).remove();
                });
            }); 
        }); 
    })
 })