
(function($) {
	"use strict"
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})
	$('.cart-dropdown').on('click', function (e) {
		e.stopPropagation();
	});
})(jQuery);
$('#fullWidthSlider').carousel({
    interval: 5000 
  });

  const container = document.querySelector("#product-iphone");
  const products = document.querySelectorAll(".iphone");
  
  let currentIndex = 0; 
  const visibleProducts = 4; 
  const totalProducts = products.length;
  
  function scrollSlider(direction) {
    currentIndex += direction;
    if (currentIndex > totalProducts - visibleProducts) {
      currentIndex = 0; 
    }
    if (currentIndex < 0) {
      currentIndex = totalProducts - visibleProducts; 
    }
    const productWidth = products[0].offsetWidth;
    const scrollAmount = currentIndex * productWidth;
    container.style.transform = `translateX(-${scrollAmount}px)`;
  }

  // slider ipad
  const container2 = document.querySelector("#product-ipad");
  const products2 = document.querySelectorAll(".ipad");
  
  let currentIndex2 = 0; 
  const visibleProducts2 = 4; 
  const totalProducts2 = products.length;
  
  function scrollSlider2(direction) {
    currentIndex2 += direction;
    if (currentIndex2 > totalProducts2 - visibleProducts2) {
      currentIndex2 = 0; 
    }
    if (currentIndex2 < 0) {
      currentIndex2 = totalProducts2 - visibleProducts2; 
    }
    const productWidth = products2[0].offsetWidth; 
    const scrollAmount = currentIndex2 * productWidth;

    container2.style.transform = `translateX(-${scrollAmount}px)`;
  }
  var mybutton = document.getElementById("scrollToTopBtn");
  window.onscroll=function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display="block";
    }

    else {
        mybutton.style.display="none";
    }
};
mybutton.onclick = function() { 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};
window.addEventListener('scroll', function() {
    var navigation = document.getElementById('navigation');
    if (window.scrollY > 100) {
        navigation.classList.add('fixed');
    } else {
        navigation.classList.remove('fixed');
    }
});