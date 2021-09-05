var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
function start() {
	var a = parseInt(document.getElementById("vol1").value);
	var b = parseInt(document.getElementById("vol2").value);
	if (a == NaN) {
		a = 1;
	}
	if (b == NaN) {
		b = 1;
	}
	if (a == 0 && b == 0) {
		a = 1;
		b = 1;
	}
	if (a > b) {
		var temp = a;
		a = b;
		b = temp;
	}
	if (a == 0) {
		var temp = b;
		b = a + b;
		a = temp;
	}
	var c;
	var valp = parseFloat(b) / parseFloat(a);
	var dif = (1.6180339887498948482045868 - valp) / (valp);
	if (dif < 0) {
		dif *= -1;
	}
	dif = 100 - dif * 100;
	if (dif < 0) {
		dif *= -1;
	}
	document.getElementById("ans1ar").innerHTML = valp.toFixed(25);
	document.getElementById("ans1sr").innerHTML = ' ' + b + ' / ' + a + ' ';
	document.getElementById("ans1pd").innerHTML = dif.toFixed(25);
	for (var i = 2; i <= 8; i++) {
		c = a + b;
		a = b;
		b = c;
		valp = parseFloat(b) / parseFloat(a);
		dif = (1.6180339887498948482045868 - valp);
		if (dif < 0) {
			dif *= -1;
		}
		dif = 100 - dif * 100;
		document.getElementById("ans" + i + 'ar').innerHTML = valp.toFixed(25);
		document.getElementById("ans" + i + "sr").innerHTML = ' ' + b + ' / ' + a + ' ';
		document.getElementById("ans" + i + "pd").innerHTML = dif.toFixed(25);
	}
}
function discat1() {
	if (count1 % 2 == 0) {
		document.getElementById("cat1").style = "display : block;";
	}
	else {
		document.getElementById("cat1").style = "display : none;";
	}
	count1++;
}
function discat2() {
	if (count2 % 2 == 0) {
		document.getElementById("cat2").style = "display : block;";
	}
	else {
		document.getElementById("cat2").style = "display : none;";
	}
	count2++;
}
function discat3() {
	if (count3 % 2 == 0) {
		document.getElementById("cat3").style = "display : block;";
	}
	else {
		document.getElementById("cat3").style = "display : none;";
	}
	count3++;
}
function hb() {
	if (count4 % 2 == 1) {
		document.getElementById("nav1").style = "display : visible;";
	}
	else {
		document.getElementById("nav1").style = "display : none;";
	}
	count4++;
}
function discat4() {
	if (count5 % 2 == 0) {
		document.getElementById("cat4").style = "display : block;";
	}
	else {
		document.getElementById("cat4").style = "display : none;";
	}
	count5++;
}