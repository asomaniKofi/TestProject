$(document).ready(function(){
    $("#searchStorage").button();
     $("#clearStorage").button();
    /*The FavsList function gets our favourites from the local storage and appends them to
    our favourites page.After being initialised this function is called*/
function FavsList(){
    var list = JSON.parse(localStorage.getItem("Favourites"));
    if(list == null || list == undefined){
      list=[];
    }
    for(j=0;j<list.length;j++){
      var favs ="<label for='";
       favs+=list[j]+"'>"+list[j]+"</label>"+"<input type='radio' id='"+list[j]+"'name='destination' value='"+list[j]+"'>";
     $("#favs").append(favs);
  }
}
FavsList();

    /*Once the search button is clicked our favourites are appended to our body if the favourites value is equal to the name in our json file. The user is alerted of the fact that they have no favourites  */
    $("#searchStorage").on("click",function(){
var favs = JSON.parse(localStorage.getItem("Favourites"));
 $.getJSON('Holidays.json',function(data) {
	 if(favs !=null){
	for(i=0;i<data.Resorts.length;i++){
	for(k=0;k<favs.length;k++){
 if(favs[k]==data.Resorts[i].name){
    console.log(favs[k] + " " + data.Resorts[i].name);
      var output ="<section><section class='removeMe container'>";
      output+="<h2>"+data.Resorts[i].name+", "+data.Resorts[i].destination +"<a href='"+ data.Resorts[i].url +"'>Take an In-Depth look</a> "+"</h2>"+"<img src='"+data.Resorts[i].picture+".jpg'>"+"<article>"+"<p>"+data.Resorts[i].short_description+"</p>"+"<p>Rating: "+data.Resorts[i].Rating+"</p>"+"<p>"+"Price: "+data.Resorts[i].price+"</p>"+"<p>Start Date:"+"<time datetime='"+data.Resorts[i].startDate+"'>"+data.Resorts[i].startDate+"</time></p>"+"<p>End Date: "+"<time datetime='"+data.Resorts[i].endDate+"'>"+data.Resorts[i].endDate+"</time></p>"+"<p>Activities: "+data.Resorts[i].activities+"</p>"+"</article></section></section>";
      $("body").append(output+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>");
    }}}}
    else{alert("You have no Favourites");}});});
});
