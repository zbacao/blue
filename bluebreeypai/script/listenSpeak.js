/**
 * @Author:      geekarl
 * @DateTime:    2016-07-16 16:32:12
 * @Description: 蓝莓派听说页面的js代码 主要是副导航的事件 瀑布流单独文件引入
 */

 $(function(){
 	//弹出的登陆框事件
    $(".main").height($(window).height()-320);
    $(".login-reg-select>a").each(function(index,ele){
        $(ele).on("click",function(){
            $(".account-box").eq(index).css("display","block").siblings(".account-box").css("display","none");
                $(this).addClass("a1").siblings().removeClass("a1");
        });
    })
    $("#log").on("click",function(){
    	$(".main").css({display:'block'});
    })
    //弹出的登陆框事件结束
 	$(".ts-nav .ts-drag em").on("click",function(){
 		$(this).addClass('on').siblings().removeClass('on');
 		// 此处缺包含ajax在内的向后台请求数据的函数。
 	});
 	$(".ts-nav .ts-drag .ts-navtitle").on("click",function(){
 		$(this).parent().toggleClass('on');
 	})
 	$(".ts-nav .ts-seareng i").on("click",function(){
 		$(this).addClass('on').siblings().removeClass('on');
 		// 此处缺包含ajax在内的向后台请求数据的函数,这是根据字母筛选。
 	})
 	$(".ts-nav .ts-searchs a").on("click",function(){
 		$(this).addClass('on').siblings().removeClass('on');
 		// 此处缺包含ajax在内的向后台请求数据的函数,这是根据人名筛选。
 	})
 	// 定义一个函数，传参数让每次承载人名的容器向右或者左移动62px,与轮播图的函数类似；
 	function ts_move(index){
 		var elewidth = 70;
 		var leftval = $(".ts-searchs-cont span a").eq(0).css("left");
 		var showNum = Math.round($(".ts-searchs-cont span").width()/elewidth);
 		var sumNum = $(".ts-searchs-cont span a").length;
 		if(Math.floor((-1*parseInt(leftval)/elewidth))<(sumNum-showNum)&&index>0){
 			$(".ts-searchs-cont span a").animate({
 					left:parseInt(leftval)-elewidth
 			},300);
 		}else if(index<0&&parseInt(leftval)<0){
 			$(".ts-searchs-cont span a").animate({
 				left: parseInt(leftval)+elewidth
 			},300);
 		}
 	}
 	$(".ts-searchs .ts-navbtn-l").on("click",function(){
 		ts_move(1);
 	})
 	$(".ts-searchs .ts-navbtn-r").on("click",function(){
 		ts_move(-1);
 	})
 	// 弹出框的js逻辑  后面可能会移植成独立的
 	$(".ts-card").on("click",function(){
 		$(".ts-popcard").fadeIn(300);
 		// 这里应该写包含ajax在内的弹窗数据适配函数
 		$(".mengban").css({display:'block'});
 	})
 	$(".mengban").on("click",function(){
 		$(".ts-popcard").fadeOut(300);
 		$(".mengban").css({display:'none'});
 		//清除弹框内数据的函数。
 	})
 	//弹出框内的回复div事件
 	$(".ts-popcard .ts-popcomment").on("click",function(){
 		console.log($(this).next('.ts-popreplay'));
 		if($(this).next('.ts-popreplay').length===0){
 			var n = $(this).index(".ts-popcomment");
 			// var cloneReply = $(".ts-popreplay").eq(0).clone(ture);
 			var cloneEle = $('<div class="ts-popreplay clearfix"><div class="tspop-tri"></div><div class="ts-replaycont"><input type="text"><a href="javascript:;">回复</a></div><i></i></div>')
 			cloneEle.insertAfter($(this));
 			$(".ts-popreplay").eq(n).stop().slideDown(300);
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
	 			console.log('123');
	 		}
	 		$('.ts-popreplay').eq(n).on("click",function(){
	 			$(this).stop().slideUp(300,function(){
	 				$(this).remove();
	 			});
 			});	
 		});	
 	})
})