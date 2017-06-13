// 按 1rem =(750 / 16)px 换算
(function (doc, win) {
  var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange': 'resize',
	recalc = function () {
	  var clientWidth = docEl.clientWidth;
	  if (!clientWidth) return;
	  // 按照设计稿640px来计算 浏览器默认基数单位为1rem = 16px,所以这里的1rem = 750 / 16
	  docEl.style.fontSize = (750 / 16) * (clientWidth / 750) + 'px';//
    //   if (clientWidth > 750) {
    //       docEl.style.fontSize = 46.875 + 'px';
    //   }
	};
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, function() {
      if (docEl.clientWidth < 768) {
          recalc();
      }
  }, false);
  if (docEl.clientWidth < 768) {
      recalc();
  }
})(document, window);

// //字符串截取
// function cutstr(str, len) {
// 	var temp;
// 	var icount = 0;
// 	var strre = "";
// 	for (var i = 0; i < str.length; i++) {
// 		if (icount < len - 1) {
// 			temp = str.substr(i, 1);
// 			icount = icount + 1;
// 			strre += temp;
// 		} else {
// 			break
// 		}
// 	}
// 	if(str.length<len){
// 		return strre;
// 	}
// 	return strre + "...";
// }
//
// //判断是否为微信浏览器
// function isWeiXin(){
// 	var ua = window.navigator.userAgent.toLowerCase();
// 	if(ua.match(/MicroMessenger/i) == 'micromessenger'){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }
//
// //pc的'click',wap的'touchstart'
// var tapEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
//
// //禁用右键、文本选择功能
// $(document).bind("contextmenu",function(){return false;});
// $(document).bind("selectstart",function(){return false;});
//
// // 文本输入款的获取焦点和失去焦点事件
// $("input[type=text]").on("focus", function() {
// 		if ($.trim($(this).val()) == $(this).attr('data-tip')) {
// 			$(this).val('');
// 		}else if($.trim($(this).val())==''){
// 			$(this).attr("data-value", $(this).attr('data-tip'));
// 		}
// }).on("blur", function() {
// 		if ($.trim($(this).val()) == "") {
// 			$(this).val($(this).attr("data-tip"));
// 		}
// });
//
// //返回顶部
// $(document).ready(function(){
// 	/*返回顶部*/
// 	$('#roll_top').hide();
// 	$(window).scroll(function () {
// 		if ($(window).scrollTop() > 300) {
// 			$('#roll_top').fadeIn(400);//当滑动栏向下滑动时，按钮渐现的时间
// 		} else {
// 			$('#roll_top').fadeOut(0);//当页面回到顶部第一屏时，按钮渐隐的时间
// 		}
// 	});
// 	$(document).on(tapEvent,'#roll_top',function () {
// 		$('html,body').animate({
// 			scrollTop : '0px'
// 		}, 300);//返回顶部所用的时间 返回顶部也可调用goto()函数
// 	});
// });
