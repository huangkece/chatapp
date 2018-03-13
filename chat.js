

$(document).ready(function(){
  $("#send").click(function(){
  var txt=$("#text").val();
  if(txt){
		var date=new Date();
		$("#leftmsg .direct-chat-timestamp").text(date);
	    $("#leftmsg #ltxt").text(txt);
	    
		var leftmsg=$("#leftmsg").html();
		$(".direct-chat-messages").append(leftmsg); 
		
			$.ajax({
						
						url: "/save",
						type:"post",
						data:{"message":$("#text").val()},
						datatype:"json",
						cache: false,
						timeout: 5000,
						success: function(data){
							var date2 =new Date();
							$("#rightmsg .direct-chat-timestamp").text(date2);
							$("#rightmsg .direct-chat-text").text(data);
							$(".direct-chat-messages").append($("#rightmsg").html()); 
						},
						error: function(jqXHR, textStatus, errorThrown){
							alert('error ' + textStatus + " " + errorThrown);  
						}
					});
	
	}
  });
});