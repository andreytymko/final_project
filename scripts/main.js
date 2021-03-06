  
// --------slider----------

let slider = function() {
  let backImg = [];
  // backImg[0] = "../images/slider0.jpg";
  // backImg[1] = "../images/slider1.jpg";
  backImg[0] = "../images/slider2.jpg";
  backImg[1] = "../images/slider3.jpg";
  backImg[2] = "../images/slider4.jpg";
  backImg[3] = "../images/slider5.jpg";
  backImg[4] = "../images/slider6.jpg";
  // backImg[7] = "../images/slider7.jpg";
    
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

//-------load images to main page--------

let mainPhoto = document.querySelector('.main-head-photo');
mainPhoto.style.background = ' url(/images/mainphoto.jpg)';

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