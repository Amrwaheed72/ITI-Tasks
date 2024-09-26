function displayMap() {
    document.getElementById('map-container').style.display = 'block';
    document.getElementById('location-info').style.display = 'none';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

function displayInfo() {
    document.getElementById('map-container').style.display = 'none';
    document.getElementById('location-info').style.display = 'block';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPositionInfo, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPositionInfo(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var timestamp = new Date(position.timestamp);

    document.getElementById('latitude').textContent = lat.toFixed(6) + "°";
    document.getElementById('longitude').textContent = lng.toFixed(6) + "°";
    document.getElementById('accuracy').textContent = accuracy;
    document.getElementById('timestamp').textContent = timestamp;
}
