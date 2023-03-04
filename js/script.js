//text change
function textChange(){

	document.getElementById('h5').innerHTML="Already Changed";
}

//date change
function dateChange(){

	document.getElementById('date').innerHTML=Date();
}

//light change
function on(){

	document.getElementById('img').src = 'images/on.gif';
}
function off(){

	document.getElementById('img').src = 'images/off.gif';
}

//font size change
function sizeChange(){

	document.getElementById('size').style.fontSize = '30px';
}

//hide text
function textHide(){

	document.getElementById('hide').style.display='none';
}

//show text
function textShow(){

	document.getElementById('show').style.display='block';
}

//alert text
function sms(){

	window.alert("Please show a alart message");
}

//console text
function consoleShow(){

	console.log("Please show a console message");
}

//output
function bestOutput(){

	document.getElementById("math").innerHTML = 5 + 6;
}

//codeblock
function practise() {
  document.getElementById("demo1").innerHTML = "Hello Limon!";
  document.getElementById("demo2").innerHTML = "Are you there?";
}

//decimal number
function numbers(){

	document.getElementById("demo3").innerHTML = 10.50;
}

//arithmatic
function arith(){

	document.getElementById("demo4").innerHTML = (5 + 6) * 10;
}

