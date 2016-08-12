window.onload = function(){　
　　　　
		$.ajax({
		dataType:'json',
		type:'GET',
		data:{kind:1},
		async:false,
		url:'http://192.168.1.101:8083/Article/getArticleList',
		success:function(data) {
				
			for (var i = 0;i<data.data.length; i++) {				
			
			var $img = data.data[i].thumb
			/*var $abstract = data.data[i].abstract*/
			

			var o = $("<div>"+data.data[i].abstract+"</div>");
			o.find("img").remove();
			var $abstract =o.text();			 

			var $articleshowbox ='<div class="article"><img article-mig src="'+$img+'"><div class="article-text">'
			var $textshow = '<p class="article-text-title">'+data.data[i].title+'</p><p>'+$abstract+'…</p></div>'
			var $button = '<a class="details" href="http://192.168.1.109:8088/HuiShengHospital/index-article.html?id='+data.data[i].id+'">点击进入详情</a><div class="details-split-line"></div>'
			
			var $articleshow =$articleshowbox+ $textshow+$button
			$("#article-list").append($articleshow);

			}
		}
		});

　　};








				









