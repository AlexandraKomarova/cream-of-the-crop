var map, user, infoWindow;

// append the key script

$("body").append(`<script src="https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap&libraries=places"
async defer></script>`)

var map, user, errorWindow;
var infoWindow;
var request;
var service;
var markers = [];

function initMap(){
  var options = {
    zoom:11.9,
    center:{lat:40.7831,lng:-73.9712}
  };
  var location = new Object();
  // New map
  map = new google.maps.Map(document.getElementById('map'),options);
  // Info Window for location error
  errorWindow = new google.maps.InfoWindow;
  // Add marker
  user = new google.maps.Marker({
    map:map,
    title: 'You are here!',
    icon:'https://www.google.com/mapfiles/arrow.png'
  });

  // Get user's location and put on map, give error msg otherwise
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (p) {
      location.lat = p.coords.latitude;
      location.long = p.coords.longitude;
      var position = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
      };
      user.setPosition(position);
      google.maps.event.addListener(map,"click", getAttractions)

      // showBorders();
      // getAttractions(location);
    }, function() {
      handleLocationError('Geolocation service failed', map.center());
    });
  } else {
    handleLocationError ('No geolocation available', map.center());
  }
};

// For if user's location can't be grabbed
function handleLocationError (content, position){
  errorWindow.setPosition(position);
  errorWindow.setContent(content);
  errorWindow.open(map);
}
// Request tourist attractions and place markers
function getAttractions (location) {
  
  console.log("lat", location.latLng.lat())
  console.log("lng", location.latLng.lng())

  var pyrmont = new google.maps.LatLng(location.lat, location.long);
  var request = {
      location: pyrmont,
      radius: "1500",
      type: ["tourist_attraction"]
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK){
      console.log(results)
      // look at result set
      // sort by rating
      // set a variable that contains the top three
      // below, iterate over new variable instead of original result set
      var topSorted = results.slice(0, 4) 
      for (var i = 0; i < topSorted.length; i++) {
          var place = topSorted[i];

          let content = `<h3>${place.name}</h3>
          <h4>${place.vicinity}</h4>

          Rating: ${place.rating}
          </p>`;
          var marker = new google.maps.Marker({
              position: place.geometry.location,
              map: map,
              title: place.name
          });
          var infowindow = new google.maps.InfoWindow({
              content: content
          });
          bindInfoWindow(marker, map, infowindow, content);
          marker.setMap(map);
      }
  }
}
function bindInfoWindow (marker, map, infowindow, html) {
  marker.addListener("click", function() {
      infowindow.setContent(html);
      infowindow.open(map, this);
  });
}
