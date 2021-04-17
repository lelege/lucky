var form = '<center><font style="font-weight:bold;font-size:15px;" color="brown">&#x60F3;&#x8981;&#x770B;&#x7684;&#x8FD9;&#x91CC;&#x90FD;&#x80FD;&#x641C;&#x7D22;&#x5594;~<br>&#40664;&#35748;&#36873;&#25321;&#20840;&#32593;&#36164;&#28304;&#65292;&#24744;&#20063;&#21487;&#20197;&#28857;&#20987;&#19979;&#26041;&#36164;&#28304;&#20999;&#25442;</font></center>';
form += '<form action="list.php" method="get" class="form-inline" id="from-test" onsubmit="return checkInput()">';
form += '<div class="select-item"> ';
form += '<label><input type="radio" name="jk" value="xv" class="input-radio" checked/>全网资源</label>';
form += '<label><input type="radio" name="jk" value="xj" class="input-radio"/>香蕉资源</label>';
form += '<label><input type="radio" name="jk" value="huangua" class="input-radio"/>黄瓜资源</label>';
form += '<label><input type="radio" name="jk" value="xnzy" class="input-radio"/>最大资源</label>';
form += '<div class="search d1">';
form += '<input type="text" id="k"  placeholder="&#x8FD9;&#x91CC;&#x8F93;&#x5165;&#x4F60;&#x60F3;&#x8981;&#x770B;&#x7684;(*&#x2267;&#x25BD;&#x2266;)">';
form += '<input type="hidden" id="base64" name="k">';
form += '<button></button>';
form += '</div><br><div class="d-grid gap-2 col-8 mx-auto"><button class="btn btn-outline-success btn-lg" type="button" id= "btn1" >点击这里随机推荐</button></div></div>';
form += '</form>';

document.getElementById('form').innerHTML = form;


document.getElementById("btn1").addEventListener("click",function(){window.location.href = "./sj.php?token=" + getsjs();});

function checkInput() {
var b = new Base64();
    var k = document.getElementById('k');
    var k_base64 = document.getElementById('base64');
    k_base64.value =  b.encode(k.value);
    return true;
}


function getsjs(){
	str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	strlen = str.length;
	randstr = "";
	for (i = 0; i < 16; i++) {
		randstr += str[random(0, strlen - 1)];
	}
	return randstr;
}

function random(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
