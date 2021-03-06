$(window).load(function () {


// 截图插件
    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        } else {
            factory(jQuery);
        }
    }(function ($) {
        var cropbox = function(options, el){
            var el = el || $(options.imageBox),
                obj =
                {
                    state : {},
                    ratio : 1,
                    options : options,
                    imageBox : el,
                    thumbBox : el.find(options.thumbBox),
                    spinner : el.find(options.spinner),
                    image : new Image(),
                    getDataURL: function ()
                    {
                        var width = this.thumbBox.width(),
                            height = this.thumbBox.height(),
                            canvas = document.createElement("canvas"),
                            dim = el.css('background-position').split(' '),
                            size = el.css('background-size').split(' '),
                            dx = parseInt(dim[0]) - el.width()/2 + width/2,
                            dy = parseInt(dim[1]) - el.height()/2 + height/2,
                            dw = parseInt(size[0]),
                            dh = parseInt(size[1]),
                            sh = parseInt(this.image.height),
                            sw = parseInt(this.image.width);

                        canvas.width = width;
                        canvas.height = height;
                        var context = canvas.getContext("2d");
                        context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
                        var imageData = canvas.toDataURL('image/png');
                        return imageData;
                    },
                    getBlob: function()
                    {
                        var imageData = this.getDataURL();
                        var b64 = imageData.replace('data:image/png;base64,','');
                        var binary = atob(b64);
                        var array = [];
                        for (var i = 0; i < binary.length; i++) {
                            array.push(binary.charCodeAt(i));
                        }
                        return  new Blob([new Uint8Array(array)], {type: 'image/png'});
                    },
                    zoomIn: function ()
                    {
                        this.ratio*=1.1;
                        setBackground();
                    },
                    zoomOut: function ()
                    {
                        this.ratio*=0.9;
                        setBackground();
                    }
                },
                setBackground = function()
                {
                    var w =  parseInt(obj.image.width)*obj.ratio;
                    var h =  parseInt(obj.image.height)*obj.ratio;

                    var pw = (el.width() - w) / 2;
                    var ph = (el.height() - h) / 2;

                    el.css({
                        'background-image': 'url(' + obj.image.src + ')',
                        'background-size': w +'px ' + h + 'px',
                        'background-position': pw + 'px ' + ph + 'px',
                        'background-repeat': 'no-repeat'});
                },
                imgMouseDown = function(e)
                {
                    e.stopImmediatePropagation();

                    obj.state.dragable = true;
                    obj.state.mouseX = e.clientX;
                    obj.state.mouseY = e.clientY;
                },
                imgMouseMove = function(e)
                {
                    e.stopImmediatePropagation();

                    if (obj.state.dragable)
                    {
                        var x = e.clientX - obj.state.mouseX;
                        var y = e.clientY - obj.state.mouseY;

                        var bg = el.css('background-position').split(' ');

                        var bgX = x + parseInt(bg[0]);
                        var bgY = y + parseInt(bg[1]);

                        el.css('background-position', bgX +'px ' + bgY + 'px');

                        obj.state.mouseX = e.clientX;
                        obj.state.mouseY = e.clientY;
                    }
                },
                imgMouseUp = function(e)
                {
                    e.stopImmediatePropagation();
                    obj.state.dragable = false;
                },
                zoomImage = function(e)
                {
                    e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio*=1.1 : obj.ratio*=0.9;
                    setBackground();
                }

            obj.spinner.show();
            obj.image.onload = function() {
                obj.spinner.hide();
                setBackground();

                el.bind('mousedown', imgMouseDown);
                el.bind('mousemove', imgMouseMove);
                $(window).bind('mouseup', imgMouseUp);
                // el.bind('mousewheel DOMMouseScroll', zoomImage);
            };
            obj.image.src = options.imgSrc;
            el.on('remove', function(){$(window).unbind('mouseup', imgMouseUp)});

            return obj;
        };

        jQuery.fn.cropbox = function(options){
            return new cropbox(options, this);
        };
    }));

    var options =
    {
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: 'images/backsign.png'
    }
    var cropper = $('.imageBox').cropbox(options);
    $('#upload-file').on('change', function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            options.imgSrc = e.target.result;
            cropper = $('.imageBox').cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    $('#btnCrop').on('click', function () {
        var img = cropper.getDataURL();
        $('.p_cropped').html('');
        $('.p_cropped').append('<img src="' + img + '" align="absmiddle" style="width:76px;height:76px;margin-top:4px;;box-shadow:0px 0px 12px #7E7E7E;" ><p>76px*76px</p>');
        $('.p_cropped').append('<img src="' + img + '" align="absmiddle" style="width:128px;margin-top:4px;height:128px;box-shadow:0px 0px 12px #7E7E7E;"><p>128px*128px</p>');
        $('.p_cropped').append('<img src="' + img + '" align="absmiddle" style="width:180px;margin-top:4px;height:180px;box-shadow:0px 0px 12px #7E7E7E;"><p>180px*180px</p>');
    })
    $('#btnZoomIn').on('click', function () {
        cropper.zoomIn();
    })
    $('#btnZoomOut').on('click', function () {
        cropper.zoomOut();
    })



    var bodyScroll=function(event){
        event.preventDefault();
    }


 




//        设置年月日插件
    $(".p_rsetb").on("click", "li", function () {
        $(this).addClass("p_rs").siblings().removeClass("p_rs");
    });


    $(function () {
        $(".p_select ").each(function () {
            var s = $(this);
            var z = parseInt(s.css("z-index"));
            var dt = $(this).children("dt");
            var dd = $(this).children("dd");
            var _show = function () {
                dd.slideDown(200);
                dt.addClass("cur");
                s.css("z-index", 900 + 1);
            };  
            var _hide = function () {
                dd.slideUp(200);
                dt.removeClass("cur");
                s.css("z-index", 900);
            };    
            dt.click(function () {
                dd.is(":hidden") ? _show() : _hide();
            });
            dd.find("a").click(function () {
                dt.html($(this).html());
                _hide();
            });     
            $("body").click(function (i) {
                !$(i.target).parents(".p_select ").first().is(s) ? _hide() : "";
            });
        })
        $(".p_rsex ").each(function () {
            var s = $(this);
            var z = parseInt(s.css("z-index"));
            var dt = $(this).children("dt");
            var dd = $(this).children("dd");
            var _show = function () {
                dd.slideDown(200);
                dt.addClass("cur");
                s.css("z-index", 999 + 1);
            };   
            var _hide = function () {
                dd.slideUp(200);
                dt.removeClass("cur");
                s.css("z-index", 999);
            };    
            dt.click(function () {
                dd.is(":hidden") ? _show() : _hide();
            });
            dd.find("a").click(function () {
                dt.html($(this).html());
                _hide();
            });     
            $("body").click(function (i) {
                !$(i.target).parents(".p_rsex ").first().is(s) ? _hide() : "";
            });
        })

    });

//            设置年月日
    $(function () {
        $.ms_DatePicker({
            YearSelector: ".sel_year",
            MonthSelector: ".sel_month",
            DaySelector: ".sel_day"
        });
        $.ms_DatePicker();
    });

    // 个人设置切换
    $("#p_ra").on("click",function(){
        $(".p_rsetper").css("display","block").siblings().css("display","none");

    });
     $("#p_rb").on("click",function(){
         $(".p_container").css("display","block").siblings().css("display","none");

    })
    $("#p_rc").on("click",function(){
        $(".p_rpsd").css("display","block").siblings().css("display","none");

    });

//  ajax获得数据


    $.getJSON("json/bbsdata.json",function(data){

        var num=[];
        $(data.bbs).each(function(index,ele){
        if(ele.ty=="normal"){
            var div1="<div class='p_bbsDc'><div class='p_bbsDimg'><div class='p_bbsDi'><span class='p_bbsDview'></span></div></div> <div class='p_bbsDtext'><div class='p_bbsDtitle'><p class='p_bbsDp'></p><p class='p_bbsDtd'></p><p class='p_bbsDtt'></p><span class='p_bbsDt'></span></div><p class='p_bbsDca'></p><div class='p_bbsfoot'><p class='p_bbsfootb'></p><span class='p_bbsfoota'></span><p class='p_bbsfootd'></p><span class='p_bbsfootc'></span></div></div></div>";
                var imgUrl=ele.img;
                var view=ele.view;
                var title=ele.title;
                var context=ele.context;
                var date=ele.date;
                var time=ele.time;
                var like=ele.like;
                var comment=ele.comment;

                num=$(".p_bbsDi").length;

                $(div1).appendTo(".p_bbsD");

                $(".p_bbsDi").eq(num).css("background-image",imgUrl);
                $(".p_bbsDview").eq(num).html(view);
                $(".p_bbsDp").eq(num).html(title);
                $(".p_bbsDca").eq(num).html(context);
                $(".p_bbsDtt").eq(num).html(date);
                $(".p_bbsDtd").eq(num).html(time);
                $(".p_bbsfootb").eq(num).html(like);
                $(".p_bbsfootd").eq(num).html(comment);
        }
           if(ele.ty=="noimg"){
            var div2="<div class='p_bbsDc'><div class='p_bbsDtexta'><div class='p_bbsDtitlea'><p class='p_bbsDpa'></p><p class='p_bbsDtda'></p><p class='p_bbsDtta'></p><span class='p_bbsDta'></span></div><p class='p_bbsDcaa'></p><div class='p_bbsfoot'><p class='p_bbsfootba'></p><span class='p_bbsfoota'></span><p class='p_bbsfootda'></p><span class='p_bbsfootc'></span></div></div></div>";

                num=$(".p_bbsDpa").length;
                title=ele.title;
                context=ele.context;
                date=ele.date;
                time=ele.time;
                like=ele.like;
                comment=ele.comment;

                $(div2).appendTo(".p_bbsD");

                $(".p_bbsDpa").eq(num).html(title);
                $(".p_bbsDcaa").eq(num).html(context);
                $(".p_bbsDtta").eq(num).html(date);
                $(".p_bbsDtda").eq(num).html(time);
                $(".p_bbsfootba").eq(num).html(like);
                $(".p_bbsfootda").eq(num).html(comment);

        }
            if(ele.ty=="music"){

            var div3="<div class='p_bbsDc'><div class='p_bbsDimgb'><div class='p_bbsDib'></div></div><div class='p_bbsDtextb'><div class='p_bbsDtitleb'><p class='p_bbsDpb'></p><span class='p_bbsDmu'><p class='p_bbsDmuL'></p>/<p class='p_bbsDmuN'></p></span><p class='p_bbsDtdb'></p><p class='p_bbsDttb'></p><span class='p_bbsDt'></span></div><p class='p_bbsDcab'></p><div class='p_bbsfoot'><p class='p_bbsfootbb'></p><span class='p_bbsfoota'></span><p class='p_bbsfootdb'></p><span class='p_bbsfootc'></span></div></div></div>";

                var imgUrl=ele.img;
                var title=ele.title;
                var context=ele.context;
                var date=ele.date;
                var time=ele.time;
                var like=ele.like;
                var comment=ele.comment;
                var language=ele.language;
                var name=ele.name;

                num= $(".p_bbsDib").length;

                $(div3).appendTo(".p_bbsD");
                $(".p_bbsDib").eq(num).css("background-image",imgUrl);
                $(".p_bbsDpb").eq(num).html(title);
                $(".p_bbsDmuL").eq(num).html(language);
                $(".p_bbsDmuN").eq(num).html(name);
                $(".p_bbsDcab").eq(num).html(context);
                $(".p_bbsDttb").eq(num).html(date);
                $(".p_bbsDtdb").eq(num).html(time);
                $(".p_bbsfootbb").eq(num).html(like);
                $(".p_bbsfootdb").eq(num).html(comment);

            }

        })

    })

    // 私信切换
  
    $(".p_mesTa").on("click",function(){
        $(this).addClass("p_mesClick").siblings().removeClass("p_mesClick");
        $(".p_mesNot").css("display","block").siblings().css("display","none");

    })
    $(".p_mesTb").on("click",function(){
        $(this).addClass("p_mesClick").siblings().removeClass("p_mesClick");
        $(".p_mesMes").css("display","block").siblings().css("display","none");
    })
   
    

    // 整体切换
    $(".p_pdataa").on("click",function(){
         $("*").removeClass("p_scolor");
         $(this).addClass("p_scolor");
         $(".p_bbs").css("display","block").siblings().css("display","none");
    })
     $(".p_pdatab").on("click",function(){
         $("*").removeClass("p_scolor");
         $(this).addClass("p_scolor");
         $(".p_Follow").css("display","block").siblings().css("display","none");
    })
      $(".p_sdatb").on("click",function(){
         $("*").removeClass("p_scolor");
         $(this).addClass("p_scolor");
         $(".p_message").css("display","block").siblings().css("display","none");
    })

      $(".p_sdata").on("click",function(){
         $("*").removeClass("p_scolor");
         $(this).addClass("p_scolor");
         $(".p_rset").css("display","block").siblings().css("display","none");
      })

      $(".p_sdatc").on("click",function(){
         $("*").removeClass("p_scolor");
         $(this).addClass("p_scolor");
         $(".p_myCollect").css("display","block").siblings().css("display","none");
      })

      $(".p_sdatd").on("click",function(){
         $("*").removeClass("p_scolor");
         $(this).addClass("p_scolor");
         $(".p_myComment").css("display","block").siblings().css("display","none");
      })
       $(".p_sdate").on("click",function(){
         $("*").removeClass("p_scolor");
         $(this).addClass("p_scolor");
         $(".p_myTeam").css("display","block").siblings().css("display","none");
      })



});

// 右侧画面切换



 