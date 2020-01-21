// append the key script

$("body").append(`<script src="https://maps.googleapis.com/maps/api/js?key= + ${key} + &callback=initMap&libraries=places"
async defer></script>`)

function initMap(){
  var options = {
    zoom:12,
    center:{lat:40.7831,lng:-73.9712}
  };
  // New map
  var map = new google.maps.Map(document.getElementById('map'),options);

};