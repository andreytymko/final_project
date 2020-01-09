// window.onload = (function() {
  
// slider
    var slider = function() {
    var names = ['images/slider0.jpg','images/slider1.jpg','images/slider2.jpg','images/slider3.jpg','images/slider4.jpg'];
      var backImg = [];
      backImg[0] = "../images/slider0.jpg";
      backImg[1] = "../images/slider1.jpg";
      backImg[2] = "../images/slider2.jpg";
      backImg[3] = "../images/slider3.jpg";
      backImg[4] = "../images/slider4.jpg";
      backImg[5] = "../images/slider5.jpg";
      backImg[6] = "../images/slider6.jpg";
      backImg[7] = "../images/slider7.jpg";

      
      var i = 0;
      var x = (backImg.length) - 1;
      var int = 7000;
      
      interval = setInterval(showNext, int); // hoist?
      
      var elements = {
        slider: document.querySelector('.slider'),
        btn: { 
          left: document.querySelector('.btnLeft'),
          right: document.querySelector('.btnRight')
        }
      }
      
      var startInterval = function() {
         interval = setInterval(showNext, int);
      }
      
      var stopInterval = function() {
        clearInterval(interval);
      }
      
      var attachEvents = function() {
        elements.btn.left.onclick = function() { showPrevious(); };
        elements.btn.right.onclick = function() {  showNext(); };
        elements.slider.addEventListener("mouseenter", startInterval);
        elements.slider.addEventListener("mouseleave", stopInterval);
      };
      
      var changeImg = function() {
        elements.slider.style.backgroundImage = 'url(' + backImg[i] + ')';
       
      }
      
      var initialize = (function() {
        attachEvents();
        changeImg(i);
      })();

      var showPrevious = function() {
        (i <= 0) ? i = 3 : i--;
        changeImg(i);
      };

      var showNext = function() {
        (i >= x) ? i = 0 : i++;
        changeImg(i);
      };

    };

    slider();
  
// })();
// navigation

let mobileMenu = document.getElementById('menu-icon');
mobileMenu.onclick = function(){
    let nav = document.getElementsByTagName('nav');
    nav.style.display = 'block';
}



// geoposition
function initMap(){
  // let pos = {lat: 50.426125, lng:30.519085};
  
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

//
