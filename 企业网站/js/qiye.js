$(function(){
	var time = setInterval(show,2000);	
	
	var a = 0;
	
	function show(){			
		a++;
		if (a==4) {a=0;};	
		$(".banner_img").eq(a).show().siblings().hide();
//		切换图片一定放在a变化之后,不然会出错
	};
		
	$("#banner_left").on({
		click:function(){
			a--;
			if(a<0){a=3};
			$(".banner_img").eq(a).show().siblings().hide();}
	});
	
	$("#banner_right").on({
			click:function(){
				a++;
				if(a>3){a=0};
				$(".banner_img").eq(a).show().siblings().hide();}
	});
	
	$('.banner').on({
		mouseover:function(){
			clearInterval(time);
		},
		
		mouseout:function(){
			time= setInterval(show,2000);
		}
	})
	
//	$("#ejcd1").mouseover(function(){
//		$("#ejcd2").css("display","block").
//	});
	
});
