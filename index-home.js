<script>
$(document).ready(function(){ 
		$.ajax({ 
		    type: "GET", 	
			url: "http://127.0.0.1:80/...................",
			dataType: "json",
			success: function(data) {
				if (data.success) { 
					var picArr=$(".flexslider ul li")
					for (var i = 0; i < picArr.length; i++) {
					$(".flexslider").children("ul").children("li:eq(i)").find("img").src="./images/"+data;
					}
				} 
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			},     
		});


	


/*	$("#save").click(function(){ 
		$.ajax({ 
		    type: "POST", 	
			url: "serverjson.php",
			data: {
				name: $("#staffName").val(), 
				number: $("#staffNumber").val(), 
				sex: $("#staffSex").val(), 
				job: $("#staffJob").val()
			},
			dataType: "json",
			success: function(data){
				if (data.success) { 
					$("#createResult").html(data.msg);
				} else {
					$("#createResult").html("出现错误：" + data.msg);
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			},     
		});
	});*/
});



</script>