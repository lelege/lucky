var pc='http://danmao.cn/';	
var system = {
    win:false,
    mac:false,
    xll:false
};

var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = p == "X11" || p.indexOf("Linux") == 0;

if (system.win || system.mac || system.xll) {
  window.location.href = pc;
}

document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/core.js"></script>');
document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/enc-base64.js"></script>');
document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/cipher-core.js"></script>');
document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/aes.js"></script>');
document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/mode-ecb.js"></script>');

setTimeout(function(){
    
json = jiemi(document.getElementById("lbjm").innerText);

obj = JSON.parse(json);

len = obj.lelejk.length;

liebiao = '';

for(i=0; i < len; i++){
title = obj.lelejk[i].title;
video = './info.php?vid=' + obj.lelejk[i].id+'&jx='+jk;
image = obj.lelejk[i].image;
time = obj.lelejk[i].time;
views = obj.lelejk[i].views;
if(views){views = parseInt(99999*Math.random());};

liebiao += '<a class="index__item__src-search-board-Results-videoItem-" href="'+ video +'"><div class="index__imageContainer__src-search-board-Results-videoItem-"><img src="'+ image +'" alt=""><div class="lazyload-placeholder" style="height: 146px;"></div><div class="index__duration__src-search-board-Results-videoItem-"><p>'+ time +'</p></div></div><div class="index__desc__src-search-board-Results-videoItem-"><div class="index__title__src-search-board-Results-videoItem-"><p>'+ title + '</p></div><div class="index__author__src-search-board-Results-videoItem-"><img src="https://s1.hdslb.com/bfs/static/mult/images/ico_up.png" alt=""><p>'+ time +'</p><div class="index__clear__src-search-board-Results-videoItem-"></div></div><div class="index__subInfo__src-search-board-Results-videoItem-"><div class="index__playAmount__src-search-board-Results-videoItem-"><img src="https://s1.hdslb.com/bfs/static/mult/images/ico_play.png" alt=""><p>'+views+'</p><div class="index__clear__src-search-board-Results-videoItem-"></div></div><div class="index__danmuAmount__src-search-board-Results-videoItem-"><img src="https://s1.hdslb.com/bfs/static/mult/images/ico_danmu.png" alt=""><p>'+'20'+'</p><div class="index__clear__src-search-board-Results-videoItem-"></div></div><div class="index__clear__src-search-board-Results-videoItem-"></div></div></div><div class="index__clear__src-search-board-Results-videoItem-"></div></a>';
}

document.getElementById("lbjm").innerHTML = liebiao;

document.getElementById("loading").style.display="none";

document.getElementById("title").innerText = '已为您找到关于['+jiemi(document.getElementById("title").innerText)+']的内容';

}, 500);