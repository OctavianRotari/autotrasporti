$(document).ready(function() {

  if (navigator.geolocation) {
    console.log('Geolocation is supported!');
    (function () {
      var directionsService = new google.maps.DirectionsService(),
	directionsDisplay = new google.maps.DirectionsRenderer(),
	  createMap = function (start) {
	    var travel = {
	      origin : (start.coords)? new google.maps.LatLng(start.lat, start.lng) : start.address,
	      destination : "44.428548, 12.081324",
	      travelMode : google.maps.DirectionsTravelMode.DRIVING
	    },
	    mapOptions = {
	      zoom: 10,
	      center : new google.maps.LatLng(59.3325215, 18.0643818),
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    map = new google.maps.Map(document.getElementById("map"), mapOptions);
	    directionsDisplay.setMap(map);
	    directionsDisplay.setPanel(document.getElementById("map-directions"));
	    directionsService.route(travel, function(result, status) {
	      if (status === google.maps.DirectionsStatus.OK) {
		directionsDisplay.setDirections(result);
	      }
	    });
	  };
	  // Check for geolocation support
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function (position) {
	      // Success!
	      createMap({
		coords : true,
		lat : position.coords.latitude,
		lng : position.coords.longitude
	      });
	    },
	    function () {
	      createMap({
		coords : false,
		address : "44.428548, 12.081324"
	      });
	    });
	  }
	  else {
	    createMap({
	      coords : false,
	      address : "44.428548, 12.081324"
	    });
	  }
    })();
  }
});
