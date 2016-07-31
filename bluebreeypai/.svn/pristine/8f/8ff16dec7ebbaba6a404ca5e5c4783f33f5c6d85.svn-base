//针对专辑和评论区的分页器生成 逻辑要简单些
$(function(){
    var numPerPage = 3;//这个是每页三组数据
    //先要获取一共多少数据，向后台发送请求
/*    $.get('test.php',{},function(data){
        var pageCount = Math.ceil(data/numPerPage);//得到页数，然后动态增加分页器
        inserHtml(pageCount,1)
        bindEvent(pageCount);
    })*/
    var pageCount=8;
    var obj = $('.song-page');
    createPage(obj,pageCount,1);
    addEvent(obj,pageCount);

    function createPage(container,page,current){
        container.empty();
        if(current>1){
            container.append('<span class="gs-page-first">&lt;&lt;</span>');
            container.append('<span class="gs-pageadv">&lt;</span>');
        }
        // 这个赋值判断是实现中间的固定数目滚动
        var begin=current>page-3?page-4:current-2;
        var end = current<3?5:current+2;
    /*  if(current<3){
            var end = 5;
        }else{
            var end = current+2;
        }
        if(current>page-3){
            var begin = page-4;
        }else{
            var begin = current-2;
        }*/
        for(;begin<=end; begin++){
            if(begin<=page && begin >=1){
                if(begin != current){
                    container.append('<span class="gs-pages">'+begin+'</span>');
                }else{
                    container.append('<span class="gs-pages on">'+begin+'</span>');
                }   
            }
        }
        if(current<page){
            obj.append('<span class="gs-pagenext">&gt;</span>');
            obj.append('<span class="gs-page-end">&gt;&gt;</span>');
        }
    }

    function addEvent(container,page){ //为5种按钮添加事件 getData是回调函数 先注释掉
        container.on('click','.gs-page-first',function(){
            createPage(container,page,1);
            // getData(1);
        });
        container.on('click','.gs-pageadv',function(){
            var currentPage = parseInt(container.children('.on').text());
            createPage(container,page,currentPage-1);
            // getData(currentPage-1);
        });
        container.on('click','.gs-pages',function(){
            var currentPage = parseInt($(this).text());
            createPage(container,page,currentPage);
            // getData(currentPage);
        });
        container.on('click','.gs-pagenext',function(){
            var currentPage = parseInt(container.children('.on').text());
            createPage(container,page,currentPage+1);
            // getData(currentPage=1);
        });
        container.on('click','.gs-page-end',function(){
            createPage(container,page,page);
            // getData(page);
        })
    }
})