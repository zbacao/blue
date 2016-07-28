/**
 * Created by zbacao on 2016/7/27.
 */
$(function(){
    $(".ts-popcomment").on("click",function(){
        if($(this).next('.ts-popreplay').length===0){
            var n = $(this).index(".ts-popcomment");
            // var cloneReply = $(".ts-popreplay").eq(0).clone(ture);
            var cloneEle = $('<div class="ts-popreplay clearfix"><div class="tspop-tri"></div><div class="ts-replaycont"><input type="text"><a href="javascript:;">评论</a></div><i></i></div>');
            cloneEle.insertAfter($(this));
            $(this).next('.gs-popreplay').stop().slideDown(300);
        }
        $(".ts-popreplay i").on("click",function(){
            $(this).parent().stop().slideUp(300,function(){
                $(this).remove();
            });
        });
        $(".ts-popreplay .ts-replaycont a").on("click",function(){
            var n = $(this).index(".ts-popreplay a");
            var str = $('.ts-popreplay input').val();
            if(!(str)){
                //�����ύ�ظ�����ajax�¼�����ӻظ��¼���
            }
            $('.ts-popreplay').eq(n).on("click",function(){
                $(this).stop().slideUp(300,function(){
                    $(this).remove();
                });
            });

        });
    });

    $(".i_cbody").on("click",function(){
        console.log(1)
    })
});