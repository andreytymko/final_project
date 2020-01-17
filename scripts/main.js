// window.onload = (function() {
  
// slider
    let slider = function() {
    // var names = ['images/slider0.jpg','images/slider1.jpg','images/slider2.jpg','images/slider3.jpg','images/slider4.jpg'];
      let backImg = [];
      backImg[0] = "../images/slider0.jpg";
      backImg[1] = "../images/slider1.jpg";
      backImg[2] = "../images/slider2.jpg";
      backImg[3] = "../images/slider3.jpg";
      backImg[4] = "../images/slider4.jpg";
      backImg[5] = "../images/slider5.jpg";
      backImg[6] = "../images/slider6.jpg";
      backImg[7] = "../images/slider7.jpg";

      
      let i = 0;
      let x = (backImg.length) - 1;
      let int = 7000;
      
      interval = setInterval(showNext, int); // hoist?
      
      let elements = {
        slider: document.querySelector('.slider'),
        btn: { 
          left: document.querySelector('.btnLeft'),
          right: document.querySelector('.btnRight')
        }
      }
      
      let startInterval = function() {
         interval = setInterval(showNext, int);
      }
      
      let stopInterval = function() {
        clearInterval(interval);
      }
      
      let attachEvents = function() {
        elements.btn.left.onclick = function() { showPrevious(); };
        elements.btn.right.onclick = function() {  showNext(); };
        elements.slider.addEventListener("mouseenter", startInterval);
        elements.slider.addEventListener("mouseleave", stopInterval);
      };
      
      let changeImg = function() {
        elements.slider.style.backgroundImage = 'url(' + backImg[i] + ')';
       
      }
      
      let initialize = (function() {
        attachEvents();
        changeImg(i);
      })();

      let showPrevious = function() {
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


// let mobileMenu = document.getElementById('menu-icon');
// mobileMenu.onclick = function(){
//     let nav = document.getElementsByTagName('nav');
//     nav.style.display = 'block';
// }



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

//images-main
let mainPhoto = document.querySelector('.main-head-photo');
mainPhoto.style.background = ' url(/images/mainphoto.jpg)';

let service1 = document.querySelector('.service1');
service1.style.background = 'url(/images/main_portfolio/family.jpg)';
service1.style.backgroundSize = 'cover';

let service2 = document.querySelector('.service2');
service2.style.background = 'url(/images/main_portfolio/newyear.jpg)';
service2.style.backgroundSize = 'cover';

let service3 = document.querySelector('.service3');
service3.style.background = 'url(/images/main_portfolio/wedding2.jpg)';
service3.style.backgroundSize = 'cover';

let service4 = document.querySelector('.service4');
service4.style.background = 'url(/images/main_portfolio/wedding3.jpg)';
service4.style.backgroundSize = 'cover';

let service5 = document.querySelector('.service5');
service5.style.background = 'url(/images/main_portfolio/wedding.jpg)';
service5.style.backgroundSize = 'cover';

let service6 = document.querySelector('.service6');
service6.style.background = 'url(/images/main_portfolio/love.jpg)';
service6.style.backgroundSize = 'cover';

let service7 = document.querySelector('.service7');
service7.style.background = 'url(/images/main_portfolio/portrai.jpg)';
service7.style.backgroundSize = 'cover';

let service8 = document.querySelector('.service8');
service8.style.background = 'url(/images/main_portfolio/love2.jpg)';
service8.style.backgroundSize = 'cover';

let adv1 = document.querySelector('.adv-img1');
adv1.style.background = 'url(/images/adv1.jpg)';
adv1.style.backgroundSize = 'cover';

let adv2 = document.querySelector('.adv-img2');
adv2.style.background = 'url(/images/adv2.jpg)';
adv2.style.backgroundSize = 'cover';

let adv3 = document.querySelector('.adv-img3');
adv3.style.background = 'url(/images/adv3.jpg)';
adv3.style.backgroundSize = 'cover';

let cooperation = document.querySelector('.cooperation_img');
cooperation.style.background = 'url(/images/workwithme.jpg)';
cooperation.style.backgroundSize = 'cover';

let dariya = document.querySelector('.myphoto');
let img = document.createElement('img');
img.src = '/images/KirilenkoDaria.jpg';
dariya.appendChild(img);