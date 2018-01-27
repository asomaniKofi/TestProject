$(document).ready(function(){
    /*The first event listener will remove any favourite that has been checked from the local storage*/
$("#clearStorage").on("click",function(e){
  e.preventDefault();
  var user = $("input:checked").val();
  var items = JSON.parse(localStorage["Favourites"]);
  for (var i = 0; i < items.length; i++) {
     if(items[i] == user){
       items.splice(i,1);
       break;
     }
  }
  localStorage.setItem("Favourites", items);
});





$("#favourite ul li button.delete").on("click",function(e){
       e.preventDefault();
  var user = $(this).closest("li").text();
  var items = JSON.parse(localStorage["Favourites"]);
  for (var i = 0; i < items.length; i++) {
     if(items[i] == user){
       items.splice(i,1);
       break;
     }
  }
  localStorage.setItem("Favourites", items);
});

});
