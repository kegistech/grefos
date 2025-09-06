jQuery(document).ready(function($){
/* START CAROUSEL */
$('#productSlider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dosts:true
        },
        600:{
            items:2,
            nav:false,
             dosts:true
        },
        1000:{
            items:3,
            nav:true,
            dosts:false,
            loop:false
        }
    }
});
/* /END CAROUSEL */

$('#textSlider').eocjsNewsticker({
  speed: 15
});

jQuery('#logoSlier').owlCarousel({
            center: true,
            items:5,
            loop:true,
            margin:50,
            nav:false,
            dots:false,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 1500,
            autoplaySpeed: 1500,
            autoplayHoverPause: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:7
                }
            }
        });

        
 });       

/* START MENU */
jQuery(document).ready(function($){
	// Submenu activation
	$.each([1,2,3],function(k,v){
		var m = $("#header .menu-item-"+v);
		m.prop('href','javascript:void(0)');
		m.click(function(e){
			e.preventDefault();
			$("#mainmenu li").removeClass("current-menu-item");
			$(this).addClass("current-menu-item");
			$("#header .sub-menu").removeClass('active scale-in-center');
			$("#header .submenu-item-"+v).addClass('active scale-in-center');
			$("#header .sub-menus").slideDown(400);
			setTimeout(function(){
				$(".social-header").fadeIn(400);
			},300);
		});
		if ($("ul.submenu-item-"+v).find(".current_page_item").length){
			$(".menu-item-"+v).addClass("current-menu-item current_page_item");
		}
	});
	
	$("#header").css('visibility','visible').addClass('slide-in-top'); 
	
	$("#header .hamburger").click(function(){
		humberger_menu_click($);
	});
	if ($("body").width() >= 1024)
		humberger_menu_click($);
});
function humberger_menu_click($){
	if ($("#header").hasClass('active')){
		$("#header .sub-menus").slideUp(300);
		$(".social-header").fadeOut(300);
		setTimeout(function(){
			$("#header").removeClass('active slide-in-top');
			$("#header").addClass('scale-out-left').removeClass('scale-in-left');
			$("#header .menu-content").hide(400);
			setTimeout(function(){
				$("#header .sub-menu").removeClass('active');
				$(".menu-hamburger").fadeIn(300);
				$("#mainmenu li").removeClass("current-menu-item");
				$("#mainmenu li.current_page_item").addClass("current-menu-item");
			},300);
		},300);
	} else {
		$("#header").addClass('active');
		$("#header").removeClass('scale-out-left slide-in-top').addClass('scale-in-left');
		$("#header .menu-content").show();
		$(".menu-hamburger").hide();
		
	}
}
/* /END MENU */



/* START TESTIMONIALS */

// vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}
/* /END TESTIMONIALS */