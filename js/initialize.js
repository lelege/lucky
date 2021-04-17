document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/core.js"></script>');
document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/enc-base64.js"></script>');
document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/cipher-core.js"></script>');
document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/aes.js"></script>');
document.writeln('<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/mode-ecb.js"></script>');
document.writeln('<script src="./js/call.js"></script>');

setTimeout(function(){


if(document.location.pathname == '/aliyun/info.php'){
button = ' <button class="btn btn-outline-info" type="button" id= "btn2" >更多类型</button>';
button += '<button class="btn btn-outline-secondary" type="button" id= "btn1">返回列表</button>';
document.getElementById('btn').innerHTML = button;
document.getElementById("btn1").addEventListener("click",function(){history.back(-1);});
}else{
button = ' <button class="btn btn-outline-info" type="button" id= "btn1" >更换视频</button>';
button += '<button class="btn btn-outline-secondary" type="button" id= "btn2">更多类型</button>';
document.getElementById('btn').innerHTML = button;
document.getElementById("btn1").addEventListener("click",function(){location.reload();});
}

document.getElementById("btn2").addEventListener("click",function(){window.location.href = "./sslb.php?token=" + getsjs();});


h6 = jiemi(bt_token);

document.getElementById('title').innerHTML = h6;

url = jiemi(ae_token);

video = document.createElement("video");
video.setAttribute("width", "100%");
if(deviceType() == 1){
video.setAttribute("height", "240px");
}else{
video.setAttribute("height", "180px");
}
video.setAttribute("controls", "controls");
video.setAttribute("autoplay", "autoplay");
video.setAttribute("preload", "metadata");
video.setAttribute("src", url);
video.setAttribute("onloadstart", "myFunction()");
document.getElementById("play").appendChild(video);


}, 500);


function myFunction() {
document.getElementById("loading").style.display="none";
document.title = '欢迎使用'; 
}


function getsjs(){
	str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	strlen = str.length;
	randstr = "";
	for (i = 0; i < 8; i++) {
		randstr += str[random(0, strlen - 1)];
	}
	return randstr;
}

function random(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

function deviceType(){
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if (isAndroid) {
return 2;
}
if (isIOS) {
return 1;
}
}