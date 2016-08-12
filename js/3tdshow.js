
		$(document).ready(function(){
		homepagetext();
		homepagetext2();
		homepagetext3();

		function homepagetext(){

		$.ajax({
		dataType:'json',
		type:'POST',
		data:{kind:'left'},
		async:false,
		url:'http://192.168.1.101:8083/text/gettext',
		success:function(data) {
								
			var $lefttitle ='<span id="lefttitle">'+data.data.title+ '</span>'				
    			var $lefttext = '<div id="manytext1" class="hometd"> '+data.data.text+'</div>'
			var  q =$lefttitle+ $lefttext
			$("#leftbox").append(q);

		}
		});
}

		function homepagetext2(){

		$.ajax({
		dataType:'json',
		type:'POST',
		data:{kind:'center'},
		async:false,
		url:'http://192.168.1.101:8083/text/gettext',
		success:function(data) {
							
			var $lefttitle ='<span id="midtitle">'+data.data.title+ '</span>'				
    			var $lefttext = '<div id="manytext2" class="hometd"> '+data.data.text+'</div>'
			var  q =$lefttitle+ $lefttext
			$("#midbox").append(q);

		}
		});

}

		function homepagetext3(){

		$.ajax({
		dataType:'json',
		type:'POST',
		data:{kind:'right'},
		async:false,
		url:'http://192.168.1.101:8083/text/gettext',
		success:function(data) {
								
			var $lefttitle ='<span id="righttitle">'+data.data.title+ '</span>'				
    			var $lefttext = '<div id="manytext3" class="hometd"> '+data.data.text+'</div>'
			var  q =$lefttitle+ $lefttext
			$("#rightbox").append(q);

		}
		});
}


}






	);

