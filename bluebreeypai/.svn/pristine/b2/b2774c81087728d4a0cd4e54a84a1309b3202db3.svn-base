/**
 * Created by Administrator on 2016-08-03.
 */
$(function(){

    /**
     * Created by Administrator on 2016-07-27.
     */
    $(function() {

        //点击输入框后默认文本消失 start
        //var inputBlogTitle = $("#input_blog_title");
        //inputBlogTitle.on("click", function () {
        //    if (inputBlogTitle.get(0).placeholder === "请输入标题（必填）") {
        //        $(this).css("color", "#000");
        //        $(this).get(0).placeholder = "";
        //    }
        //});
        //点击输入框后默认文本消失 end

        //添加和移除标签  start
        (function(){
            var labelInput = $(".disp");
            var ipva=$(".ipva");
            var iInp=$(".i_inp");

            //按下回车键生成标签
            $(ipva).on("keypress", function () {
                if (window.event) {
                    oEvent = window.event;		//处理兼容性，获得事件对象
                    //设置IE的charCode值
                    oEvent.charCode = (oEvent.type == "keypress") ? oEvent.keyCode : 0;
                }
                if (oEvent.keyCode == 13) {
                    var rds = $(this).val();
                    var parten = /^\s*$/;
                    if (parten.test(rds)) {
                    } else {
                        //var sortable = $(".ui-sortable");

                        $(this).parent().find(".disp").append('<span id="dc" class="sort"  style="  background: rgb(16,157,89);  white-space: nowrap; border-radius:3px; float: left;  display: block; padding-left: 5px; margin: 8px;  height: 22px;  font-size: 14px;  color: #fff;  text-indent: 0; "><div  id="dart"  style="padding:0px 6px; cursor:pointer; height:22px; display:block; float:left;   line-height:22px;">' + rds + '</div><img  class="close"  src="indexImg/close2.png" style="float:left; display:block; cursor:pointer; " /></span>');
                        $(this).val("");

                        again();
                    }
                }
            });


            function again(){
                //如果标签个数大于2个则移除输入框
                if ((labelInput.children().length - 1) > 2) {
                    $(".ipva").remove();
                }

                //点击关闭图标时移除当前标签，并加回输入框
                $(".close").on("click",function(){
                    console.log("haha");
                    $(this).parent().remove();
                    if((labelInput.children().length - 1) <3  &&  $(".ipva").length===0){
                        $(".i_inp").append("    <input class='ipva'   name=''    type='text'   />");
                    }
                });
            }

            $(iInp).on("click",function(){
                $(this).find(".ipva").css("display","block");
                $(this).find(".ipva").focus();
            });

        })();
        //添加和移除标签  end

        //上传文件组件调用
            //正则用来判断文件格式:
        var musicReg=/^(mp3|ogg|wma|wav|aac|flac|ape)$/gi;
        var picReg=/.*(jpg|bmp|gif|png|psd|tiff|swf|svg|emf)$/gi;
        //假按钮,事件,真按钮,上传值显示区域,正则,提示文字区域,错误样式,正确样式,错误提示,正确提示
        onloadfile("#musicBtn","click","#uploadMusic","#txtEditor",musicReg,"#fileTypeTips",{display:"inline-block"},{display:"none"},"请上传音乐格式文件","");
        onloadfile("#picBtn","click","#uploadPic","#txtEditor",picReg,"#fileTypeTips",{display:"inline-block"},{display:"none"},"请上传图片格式文件","");
    });


//弹出框内的回复div事件
    $(".ts-popcomment").on("click",function(){
        if($(this).next('.ts-popreplay').length===0){
            var n = $(this).index(".ts-popcomment");
            // var cloneReply = $(".ts-popreplay").eq(0).clone(ture);
            var cloneEle = $('<div class="ts-popreplay clearfix"><div class="tspop-tri"></div><div class="ts-replaycont"><input type="text"><a href="javascript:;">回复</a></div><i></i></div>');
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
                //这里提交回复触发ajax事件和添加回复事件。
            }
            $('.ts-popreplay').eq(n).on("click",function(){
                $(this).stop().slideUp(300,function(){
                    $(this).remove();
                });
            });
        });
    })
});