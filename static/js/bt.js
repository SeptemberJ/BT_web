

(function(){
	if(document.body.clientWidth>1024){
//middle
	$(".smBlueVerticle").each(function(index, element) {
	var sumHeight = $(this).parent().next().outerHeight();
	var selfHeight = $(this).outerHeight();
	var marginTop = (sumHeight-selfHeight)/2;
	console.log(marginTop);
	$(this).css("margin-top",marginTop+'px');
	});
//sameHeight
	$(".sameHeight").each(function(index, element) {
       var rightHeight  = $(this).find(".sameHeightRight").outerHeight();
       var leftHeight = $(this).find(".sameHeightLeft").outerHeight();
		if(rightHeight>=leftHeight){
	    $(this).find(".sameHeightLeft").height(rightHeight+'px');
		}else{
			$(this).find(".sameHeightRight").height(leftHeight+'px');
			}
    });
	}
})()




$(".toLoginone").click(function() {
	  var userName = $("#TheFormL").find("input").eq(0).val();
	  var userPsd = $("#TheFormL").find("input").eq(1).val();
	  if(userName == "ztnet" && userPsd == "ztnet"){
		  window.location="http://220.248.107.62:8084/wl/loginController.do?login";
		  
		  }else{
			  
			  alert("用户名或密码错误！\n (User name or password error!)");
			  }
    });		

//share

	window._bd_share_config = {
		common : {
			bdText : document.title,	
			bdDesc : '自定义分享摘要',	
			bdUrl : location.href, 	
			bdPic : '自定义分享图片'
		},
		share : [{
			"bdSize" : 16
		}]
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];


	 	 
	 
function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

function startMove(obj, attr, iTarget, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var cur=0;
		
		if(attr=='opacity')
		{
			cur=Math.round(parseFloat(getStyle(obj, attr))*100);
		}
		else
		{
			cur=parseInt(getStyle(obj, attr));
		}
		
		var speed=(iTarget-cur)/1;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(cur==iTarget)
		{
			clearInterval(obj.timer);
			
			if(fnEnd)fnEnd();
		}
		else
		{
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
				
				
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
	}, 30);
}



$(".subCat").click(function(){
	if(document.body.clientWidth<801){
			  if($(this).nextAll().css('display')=="none"){
				 $(this).nextAll().css('display','block');
				  }else{
				 $(this).nextAll().css('display','none');
					  }
		}
	
	});


window.onload=function(){
var atthereTop=$("a.qq").position().top;
var ClientWidth = document.body.clientWidth;
//var FClientWidth =-(document.body.clientWidth)*2;
if(ClientWidth<768){
//atthereTop=-(atthereTop*2);

$(".atthereQq").css('top',atthereTop);
$(".atthereWechat").css('top',atthereTop);
$(".atthereTel").css('top',atthereTop);
}
}


$("a.qq").mouseover(function() {
    var atthereTop = $("a.qq").position().top;
    $(".atthereQq").css("display","block");
    $(".atthereQq").css('top', atthereTop);
	var DivQQ = document.getElementsByClassName('atthereQq')[0];
    startMove(DivQQ, 'left',120);
	$(this).css('background','#5a9bd5');
});
$("a.qq").mouseout(function() {
	var DivQQ = document.getElementsByClassName('atthereQq')[0];
    startMove(DivQQ, 'left',-220);
	$(this).css('background','#464547');
});
$(".atthereQq").mouseover(function(){
	var DivQQ = document.getElementsByClassName('atthereQq')[0];
    startMove(DivQQ, 'left',120);
	$("a.qq").css('background','#5a9bd5');
	});
$(".atthereQq").mouseout(function(){
	var DivQQ = document.getElementsByClassName('atthereQq')[0];
    startMove(DivQQ, 'left',-220);
	$("a.qq").css('background','#464547');
	});

/*Wechat*/
$("a.wechat").mouseover(function() {
    var atthereTop = $("a.wechat").position().top;
    $(".atthereWechat").css("display","block");
    $(".atthereWechat").css('top', atthereTop);
	var DivWechat= document.getElementsByClassName('atthereWechat')[0];
    startMove(DivWechat, 'left',120);
	$(this).css('background','#5a9bd5');
});
$("a.wechat").mouseout(function() {
	var DivWechat = document.getElementsByClassName('atthereWechat')[0];
    startMove(DivWechat, 'left',-220);
	$(this).css('background','#464547');
});
$(".atthereWechat").mouseover(function(){
	var DivWechat = document.getElementsByClassName('atthereWechat')[0];
    startMove(DivWechat, 'left',120);
	$("a.wechat").css('background','#5a9bd5');
	});
