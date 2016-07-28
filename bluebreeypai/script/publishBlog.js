/**
 * Created by Administrator on 2016-07-27.
 */
$(function() {

    $("#txtEditor").Editor();
    //点击输入框后默认文本消失
    var inputBlogTitle = $("#input_blog_title");
    inputBlogTitle.on("click", function () {
        if (inputBlogTitle.get(0).placeholder === "请输入标题（必填）") {
            $(this).css("color", "#000");
            $(this).get(0).placeholder = "";
        }
    });

    //点击标签添加的功能实现
    $(".ipva").on("keypress", function () {
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
                var sortable = $(".ui-sortable");

                $(this).parent().find(".disp").append('<span id="dc" class="sort"  style="  background: rgb(16,157,89);  white-space: nowrap; border-radius:3px; float: left;  display: block; padding-left: 5px; margin: 8px;  height: 22px;  font-size: 14px;  color: #fff;  text-indent: 0; "><div  id="dart"  style="padding:0px 6px; cursor:pointer; height:22px; display:block; float:left;   line-height:22px;">' + rds + '</div><img onclick=" $(this).parent().remove();" src="indexImg/close2.png" style="float:left; display:block; cursor:pointer; " /></span>').sortable("refresh");
                $(this).val("");
            }
        }
    });

    $(".recommend-label a").on("click", function () {
        $(".ipva").parent().find(".disp").append('<span id="dc" class="sort"  style="  background: rgb(16,157,89);  white-space: nowrap; border-radius:3px; float: left;  display: block; padding-left: 5px; margin: 8px;  height: 22px;  font-size: 14px;  color: #fff;  text-indent: 0; "><div  id="dart"  style="padding:0px 6px; cursor:pointer; height:22px; display:block; float:left;   line-height:22px;">' + $(this).html() + '</div><img onclick=" $(this).parent().remove();" src="indexImg/close2.png" style="float:left; display:block; cursor:pointer; " /></span>').sortable("refresh");
        $(".ipva").val("");
    });

    //添加标签不超过3个
    var labelInput = $(".disp");
    var myTimer=null;
    myTimer= setInterval(function () {
        console.log(labelInput.children().length - 1);
        if ((labelInput.children().length - 1) > 2) {
            $(".ipva").remove();
        } else {

        }
        //上传音乐按钮右边的文件名显示
        $(".music-name").html($(".input-of-btn").val());

    },500);

    $(".i_inp").on("click",function(){
        $(this).find(".ipva").css("display","block");
        $(this).find(".ipva").focus();

    });

    //上传音乐按钮的模拟点击
    $(".upload-music i").on("click",function(){
        $(".input-of-btn").trigger("click");
    });

    $(".pb-header .cate").on("mouseover",function(){
        $(".cate-nav").css({
            display:"block"
        });
    });
    $(".cate-nav").on("mouseover",function(){
        $(this).css({
            display:"block"
        });
    });
    $(".cate-nav").on("mouseout",function(){
        $(this).css({
            display:"none"
        });
    });
});



