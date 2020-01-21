var map, user, infoWindow;

// append the key script

$("body").append(`<script src="https://maps.googleapis.com/maps/api/js?key= + ${key} + &callback=initMap&libraries=places"
async defer></script>`)


function initMap(){
  var options = {
    zoom:12,
    center:{lat:40.7831,lng:-73.9712}
  };
  // New map
  map = new google.maps.Map(document.getElementById('map'),options);
  // Info Window for location error
  infoWindow = new google.maps.InfoWindow;
  // Add marker
  user = new google.maps.Marker({
    map:map,
    title: 'You are here!',
    icon:'https://www.google.com/mapfiles/arrow.png'
  })
  // Get user's location and put on map, give error msg otherwise
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (p) {
      var position = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
      };
      user.setPosition(position);
    }, function() {
      handleLocationError('Geolocation service failed', map.center());
    })
  } else {
    handleLocationError ('No geolocation available', map.center());
  }
}
function handleLocationError (content, position){
  info
};

