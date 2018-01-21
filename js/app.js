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
        center: new google.maps.LatLng(19.432608, -99.133208),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}