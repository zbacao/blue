$(function(){
    new Selected().init();
    $(".xq-control").on('click',function(){
        var player = document.getElementById('audio');
        $(this).toggleClass('on');
        if(player.paused){
            player.play();
        }else{
            player.pause();
        }
    });
});
var Selected = function(){
    this.audio = document.getElementById('audio');
    this.lyricContainer = document.getElementById('lyc');
    this.currentIndex = 0;
}
Selected.prototype = {
    constructor:Selected,
    init:function(){
        this.play('ganghao');
    },
    play:function(songName){
        var that = this;
        this.audio.src = 'res/'+songName+'.mp3';
        this.lyricContainer.style.top = '100px';
        this.lyricContainer.textContent = 'loading...';
        this.audio.addEventListener('canplay',function(){
            // that.getLyric(that.audio.src.replace('.mp3','.lrc'));
            // that.getLyric('../res/ganghao.lrc')
            that.getLyric();
            // this.play(); //放开后会直接播放 不太好
        });
        this.audio.addEventListener('timeupdate',function(e){
            if(!that.lyric) return;
            for(var i=0,l=that.lyric.length; i<l; i++){
                if(this.currentTime > that.lyric[i][0] -0.30){//提前0.3s载入歌词
                    var line = document.getElementsByClassName("lyc-text")[i];
                    var n=i>0?i-1:i;
                    var prevLine = document.getElementsByClassName("lyc-text")[n];
                    prevLine.className = 'lyc-text';
                    line.className = 'lyc-text '+'on';
                    that.lyricContainer.style.top = 100-line.offsetTop + 'px';
                };
            };
        });
    },
    getLyric: function(){//实际应该是对后台的ajax请求获得的接口
        // var that = this;
        data="[00:00.00] 薛之谦 - 刚刚好"+"\n"+
             "[00:04.00] 词曲：薛之谦"+"\n"+
             "[00:12.00] 歌词编辑：果果"+"\n"+
             "[00:16.00] QQ:765708831"+"\n"+
             "[00:20.00] 中文歌词库 www.cnLyric.com"+"\n"+
             "[00:37.67] 如果有人在灯塔"+"\n"+
             "[00:40.01] 拨弄她的头发"+"\n"+
             "[00:42.09] 思念刻在墙和瓦"+"\n"+
             "[00:46.29] 如果感情会挣扎"+"\n"+
             "[00:48.75] 没有说的儒雅"+"\n"+
             "[00:50.95] 把挽回的手放下"+"\n"+
             "[00:54.70] 镜子里的人说假话"+"\n"+
             "[00:58.65] 违心的样子你决定了吗"+"\n"+
             "[01:03.79] 装聋或者作哑 要不我先说话"+"\n"+
             "[01:15.98] 我们的爱情 到这刚刚好"+"\n"+
             "[01:20.06] 剩不多也不少 还能忘掉"+"\n"+
             "[01:25.31] 我应该可以 把自己照顾好"+"\n"+
             "[01:33.36] 我们的距离 到这刚刚好"+"\n"+
             "[01:37.29] 不够我们拥抱 就挽回不了"+"\n"+
             "[01:42.55] 用力爱过的人 不该计较"+"\n"+
             "[01:59.12] 是否要逼人弃了甲"+"\n"+
             "[02:01.56] 亮出一条伤疤"+"\n"+
             "[02:03.63] 不堪的根源在哪"+"\n"+
             "[02:07.60] 可是感情会挣扎"+"\n"+
             "[02:09.96] 没有别的办法"+"\n"+
             "[02:12.28] 它劝你不如退下"+"\n"+
             "[02:16.04] 如果分手太复杂"+"\n"+
             "[02:19.56] 流浪的歌手会放下吉他"+"\n"+
             "[02:24.51] 故事要美必须藏着真话"+"\n"+
             "[02:32.57] 我们的爱情 到这刚刚好"+"\n"+
             "[02:36.29] 剩不多也不少 还能忘掉"+"\n"+
             "[02:41.63] 我应该可以 把自己照顾好"+"\n"+
             "[02:49.35] 我们的距离 到这刚刚好"+"\n"+
             "[02:53.12] 不够我们拥抱 就挽回不了"+"\n"+
             "[02:58.41] 用力爱过的人 不该计较"+"\n"+
             "[03:06.28] 我们的爱情到这刚刚好"+"\n"+
             "[03:10.03] 再不争也不吵 不必再煎熬"+"\n"+
             "[03:15.24] 你可以不用 记得我的好"+"\n"+
             "[03:22.93] 我们的流浪到这刚刚好"+"\n"+
             "[03:26.85] 趁我们还没到 天涯海角"+"\n"+
             "[03:31.76] 我也不是非要去那座城堡"+"\n"+
             "[03:39.74] 天空有些暗了暗的刚刚好"+"\n"+
             "[03:43.73] 我难过的样子就没人看到"+"\n"+
             "[03:48.84] 你别太在意我身上的记号"
        this.lyric = this.parseLyric(data);
        this.appendLyric(this.lyric);
        // $.get(url, function (data) {  
        //     that.lyric = that.parseLyric(data);
        //     that.appendLyric(that.lyric);
        // });  
    },
    parseLyric: function(text){
        var lines = text.split('\n'),
            pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
            result = [];
        var offset = this.getOffset(text);
        while(!pattern.test(lines[0])){
            lines = lines.slice(1);
        };
        lines[lines.length-1].length === 0 && lines.pop();
        lines.forEach(function(v,i,a){
            var time = v.match(pattern),
                value = v.replace(pattern,''); //把时间和歌词文本拆分开
            time.forEach(function(v1,i1,a2){
                var t = v1.slice(1,-1).split(':');
                result.push([parseInt(t[0],10)*60 + parseFloat(t[1]) + parseInt(offset)/1000,value]);
            });
        });
        result.sort(function(a,b){
            return a[0] - b[0];
        }); //排序函数
        return result;
    },
    getOffset: function(text){ //针对的是带offset标签的歌词
        var offset = 0;
        try{
            var offsetPattern = /\[offset:\-?\+?\d+\]/g,
                offset_line = text.match(offsetPattern)[0],
                offset_str = offset_line.split(':')[1];
            offset = parseInt(offset_str);
        }catch(err){
            offset = 0;
        }
        return offset;
    },
    appendLyric: function(lyric){
        var that = this,
            lyricContainer = this.lyricContainer,
            fragment = document.createDocumentFragment();
        this.lyricContainer.innerHTML = '';
        lyric.forEach(function(v,i,a){
            var line = document.createElement('p');
            line.className = 'lyc-text';
            line.textContent = v[1];
            fragment.appendChild(line);
        });
        lyricContainer.appendChild(fragment); //用碎片容器减少重绘；
    }
}