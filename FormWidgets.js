$(document).ready(function(){
    var location,price,rating,activity,val;
    var date;
 var pricechecker =function(event, ui){
     /*This function takes the minimum and maximum value from our slider, those values are converted into strings with the inclusion of the pound sign.
     The resorts are then printed in a section containing html5 elements like the time elements. The JSON url is displayed in an anchor tag which is floated to the right of the section.
     Our section is given a class removeMe inorder to remove the previous search results once the prices have been changed.*/
     val = "£"+ui.values[0];
     price ="£"+ui.values[1];
     $('.removeMe').remove();
     $.getJSON('Holidays.json',function(data){
    for(i=0; i<data.Resorts.length;i++){
    if((val <= data.Resorts[i].price)&&(price >= data.Resorts[i].price)){
    console.log(val +" "+ price);
    var output = "<section><section class='removeMe container'>";
    output+="<h2>"+data.Resorts[i].name+", "+data.Resorts[i].destination +"<a href='"+ data.Resorts[i].url +"'>Take an In-Depth look</a> "+"</h2>"+"<img src='"+data.Resorts[i].picture+".jpg'>"+"<article>"+"<p>"+data.Resorts[i].short_description+"</p>"+"<p>Rating: "+data.Resorts[i].Rating+"</p>"+"<p>"+"Price: "+data.Resorts[i].price+"</p>"+"<p>Start Date:"+"<time datetime='"+data.Resorts[i].startDate+"'>"+data.Resorts[i].startDate+"</time></p>"+"<p>End Date: "+"<time datetime='"+data.Resorts[i].endDate+"'>"+data.Resorts[i].endDate+"</time></p>"+"<p>Activities: "+data.Resorts[i].activities+"</p>"+"</article></section></section>";
        }
    }
$("body").append(output+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>");
});
 };
var changeSelectMenu =function(event, ui) {
    /*This function checks the value of the ui selectmenu and displays resorts that match the destination in our external JSON file.*/
    var name = ui.item.value;
    $('.removeMe').remove();
    $.getJSON('Holidays.json',function(data){
    var output = "<section class='removeMe container'>";
    for(i=0; i<data.Resorts.length;i++){
    if(name == data.Resorts[i].destination){
   console.log(name +" "+ data.Resorts[i].destination);
   output+="<h2>"+data.Resorts[i].name+", "+data.Resorts[i].destination +"<a href='"+ data.Resorts[i].url +"'>Take an In-Depth look</a> "+"</h2>"+"<img src='"+data.Resorts[i].picture+".jpg'>"+"<article>"+"<p>"+data.Resorts[i].short_description+"</p>"+"<p>Rating: "+data.Resorts[i].Rating+"</p>"+"<p>"+"Price: "+data.Resorts[i].price+"</p>"+"<p>Start Date:"+"<time datetime='"+data.Resorts[i].startDate+"'>"+data.Resorts[i].startDate+"</time></p>"+"<p>End Date: "+"<time datetime='"+data.Resorts[i].endDate+"'>"+data.Resorts[i].endDate+"</time></p>"+"<p>Activities: "+data.Resorts[i].activities+"</p>"+"</article></section>";
        } }
    $("body").append(output);
});
};
var ratings=function(event, ui) {
    /*This function will return the resorts which match the rating chosen from our select menu*/
    var name = ui.item.value;
    $('.removeMe').remove();
     $.getJSON('Holidays.json',function(data){
      for(i=0; i<data.Resorts.length;i++){
       if(name == data.Resorts[i].Rating){
        console.log(name +" "+ data.Resorts[i].destination);
        var output = "<section><section class='removeMe container'>";
        output+="<h2>"+data.Resorts[i].name+", "+data.Resorts[i].destination +"<a href='"+ data.Resorts[i].url +"'>Take an In-Depth look</a> "+"</h2>"+"<img src='"+data.Resorts[i].picture+".jpg'>"+"<article>"+"<p>"+data.Resorts[i].short_description+"</p>"+"<p>Rating: "+data.Resorts[i].Rating+"</p>"+"<p>"+"Price: "+data.Resorts[i].price+"</p>"+"<p>Start Date:"+"<time datetime='"+data.Resorts[i].startDate+"'>"+data.Resorts[i].startDate+"</time></p>"+"<p>End Date: "+"<time datetime='"+data.Resorts[i].endDate+"'>"+data.Resorts[i].endDate+"</time></p>"+"<p> Activities: "+data.Resorts[i].activities+"</p>"+"</article></section></section>";
          $("body").append(output+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>");
        }
    }
});
};
var activity=function(event, ui) {
    /*Resorts will be appended to the body who have activity selected.*/
    var name = ui.item.value;
    $('.removeMe').remove();
    $.getJSON('Holidays.json',function(data){
    for(i=0; i<data.Resorts.length;i++){
    for(j=0; j<data.Resorts.length;j++){
    if(name == data.Resorts[i].activities[j]){
    console.log(name +" "+ data.Resorts[i].activities[j]);
    var output = "<section><section class='removeMe container'>";
    output+="<h2>"+data.Resorts[i].name+", "+data.Resorts[i].destination +"<a href='"+ data.Resorts[i].url +"'>Take an In-Depth look</a> "+"</h2>"+"<img src='"+data.Resorts[i].picture+".jpg'>"+"<article>"+"<p>"+data.Resorts[i].short_description+"</p>"+"<p>Rating: "+data.Resorts[i].Rating+"</p>"+"<p>"+"Price: "+data.Resorts[i].price+"</p>"+"<p>Start Date:"+"<time datetime='"+data.Resorts[i].startDate+"'>"+data.Resorts[i].startDate+"</time></p>"+"<p>End Date: "+"<time datetime='"+data.Resorts[i].endDate+"'>"+data.Resorts[i].endDate+"</time></p>"+"<p> Activities: "+data.Resorts[i].activities+"</p>"+"</article></section></section>";
 }
}
$("body").append(output+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>");
}
});
};
var comparetime =function(selected) {
/*After several attemps this function compares dates. The datepicker is changed in order to be made into a date object, both the JSON end & start date are changed into date objects and then resorts are appended to the body if the start date is greater than the startdate && the enddate is less than the enddate*/
        $("#frompicker").datepicker(null,"maxDate", selected);
        var dateObject = new Date($(this).val());
        $('.removeMe').remove();
        $.getJSON('Holidays.json',function(data){
        for(i=0; i<data.Resorts.length;i++){
        var x = date.toLocaleDateString();
        var y  = dateObject.toLocaleDateString();
        var srtdate =new Date(data.Resorts[i].startDate);
        var endate = new Date(data.Resorts[i].endDate);
        if(date > srtdate && dateObject<endate){
        console.log(x +"- "+ y);
        var output ="<section><section class='removeMe container'>";
        output+="<h2>"+data.Resorts[i].name+", "+data.Resorts[i].destination +"<a href='"+ data.Resorts[i].url +"'>Take an In-Depth look</a> "+"</h2>"+"<img src='"+data.Resorts[i].picture+".jpg'>"+"<article>"+"<p>"+data.Resorts[i].short_description+"</p>"+"<p>Rating: "+data.Resorts[i].Rating+"</p>"+"<p>"+"Price: "+data.Resorts[i].price+"</p>"+"<p>Start Date:"+"<time datetime='"+data.Resorts[i].startDate+"'>"+data.Resorts[i].startDate+"</time></p>"+"<p>End Date: "+"<time datetime='"+data.Resorts[i].endDate+"'>"+data.Resorts[i].endDate+"</time></p>"+"<p> Activities: "+data.Resorts[i].activities+"</p>"+"</article></section></section>";
        $("body").append(output+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>"+"<br class='removeMe'>");
        }
    }
});
};
/*Below is where our widgets are created along with the functions created above are being assigned to each widget so that they are called when selected as opposed to have to do an onchange eventlistener which would take every value after the initial one*/
$("#Destinations").selectmenu({select:changeSelectMenu});
$("#Ratings").selectmenu({select:ratings});
$("#Activities").selectmenu({select:activity});
$("#frompicker").datepicker({
    dateFormat:"yy/mm/dd" ,
    numberOfMonths: 2,
    onSelect: function(selected) {
          $("#topicker").datepicker(null,"minDate", selected);
        date = new Date($(this).val());
        console.log(date);
}
});
   $("#topicker").datepicker({
       dateFormat:"yy/mm/dd" ,
        numberOfMonths: 2,
        onSelect:comparetime
    });
$("#slider-range").slider({
      range: true,
      min: 100,
      max: 10000,
      values: [100,1000],
      slide: function(event, ui ){
        $( "#amount" ).val( "$" + ui.values[ 0 ]+ " - $" + ui.values[ 1 ] );
      }
    });
$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +" - $" + $( "#slider-range" ).slider("values", 1));    $("#slider-range").on("slidechange",pricechecker);


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




//$("#frompicker,#topicker").change(function(){
//   $.getJSON('Holidays.json',function(data){
//      for(i in data.Resorts){
//if(date >= data.Resorts[i].startDate || dateObject <= data.Resorts[i].endDate){
//output+="<h2>"+data.Resorts[i].name +"<a href='"+ data.Resorts[i].url +"'>Take an In-Depth look</a> "+"</h2>"+"<img src='"+data.Resorts[i].picture+".jpg'>"+"<article>"+"<p>"+data.Resorts[i].short_description+"</p><br>"+"<p>"+"Price:"+data.Resorts[i].price+"</p><br>"
//+"<p>Start Date:"+"<time datetime='"+data.Resorts[i].startDate+"'>"+data.Resorts[i].startDate+"</time></p><br>"+"<p>End Date: "+"<time datetime='"+data.Resorts[i].endDate+"'>"+data.Resorts[i].endDate+"</time></p>"+"</article>";
//          }
//      }
//    output+="</section>";
//});
//$("#results").empty();
//$("#results").html(output);
//});






});
