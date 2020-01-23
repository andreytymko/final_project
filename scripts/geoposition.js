function initMap(){

  let opt ={
    center:{lat: 50.448178, lng:30.516224},
    zoom:12
  }
  let myMap = new google.maps.Map(document.getElementById('map'), opt)
    
  addMarker({
    coordinates: {lat: 50.426125, lng:30.519085},
    image:'/images/icon-camera.png',
    info:"<div style='text-align:center'><h2>Фотограф Дария Кириленко</h2> <h4>Киев,ул.Предславинская, д.12</h4> <div><a href='tel:+38(098)7866642' style='color:black'>+38(098)786-66-42</a></div><h4>Открыто: 9:00-18:00</h4><a href='index.html' style='color:blue; underline;'>Веб-сайт</a></div>"  
  });
  addMarker({
    coordinates: {lat: 50.444287, lng:30.452845},
    image:'/images/icon-camera.png',
    info:"<div style='text-align:center'><h2>Фотограф Дария Кириленко</h2> <h4>Киев,ул.Полевая, д.23</h4> <div><a href='tel:+38(098)7866642' style='color:black'>+38(098)786-66-42</a></div><h4>Открыто: 9:00-18:00</h4><a href='index.html' style='color:blue; underline;'>Веб-сайт</a></div>"
  });
  addMarker({
    coordinates: {lat: 50.467583, lng:30.500888},
    image:'/images/icon-camera.png',
    info:"<div style='text-align:center'><h2>Фотограф Дария Кириленко</h2> <h4>Киев,ул.Нижнеюрковская, д.15</h4> <div><a href='tel:+38(098)7866642' style='color:black'>+38(098)786-66-42</a></div><h4>Открыто: 9:00-18:00</h4><a href='index.html' style='color:blue; underline;'>Веб-сайт</a></div>"
  });
  addMarker({
    coordinates: {lat: 50.459674, lng: 30.613798},
    image:'/images/icon-camera.png',
    info:"<div style='text-align:center'><h2>Фотограф Дария Кириленко</h2> <h4>Киев,Дарницкий бул., д.1А</h4> <div><a href='tel:+38(098)7866642' style='color:black'>+38(098)786-66-42</a></div><h4>Открыто: 9:00-18:00</h4><a href='index.html' style='color:blue; underline;'>Веб-сайт</a></div>"
  });
  function addMarker(properties){
    let marker = new google.maps.Marker({
      position: properties.coordinates,
      title: 'Нажми чтобы узнать подробнее',
      map: myMap,
      icon:properties.image 
    });
    
    if(properties.image){
        marker.setIcon(properties.image)
    }
    
    if(properties.info){
    let infoWindow = new google.maps.InfoWindow({
    content:properties.info
    });
    
    marker.addListener('click',function(){
    infoWindow.open(myMap,marker);
    });
    }
  }
};