$(".atthereWechat").mouseout(function(){
	var DivWechat = document.getElementsByClassName('atthereWechat')[0];
    startMove(DivWechat, 'left',-220);
	$("a.wechat").css('background','#464547');
	});

/*Tel*/
$("a.tel").mouseover(function() {
    var atthereTop = $("a.tel").position().top;
    $(".atthereTel").css("display","block");
    $(".atthereTel").css('top', atthereTop);
	var DivTel=document.getElementsByClassName('atthereTel')[0];
    startMove(DivTel, 'left',120);
	$(this).css('background','#5a9bd5');
	
});
$("a.tel").mouseout(function() {
	var DivTel = document.getElementsByClassName('atthereTel')[0];
    startMove(DivTel, 'left',-220);
	$(this).css('background','#464547');
});
$(".atthereTel").mouseover(function(){
	var DivTel = document.getElementsByClassName('atthereTel')[0];
    startMove(DivTel, 'left',120);
	$("a.tel").css('background','#5a9bd5');
	});
$(".atthereTel").mouseout(function(){
	var DivTel = document.getElementsByClassName('atthereTel')[0];
    startMove(DivTel, 'left',-220);
	$("a.tel").css('background','#464547');
	});


/*

$("a.qq").mouseover(function() {
    var atthereTop = $("a.qq").position().top;
    if (document.body.clientWidth < 768) {
        atthereTop = (atthereTop / 2) - 100;
    }
    $(".atthere").css('top', atthereTop);
    $(this).css('background', '#5a9bd5');
    $("div.tencent").css('display', 'block');
});
	
	
$("a.qq").mouseout(function(){
    $("div.tencent").css('display','none');
    $(this).css('background','#464547');
	});
$("div.tencent").mouseover(function(){
	$("a.qq").css('background','#5a9bd5');
	$(this).css('display','block');
	
	});
$("div.tencent").mouseout(function(){
	$("a.qq").css('background','#464547');
	$(this).css('display','none');
	});


$("a.tel").mouseover(function(){
	var atthereTop=$("a.tel").position().top;
	if(document.body.clientWidth<768){
    atthereTop=(atthereTop/2)-100;
	}
    $(".atthere").css('top',atthereTop);
    $(this).css('background', '#5a9bd5');
	$("div .tel").css('display','block');
	});
$("a.tel").mouseout(function(){
	$("div.tel").css('display','none');
    $(this).css('background','#464547');
	});
$("div.tel").mouseover(function(){
	$("a.tel").css('background','#5a9bd5');
	$(this).css('display','block');
	});
$("div.tel").mouseout(function(){
	$("a.tel").css('background','#464547');
	$(this).css('display','none');
	});



$("a.code").mouseover(function(){
	var atthereTop=$("a.code").position().top;
	if(document.body.clientWidth<768){
    atthereTop=(atthereTop/2)-100;
	}
    $(".atthere").css('top',atthereTop);
    $(this).css('background', '#5a9bd5');
	$("div.code").css('display','block');
});
$("a.code").mouseout(function(){
	$("div.code").css('display','none');
    $(this).css('background','#464547');
	});
$("div.code").mouseover(function(){
	$("a.code").css('background','#5a9bd5');
	$(this).css('display','block');
	});
$("div.code").mouseout(function(){
	$("a.code").css('background','#464547');
	$(this).css('display','none');
	});
*/
var WidthAll;
$(".navbar-brand").click(function(e) {
	//alert("hahah");
        var e=e||event;
		e.stopPropagation()
        $("#wrapper").toggleClass("toggled");
    });
/*
$(".navbar-brand").find('i').click(function(e) {
	alert("hahah");
        var e=e||event;
        e.preventDefault(e);
        $("#wrapper").toggleClass("toggled");
    });
*/
	

$(".navbar-brand").find('img').click(function(e) {
	//alert('hahhah');
	    var e=e||event;
        e.preventDefault(e);
		//e.stopPropagation()
        window.location='default.jsp';
    });

