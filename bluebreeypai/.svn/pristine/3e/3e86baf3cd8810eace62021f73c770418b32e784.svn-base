$(function(){
    //专辑介绍展开和收起事件
    $(".xq-albumtext i").on("click",function(){
        $(".xq-albumtext").toggleClass('on');
        $('.text-up').toggle();
        $('.text-down').toggle();
    })
    //动态评分效果
    $(".xq-sharepf b").on("mouseover",function(){
        var n=$(this).index(".xq-sharepf b");
        for(i=0;i<n+1;i++){
            $(".xq-sharepf b").eq(i).addClass('on');
        }
        for(i=10;i>n;i--){
            $(".xq-sharepf b").eq(i).removeClass('on');
        }
    });

    $(".xq-sharepf b").on("click",function(){
        var n=$(this).index(".xq-sharepf b");
        for(i=0;i<n+1;i++){
            $(".xq-sharepf b").eq(i).addClass('on');
        }
        for(i=10;i>n;i--){
            $(".xq-sharepf b").eq(i).removeClass('on');
        }
        $(".xq-sharepf p i").html(n+1+".0分");
        $(".xq-sharepf b").off("mouseover");
    });
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