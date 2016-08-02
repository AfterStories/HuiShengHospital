
	//左侧导航按钮切换
	$('#left-nav a').click(function(){
		$(this).addClass('left-nav-btn').siblings().removeClass('left-nav-btn');
		
	})


	//tab内容切换
	$('#left-nav a').click(function(){
		var cur = $(this).index();
		$('.aboutus-text .text-box').eq(cur).show().siblings('.text-box').hide();
	})

