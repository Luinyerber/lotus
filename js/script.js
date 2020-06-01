function iniciarMap(){
    var coord = {lat:-37.6942041 ,lng: 37.6942041};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}