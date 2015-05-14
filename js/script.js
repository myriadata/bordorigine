$('.carousel').carousel();

function initialize() {
    var mapOptions = {
        zoom: 16
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': "2 bis rue Charles Lamoureux 33000 Bordeaux" }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
        } else
            alert("Problem with geolocation");
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
