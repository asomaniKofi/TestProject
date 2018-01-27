$(document).ready(function(){

$(".container,.text,.image").draggable({helper:"clone",
revert:true,
drag:function(){
    $(this).addClass("active");
},

    stop:function(){
        $(this).removeClass("active");
    },
    hoverClass:"hover",
    activeClass:"active",
    tolerance:"touch"

                                       }); 
    $("#favourite").droppable({
        drop:function(event,ui){
            try{
		var addLocation  = ui.draggable.text();
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
        $("#resorts").append("<li>"
        +ui.draggable.text()
         + '<button class="delete" style="float:right;">X</button>'
                             +"</li>" );
             $("button").button();
 $("#favourite ul li button.delete").on("click",function(){

 $(this).closest("li").remove();
            });
        }
    });



});
