// google maps

function initMap() {
    var uluru = {
        lat: 52.231838,
        lng: 21.005995
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP,
    });
}


// unslider

$('.my-slider').unslider({
    autoplay: true,
    arrows: false
});
