 $(document).ready(init);
/*function for the splash view
using setTimeOut*/
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(1000);
   }, 2000);
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

/*adding functionality on the general page*/
var $type = $("#type");
var $search = $("#search");

/*this function toggles the event of the search button*/
function init() {
	$search.click(getType);
}

/*this function filter retaurnts per type*/
function getType() {
	var $value = $type.val();
	var $restaurants = data[$value]['restaurants'];
	printRestaurants($restaurants)
}

function printRestaurants($restaurants) {
	var $restaurant = $restaurants;
	/*iterate through the array to show the images*/
	// console.log($ids[0]);
	// console.log($restaurants[0].photo);
	// $($ids[0]).attr("src", $restaurants[0].photo);
	var $ids = ["#first", "#second", "#third", "#fourth", "#fifth"];
	for(var i= 0; i < $ids.length; i++) {
		$($ids[i]).attr("src", $restaurants[i].photo);
	}
	printModalInfo($restaurant);
}

function printModalInfo($restaurants) {
	$('a').click(function() {
		console.log($restaurants[0].name);
		$("#name").html($restaurants[0].name);
		$("#phrase").html($restaurants[0].phrase);
		$("#address").html($restaurants[0].address);
		$("#rates").html($restaurants[0].rates);
	})
}




