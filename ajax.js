 huoqu = function(){
// 	//发送Ajax 查询请求并处理
// 	var request = new XMLHttpRequest();
// 	request.open("GET","http://rapapi.org/mockjsdata/14169/geek");
// 	request.send();
// 	request.onreadystatechange = function(){//时间监听





//undefined

// 	var request = new XMLHttpRequest();

// 	request.onreadystatechange = function(){
// 		if (request.readyState == 4 && request.status == 200) {
// 			document.getElementById('result').innerHTML = result.responseText;
// 		}
// 	}
// 	request.open("GET","http://rapapi.org/mockjsdata/14169/geek");
// 	request.send();

// }
	var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("result").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","http://rapapi.org/mockjsdata/14169/geek",true);
xmlhttp.send();
 }
 var data = JSON.parse(xmlhttp.responseText);
 status = function(){
 	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
 		document.getElementById("result2").innerHTML = data.status;
 	}
 }