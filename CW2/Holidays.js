$(document).ready(function(){
$("#tabs").tabs({
    collapsible:true
});

    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

/*Once the save button is changed to a jqueryui widget button it takes the name of the resort in the tab and */
    $(".Save").button();
    $(".Save").on("click",function(){
	try{
		$(this).attr('disabled',true);
		var addLocation  = $(this).closest("p").attr("id");
    console.log(addLocation);
		var file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];

		}
          for(i in file){
            if(file[i] == addLocation){
               alert("Already a Favourite");
              return;
               }
        }
		file.push(addLocation);
		localStorage.setItem("Favourites", JSON.stringify(file));
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
});

$("#nav").addClass("js");
$("#nav").addClass("js").before('<div id="menu">☰</div>');
$("#menu").click(function(){
	$("#nav").toggle();
});
$(window).resize(function(){
	if(window.innerWidth > 768) {
		$("#nav,nav").removeAttr("style");
    $("nav ul li").css({"float":"inline-start", "margin-right":"25px", "letter-spacing":"2px", "text-align":"left"});
      $("header nav ul").css({"list-style":"none","text-align":"right","float":"right"});
      $("nav").css("text-align","right");
	}
});





});
