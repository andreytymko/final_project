window.onload = (function() {
// slider
    var slider = function() {
    var names = ['images/slider0.jpg','images/slider1.jpg','images/slider2.jpg','images/slider3.jpg','images/slider4.jpg'];
      var backImg = [];
      backImg[0] = "../images/slider0.jpg";
      backImg[1] = "../images/slider1.jpg";
      backImg[2] = "../images/slider2.jpg";
      backImg[3] = "../images/slider3.jpg";
      backImg[4] = "../images/slider4.jpg";
      
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
  
})();
// navigation
$("#menu-icon").on("click", function(){
$("nav").slideToggle();
$(this).toggleClass("active");
});


// let mobileMenu = document.getElementById('menu-icon');
// mobileMenu.onclick = function(){
//     let nav = document.getElementsByTagName('nav');
//     nav.style.display = 'block';
// }