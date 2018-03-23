
function initMap() {
  var myLatLng = {lat: 10.484857, lng: -66.825112};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