$(".sidebar-close").find('i').click(function(e) {
        var e=e||event;
        e.preventDefault(e);
        $("#wrapper").toggleClass("toggled");
		$('#megamenuid').css('display','none');
		$(".sidebarnav_bt").removeClass("cross");
        WidthAll=document.body.clientWidth;
        $(".owl-item").css("width",WidthAll);
		
			
})
		//window.location.reload();
$(".sidebar-close").find('img').click(function(e) {
	//alert('hahhah');
	    var e=e||event;
        e.preventDefault(e);
        window.location='default.jsp';
    });
	
$(".sidebar-back").click(function(e) {
		var len = $(".sidebarnav_bt").length;
        $('#megamenuid').css('display','none');
		for(var i=1;i<len+1;i++){
	            $(".sidebarnav_bt").removeClass("cross");
		}
})


$(".sidebarnav_bt").click(function(e) {
        var e=e||event;
		var len = $(".sidebarnav_bt").length;
		var targetTo = jQuery(this).data('target');
		//open
		if (jQuery(this).attr("class").indexOf("cross")<0){
              $('#megamenuid').css('display','block');
		      for(var i=1;i<len+1;i++){
				$("#menuitem-"+i).css('display','none');
	     }
	         $(".sidebarnav_bt").removeClass("cross");
			 jQuery(this).addClass("cross");
			 $(targetTo).css('display','block');
		}//close
		else{
		 $(targetTo).css('display','none');
		 for(var i=1;i<len+1;i++){
	            $(".sidebarnav_bt").removeClass("cross");
				$('#megamenuid').css('display','none');
                $("#menuitem-"+i).css('display','none');
	     }
		}
    });		
	
/*	
$(".sidebarnav_bt").click(function(e) {
        var e=e||event;
		var len = $(".sidebarnav_bt").length;
		var targetTo = jQuery(this).data('target');
		//open
		if (jQuery(this).attr("class").indexOf("cross")<0){
              $('#megamenuid').css('display','block');
		     for(var i=1;i<len+1;i++){
				$("#menuitem-"+i).css('display','none');
	     }
	         $(".sidebarnav_bt").removeClass("cross");
			 jQuery(this).addClass("cross");
			 $(targetTo).css('display','block');
		}//close
		else{
		 $(targetTo).css('display','none');
		for(var i=1;i<len+1;i++){
	            $(".sidebarnav_bt").removeClass("cross");
				$('#megamenuid').css('display','none');
                $("#menuitem-"+i).css('display','none');
	     }
		}
    });		
*/
//Next
var Transform = $(".owl-wrapper").css("webkitTransform");
if (Transform == undefined || Transform == null ) {
    BTransform = "msTransform";
    Transform = $(".owl-wrapper").css("msTransform");
} else {
    Transform = $(".owl-wrapper").css("webkitTransform");
    BTransform = "webkitTransform";
}
//单击
$(".owl-page").click(function(){
var Distance = ( - WidthAll * $(this).index() )+ "px";
$(".owl-wrapper").css(BTransform, "translateX(" + Distance + ")");
				$(".owl-page").removeClass("active");
				$(this).addClass("active");
	})


var len = $(".downpage").length;
var TransformX = Transform.match(/\-?[0-9]+/g)[4];
var Multiple = TransformX / ( - WidthAll);
function ChangeStyle(){
	
		  var Distance = ( - WidthAll * Multiple) + "px";
		  $(".owl-wrapper").css(BTransform, "translateX(" + Distance + ")");
		  $(".owl-page").removeClass("active");
		  $(".owl-page").eq(Multiple).addClass("active");
		  $(".owl-page").eq(Multiple + 3).addClass("active");
	
	}
//Next
var Next = $(".owl-next").click(function(){
//var WidthAll=(document.body.clientWidth)-200;
//if(WidthAll<768){WidthAll=document.body.clientWidth;}
Multiple++;
if (Multiple > len - 1) {
    Multiple = 0;
}
ChangeStyle();
	});	

//Prev
var Prev = $(".owl-prev").click(function(e){

Multiple--;
if(Multiple<0){
	Multiple=len-1;
	}
ChangeStyle();
	});
	
//setInterval	
	function NextPage(){

$(".owl-item").css("width",WidthAll);		
Multiple++;
if (Multiple > len - 1) {
    Multiple = 0;
}
ChangeStyle();

	}
		
var PageTemp = setInterval(NextPage,5000);
//$(".owl-wrapper-outer").mouseover(function(){clearInterval(PageTemp)});

