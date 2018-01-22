 $(document).ready(init);
/*function for the splash view
using setTimeOut*/
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(100);
   }, 1000);
});

/*google map**/
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(19.4203024, -99.1631142),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

/*si escriben mexicana debe mostrar resaurantes de commex
1.- se debe guardar el valor del inout
2. se debe comparar con un obj del data*/
var $type = $("#type");
var $search = $("#search");

function init() {
	$search.click(getType);
}

function getType() {
	var $value = $type.val();
	var $restaurants = data[$value]['restaurants'];
	printRestaurants($restaurants)
}

function printRestaurants($restaurants) {
	/*iterate through the array to show the images*/
	console.log($restaurants[0].photo);
	$("#first").attr("src", $restaurants[0].photo);
}





