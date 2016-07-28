$(function(){
    function musicplay() {
        //音乐播放控制
        var playerTimer = null;
        var singerTimer = null;
        var audio = $('#aud')[0];
        if (audio.paused) {
            audio.play();
            audio.loop = true;
            $("#playbutton").attr("src", "indexImg/pause.png");
        } else {
            audio.pause();
            $("#playbutton").attr("src", "indexImg/play-btn_03.png");
        }

        //播放时间显示
        /**********计时器1(用来快速更新时间显示)**********/
        playerTimer = setInterval(function () {
            var playTime_s = audio.currentTime;
            var mTime = parseInt(playTime_s / 60);
            var sTime = parseInt(playTime_s % 60);

            var totalTime = audio.duration;
            var mTime_total = parseInt(totalTime / 60);
            var sTime_total = parseInt(totalTime % 60);

            var remainTime = totalTime - playTime_s;

            function checkTime(m, s) {
                if (m < 10) {
                    m = "0" + m;
                } else {
                    m += "";
                }

                if (s < 10) {
                    s = "0" + s;
                } else {
                    s += "";
                }
                return m + ":" + s;
            }

            var pagePassTime = checkTime(mTime, sTime);
            var pageTotalTime = checkTime(mTime_total, sTime_total);

            $("#passTime").html(pagePassTime);
            $("#totalTime").html(pageTotalTime);

            //进度条
            var playedTimePercent = playTime_s / totalTime;
            var remainTimePercent = remainTime / totalTime;
            if ((totalTime - playTime_s) > 0) {
                $(".progressBar-remain").width(remainTimePercent * 100 + "%");
                $(".progressBar-passed").width(playedTimePercent * 100 + "%");
            } else if ((totalTime - playTime_s) === 0) {
                $(".progressBar-passed").width(0);
                $(".progressBar-remain").width(100 + "%");
                audio.play();
            }
        }, 1);

        //交叉显示歌手头像照片
        $(".song-pic:eq(0)").css("opacity", 1);
        $(".song-details ul li").on("click",function(){
                var n=$(this).index(".song-details ul li");
                $(".song-pic").eq(n).css("opacity", 1).siblings(".song-pic").css("opacity", 0);
        });


        /**********计时器2(用来每隔一定时间更换照片)**********/
        function autoSwitch(){
            var s=0;
            if(s>=document.querySelectorAll(".song-pic").length-1){
                s=0;
            }else{
                ++s;
            }
            s=s==0?my_a.length-1:--s;

            $('.song-details ul li')[s].trigger('click');
        }

        singerTimer = setInterval(function () {
            autoSwitch();
        },1000);
    }

    //运行播放器
    musicplay();

    //控制播放按钮
    $("#playbtn").on("click",function(){
        musicplay();
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