$(document).ready(function(){

	$("#btnSubmit").click(function(e){
		var name=$("#name").val();
			var scr=$("#marks").val();
		var dataString='nm='+name+'&mrk='+scr;
		if(name==''||scr=='')
		{
			alert("Please fill all Fields");
		}
			$.ajax({
				type:"POST",
				url:"http://vgjdevelopers.000webhostapp.com/index.php",
				data:dataString,
				
				success:function(data){
					//alert(html);				
					//$('#your_success_element_id').html(html);
					//$('#flash').hide();
                                           $("#divValues").html(data);
				},
					});
			return false;
	});
});
function dis()
{
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET","index.php",false);
	xmlhttp.send(null);	
	document.getElementById("getdata").innerHTML=xmlhttp.responseText;
}