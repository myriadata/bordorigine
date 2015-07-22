$('.carousel').carousel();

function initializeMapContact() {
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

function initializeMapExhibition() {
    var mapOptions = {
        zoom: 14,
        draggable: true,
        userZoom: false,
        disableDoubleClickZoom: false,
        disableDefaultUI: true,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('map-exhibition'),
        mapOptions);

    var geocoder = new google.maps.Geocoder();
    geoCode(map, geocoder, "59 Rue Saint-James 33000 Bordeaux");
    geoCode(map, geocoder, "Place Pey Berland 33000 Bordeaux");
    geoCode(map, geocoder, "Place du parlement 33000 Bordeaux");
    geoCode(map, geocoder, "Place de la Bourse 33000 Bordeaux");
    geoCode(map, geocoder, "Place de la comédie 33000 Bordeaux");
}

function geoCode(map, geocoder, address) {
  geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              icon: "pictures/logo/logo-bordorigine-map.png"
          });
      } else
          alert("Problem with geolocation");
  });
}

google.maps.event.addDomListener(window, 'load', initializeMapContact);
google.maps.event.addDomListener(window, 'load', initializeMapExhibition);
