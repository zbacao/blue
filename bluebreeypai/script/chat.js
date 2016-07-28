$(function(){
    // 针对可重用的导航栏的点击样式
    $(".repeat-nav a").on("click",function(){
        $(this).addClass('on').siblings().removeClass('on');
    })
    //多个页面要用的瀑布流摆放（不需要连续加载）
    cardWaterfall();
    function cardWaterfall(){
        var cardArr=$(".ts-card");
        var cardWidth = cardArr.eq(0).width()+20;
        var num = Math.floor($(".ts-container").width()/cardWidth);
        var heightArr = [];
        cardArr.each(function(index,element){
            var cardHeight = cardArr.eq(index).height();
            if(index < num){
                heightArr[index] = cardHeight+15;
            }else{
                var minHeight = Math.min.apply(null,heightArr);
                var minIndex = $.inArray(minHeight,heightArr);
                if (minHeight > ($(".ts-container").height()-500)){ 
                    var n = $(element).index(".ts-card");
                    $(element).remove();
                    //这个数字可能对写下一页有用
                }else{
                    $(element).css({
                        position:"absolute",
                        left: cardArr.eq(minIndex).position().left,
                        top:minHeight
                    });
                    heightArr[minIndex] += cardArr.eq(index).height()+15;
                }
                
            }
        })
    }
})