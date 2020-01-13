var $j = jQuery.noConflict();

$j(document).ready(function() {
	if ($j.fn.select2) {
	$j('.wpcf7-select').select2({minimumResultsForSearch: -1});
	}
	
	
	$j('.header_bottom_widget li.icl-fr a').html('FR');
$j('.header_bottom_widget li.icl-en a').html('EN');



$j('.header_top .widget_icl_lang_sel_widget li.icl-fr a').html('FR');
$j('.header_top .widget_icl_lang_sel_widget li.icl-en a').html('EN');
	

if($j('.q_team').length){
			$j('.q_team').each(function(){

	var $this =$j(this);
	$this.find('.more_less').click( function(e){
	
	$j(this).toggleClass('active');
	
	
	if($j(this).hasClass('active')){
	$j(this).html($j(this).data('lesslabel'));
	}else{
	$j(this).html($j(this).data('morelabel'));
	}
	
	$this.find('.short-info-full').toggleClass('open');
	$this.find('.short-info').toggleClass('hide');
	
	
	return false;
	
	});
		
		
	});
}

if($j('.sticky_popup').length){
	$j('.sticky_popup').each(function(){
	
	var $this =$j(this);
	$this.mouseenter(function() { 
	
	
	if(!$this.hasClass('p_active')){
	$this.addClass('p_active');
	$this.find('.sticky_desc').slideDown();} }).mouseleave(function() {  
	
	if($this.hasClass('p_active')){
		$this.removeClass('p_active');
	$this.find('.sticky_desc').slideUp(); } });
		
		
	});
}

equal_height_box();
set_height_testimonial();
initHashClick_new();
initSideMenu_new();
over_qodeInitAccordions();
backToTop_footerlogo();
/*-------------------------End MEnu---------------------------*/

if($j('.qode_carousels_logo_outer').length){
			$j('.qode_carousels_logo_outer').each(function(){

	var $this =$j(this);
	$this.find('.qode_carousels_logo_holder').slick({
		
		
		infinite: true,
		
	  autoplay: true,
            speed: 1500,
            slidesToShow: 1,
            dots: true,
			appendDots:$this.find(".custom-nviagtion"),
            customPaging:function(slider, i){return $this.find('.custom-nviagtion .dots-rotator-navigation li:nth-child('+(i+1)+')').html();},
			arrows: false,
			fade: true,
			responsive: [{
                            breakpoint: 767,
                            settings: {
                                                            
								arrows: false,
								asNavFor: $this.find('.custom-nviagtion-mobile .dots-rotator-navigation'),
						
                            }
                        }]
		});
		
		$this.find('.custom-nviagtion-mobile .dots-rotator-navigation').slick({
		
		
		infinite: true,
		
	  autoplay: true,
            speed: 1500,
            slidesToShow: 1,
            dots: false,
			asNavFor: $this.find('.qode_carousels_logo_holder'),
            
			arrows: true,
			fade: false,
		});
		
	});
}


if($j('.qode-advanced-tabs-slider').length){
	
	
			$j('.qode-advanced-tabs-slider').each(function(){

	var $this =$j(this);
	$this.find('.qode-advanced-tabs-slider-items').slick({
		
		
		infinite: true,
		
	  autoplay: true,
	  autoplaySpeed:10000,
            speed: 1500,
            slidesToShow: 1,
            dots: true,
			
			appendDots:$this.find(".custom-nviagtion"),
			
            customPaging:function(slider, i){return $this.find('.custom-nviagtion .qode-advanced-tabs-nav li:nth-child('+(i+1)+')').html();},
			arrows: true,
			fade: true,
			 pauseOnDotsHover: true,
			 pauseOnHover: true,
			responsive: [{
                            breakpoint: 767,
                            settings: {
                                                            
								arrows: false,
								asNavFor: $this.find('.custom-nviagtion-mobile .qode-advanced-tabs-nav'),
						
                            }
                        }]
		});
		
		
			
		$this.find('.custom-nviagtion-mobile .qode-advanced-tabs-nav').slick({
		
		
		infinite: true,
		 autoplaySpeed:10000,
	  autoplay: true,
            speed: 1500,
			pauseOnDotsHover: true,
			pauseOnHover: true,
            slidesToShow: 1,
            dots: false,
			
             asNavFor: $this.find('.qode-advanced-tabs-slider-items'),
			arrows: true,
			fade: true,
			
			
		});
	


	
	});
	
	
	
	
	
	$j(".qode-advanced-tabs-slider .custom-nviagtion ul li a,.qode-advanced-tabs-slider .custom-nviagtion-mobile ul li a").click(function(e){
            e.preventDefault();
			
          
        });
}


/*--------------------------End slick slider---------------------------*/
	
/*---------------wooCommerce Single page---------------------------*/

if($j('.second-product').length){
//	$j('.second-product').find('.addon-checkbox').click(function(){ 

	$j('.second-product').find('.wc-pao-addon-checkbox').click(function(){ 
	if($j(this).is(":checked")){
		if($j('.depend-second-product').length){
			$j('.depend-second-product').addClass('enable');
		}
		if($j('.depend-first-product').length){
			$j('.depend-first-product').addClass('disable');
//			$j('.depend-first-product').find('.addon-checkbox').prop( 'checked', false );
			$j('.depend-first-product').find('.wc-pao-addon-checkbox').prop( 'checked', false );
//			if ( $j('.depend-first-product').find('.addon-select').is( 'select' ) ) {
			if ( $j('.depend-first-product').find('.wc-pao-addon-select').is( 'select' ) ) {

//				$j('.depend-first-product').find('.addon-select').prop( 'selectedIndex', 0 );
				$j('.depend-first-product').find('.wc-pao-addon-select').prop( 'selectedIndex', 0 );
				}
		}
		
	
	}else{
		if($j('.depend-second-product').length){
			$j('.depend-second-product').removeClass('enable');
//			$j('.depend-second-product').find('.addon-checkbox').prop( 'checked', false );
			$j('.depend-second-product').find('.wc-pao-addon-checkbox').prop( 'checked', false );

//			if ( $j('.depend-second-product').find('.addon-select').is( 'select' ) ) {
			if ( $j('.depend-second-product').find('.wc-pao-addon-select').is( 'select' ) ) {
//				$j('.depend-second-product').find('.addon-select').prop( 'selectedIndex', 0 );
				$j('.depend-second-product').find('.wc-pao-addon-select').prop( 'selectedIndex', 0 );
				}

		}
		
		if($j('.depend-first-product').length){
			$j('.depend-first-product').removeClass('disable');
			
		}
	}
	
	});
	
}	
/*----------------Content slider Patch fix parralexx-----------------*/
setTimeout(function(){ if($j('.qode_content_slider').length){
		
		if($j('.qode_content_slider').hasClass('default-height')){
			$j('.qode_content_slider').removeClass('default-height');
		}
	} }, 4000);
});

$j(window).load(function(){
	initQode_twitter();
	qodeInitAdvancedTabs_slider();
	qodeInitAdvancedTabsIcons_slider();
	over_initQodeCarousel();
});


var sticky_popup=$j(".sticky_popup"); 
var sticky_popup_start=$j(".sticky_popup_start");

$j(window).scroll(function(){
	
	
	
	
	
	 if(sticky_popup.length){
		  
		 
			
			 var sticky_popup_start_offset=sticky_popup_start.offset().top;
			 
			sticky_popup_start_offset=sticky_popup_start_offset-$j(window).height();
			 
				if ($j(this).scrollTop() >= 0 && $j(this).scrollTop() <= sticky_popup_start_offset) {
					
					sticky_popup.addClass('sticky_popup_fixed');
				
				}else{
				
					sticky_popup.removeClass('sticky_popup_fixed');
						
				}
		
		
		
				
				 
		}
	
});
 $j(window).resize(function() {

equal_height_box();
set_height_testimonial();

});

var current_scroll;
function initSideMenu_new(){
	"use strict";
	if ($j('body').hasClass('side_menu_slide_from_right')) {
		
		
			$j('.wrapper').prepend('<div class="cover"/>');
			$j(document).on( "click", ".open-side-menu", function(e){
			
			
			var $this = $j(this);
      
	
	e.preventDefault();
			if(!$j('.side_menu_button_wrapper a.side_menu_button_link').hasClass('opened')){
				$j('.side_menu_button_wrapper a.side_menu_button_link').addClass('opened');
				$j('body').addClass('right_side_menu_opened');

				$j(' .wrapper .cover').click(function() {
					$j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened');
					$j('body').removeClass('right_side_menu_opened');
					$j('.side_menu_button_wrapper a').removeClass('opened');
				});
				current_scroll = $j(window).scrollTop();
				$j(window).scroll(function() {
					if(Math.abs($scroll - current_scroll) > 400){
						$j('body').removeClass('right_side_menu_opened');
						$j('.side_menu_button_wrapper a').removeClass('opened');
					}
				});
			}else{
				$j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened');
				$j('body').removeClass('right_side_menu_opened');
			}
			

		});
	}

	
}

/*
*	Init scroll to section link if that link has hash value
*/
function initHashClick_new(){
    "use strict";

    var $doc = $j('html, body');
    var paspartuScrollAdd = $j('body').hasClass('paspartu_on_top_fixed') ? $window_width*paspartu_width : 0;
    var scrollToAmount;
    $j(document).on( "click", ".rev_slider a,a.arrow-link,#sub-menu a,a.link-down", function(){
        var $this = $j(this);
        var hash = $j(this).prop("hash");
        var top_header_height;
        if((hash !== "" && $j(this).attr('href').split('#')[0] === "") || (hash !== "" && $j(this).attr('href').split('#')[0] !== "" && hash === window.location.hash) || (hash !== "" && $j(this).attr('href').split('#')[0] === window.location.href.split('#')[0])){ //in third condition 'hash !== ""' stays to prevent reload of page when link is active and ajax enabled
            if($j('header.page_header').hasClass('fixed') && !$j('body').hasClass('vertical_menu_enabled')){
                if($j('header.page_header').hasClass('scroll_top')){
                    top_header_height = header_top_height;
                }else{
                    top_header_height = 0;
                }

                if(!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) {
                    if (header_height - ($j('[data-q_id="' + hash + '"]').offset().top + top_header_height) / 4 >= min_header_height_scroll) {
                        var diff_of_header_and_section = $j('[data-q_id="' + hash + '"]').offset().top - header_height - paspartuScrollAdd;
                        scrollToAmount = diff_of_header_and_section + (diff_of_header_and_section / 4) + (diff_of_header_and_section / 16) + (diff_of_header_and_section / 64) + 1; //several times od dividing to minimize the error, because fixed header is shrinking while scroll, 1 is just to ensure
                    } else {
                    	if($j('header.page_header').hasClass('centered_logo')){
                    		scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_scroll - logo_height - paspartuScrollAdd - 30; //30 is top/bottom margin of logo
                    	} else {
                    		scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_scroll - paspartuScrollAdd;
                    	}
                    }
                }else{
					scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;

                }
			} else if($j('header.page_header').hasClass('fixed_top_header') && !$j('body').hasClass('vertical_menu_enabled')){
				if(!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')){
					scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top -  header_top_height - paspartuScrollAdd;
				}else{
					scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
				}
			} else if($j('header.page_header').hasClass('fixed_hiding') && !$j('body').hasClass('vertical_menu_enabled')){
                if(!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) {
                    if ($j('[data-q_id="' + hash + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding) {
                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - header_height - logo_height / 2 - 40 - paspartuScrollAdd; //40 is top/bottom margin of logo
                    } else {
                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_fixed_hidden - 40 - paspartuScrollAdd; //40 is top/bottom margin of logo
                    }
                }else{
                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
                }
            }else if($j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu') && !$j('body').hasClass('vertical_menu_enabled')) {
                if(!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) {
                    if (sticky_amount >= $j('[data-q_id="' + hash + '"]').offset().top) {
                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top + 2 - paspartuScrollAdd; // 2 is to show sticky menu
                    } else {
                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_sticky - paspartuScrollAdd;
                    }
                }else{
                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
                }
            } else{
                scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
            }


            if($j('[data-q_id="'+hash+'"]').length > 0){
                $doc.stop().animate({
                    scrollTop: Math.round(scrollToAmount)
                }, 1500, function() {
                    anchorActiveState($this);
                });

            }

            if(history.pushState) {
                history.pushState(null, null, hash);
            }
            return false;
        }

    });
    
}


/*
**	Init twitter shortcode
*/
function initQode_twitter(){
	"use strict";

    if($j('.qode-twitter-feed-shortcode').length){
        $j('.qode-twitter-feed-shortcode').each(function(){
            var interval = 5000;
            var $this = $j(this);

            if(typeof $this.data('auto-rotate-slides') !== 'undefined' && $this.data('auto-rotate-slides') !== false) {
                interval = parseFloat($this.data('auto-rotate-slides')) * 1000;
            }

            var slideshow = true;
            if(interval === 0) {
                slideshow = false;
            }

            var animation = 'fade';
            if(typeof $this.data('animation-type') !== 'undefined' && $this.data('animation-type') !== false) {
                animation = $this.data('animation-type');
            }

            var directionNav = false;
            if(typeof $this.data('show-navigation') !== 'undefined') {
                directionNav = $this.data('show-navigation') == 'no' ? false : true;
            }

            var animationSpeed = 600;
            if(typeof $this.data('animation-speed') !== 'undefined' && $this.data('animation-speed') !== false) {
                animationSpeed = $this.data('animation-speed');
            }

            var numberPerPage = qodeNumberOfTestimonialsItems($this);
            var itemWidth = 0;
            var itemMargin = 0;
            if(typeof numberPerPage !== 'undefined' && numberPerPage !== 1) {
                itemWidth = 200; //just dummy number, script will calculate it
                itemMargin = 40;
            }

            $this.flexslider({
				 selector: ".qode-tfs-inner > .qode-tfs-item",
                animationLoop: true,
                controlNav: false,
                directionNav: directionNav,
                useCSS: false,
				pausePlay: false,
				prevText:'<i class="fa fa-angle-left" aria-hidden="true"></i>',
				nextText:'<i class="fa fa-angle-right" aria-hidden="true"></i>',
				pauseText:'<i class="fa fa-pause" aria-hidden="true"></i>',
				playText:'<i class="fa fa-play" aria-hidden="true"></i>',
				
				

				 
                pauseOnAction: true,
                pauseOnHover: false,
                slideshow: slideshow,
                animation: animation,
                itemMargin: itemMargin,
                minItems: numberPerPage,
                maxItems: numberPerPage,
                itemWidth: itemWidth,
                animationSpeed: animationSpeed,
                slideshowSpeed: interval,
                start: function(slider){
                    initParallax();
                }
            });
        });

    }
}

function qodeInitAdvancedTabs_slider(){

	
}

/*
 **	Generate icons in tabs navigation
 */
function qodeInitAdvancedTabsIcons_slider(){

	var tabContent = $j('.qode-advanced-tab-container-slider');
	if(tabContent.length){

		tabContent.each(function(){
			var thisTabContent = $j(this);

			var id = thisTabContent.attr('id');
			var icon = '';
			if(typeof thisTabContent.data('icon-html') !== 'undefined' || thisTabContent.data('icon-html') !== 'false') {
				
				icon = thisTabContent.data('icon-html');
			}
			id = id.replace(/(\d+)/g,'');

			var tabNav = thisTabContent.parents('.qode-advanced-tabs-slider').find('.custom-nviagtion  a[href="#'+id+'"]');
			var tabNav_mob = thisTabContent.parents('.qode-advanced-tabs-slider').find('.custom-nviagtion-mobile  a[href="#'+id+'"]');
			if(typeof(tabNav) !== 'undefined') {
				tabNav.children('.qode-advanced-icon-frame').append(icon);
				tabNav_mob.children('.qode-advanced-icon-frame').append(icon);
				
			}
		});
	}
}


/*
 ** Init Qode Carousel
 */
function over_initQodeCarousel(){
    "use strict";

    if($j('.qode_carousels').length){
        $j('.qode_carousels').each(function(){
        	var thisItem = $j(this);
			thisItem.append( '<a id="car_prev" class="prev" href="#" style="display: block;"><i class="qode_icon_font_awesome fa fa-arrow-left "></i></a>' );
			thisItem.append( '<a id="car_next" class="next" href="#" style="display: block;"><i class="qode_icon_font_awesome fa fa-arrow-right "></i></a>' );
        	var numberOfVisibleItems = 3;
        	if(typeof thisItem.data('number-of-visible-items') !== 'undefined' && thisItem.data('number-of-visible-items') !== '') {
        		if(thisItem.data('number-of-visible-items') === 4) {
        			numberOfVisibleItems = 4;
        		} else if (thisItem.data('number-of-visible-items') === 5) {
        			numberOfVisibleItems = 8;
        		}
        	}
        	var itemWidth = (thisItem.parents('.grid_section').length == 1) ? 400 : 450;
        	var maxItems = 3;
        	if(numberOfVisibleItems === 4) {
        		itemWidth = (thisItem.parents('.grid_section').length == 1) ? 255 : 472;
        		maxItems = 4;
        	} else if (numberOfVisibleItems === 8) {
        		itemWidth = (thisItem.parents('.grid_section').length == 1) ? 100 : 200;
        		maxItems = 8;
        	}

            thisItem.find('.slides').carouFredSel({
                circular: true,
                responsive: true,
                scroll : {
                    items           : 1,
                    duration        : 1000,
                    pauseOnHover    : false
                },
				
                items: {
                    width: itemWidth,
                    visible: {
                        min: 1,
                        max: maxItems
                    }
                },
                auto: false,
				prev: '#car_prev',
				next: '#car_next',
                mousewheel: false,
                swipe: {
                    onMouse: true,
                    onTouch: true
                }

            }).animate({'opacity': 1},1000);
        });
        //calculateHeights();
			  if($j('.qode_carousels .slides').length){
		
		 $j('.qode_carousels .slides').each(function(){
			  var hheight=0;
				$j(this).find('li.item').each(function(){
				
				if($j(this).outerHeight()>hheight){
				
					hheight=$j(this).outerHeight();
					$j(this).parents('.caroufredsel_wrapper').css({'height' : (hheight) + 'px'});
				  
				}
				
				 });
			});
    	}
    }
}


function over_qodeInitAccordions(){
    "use strict";

    var accordion = $j('.qode-accordion-holder');
    if(accordion.length){
        accordion.each(function(){

           var thisAccordion = $j(this);

			

			if(thisAccordion.hasClass('qode-toggle')){

				var toggleAccordion = $j(this);
				var toggleAccordionTitle = toggleAccordion.find('.qode-title-holder');
				var toggleAccordionContent = toggleAccordionTitle.next();

		
				var $ii=1
				toggleAccordionTitle.each(function(){
					var thisTitle = $j(this);
					
					if($ii==1){
					thisTitle.toggleClass('ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom');
						thisTitle.next().toggleClass('ui-accordion-content-active').slideToggle(300);
					}
				$ii++;
					
				});
			}
        });
    }
}
/*-----------------select box------------------------*/
function DropDown(el) {
				this.dd = el;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$j(this).toggleClass('active');
						event.stopPropagation();
					});	
				}
			}

			$j(function() {

				var dd = new DropDown( $j('#dp-fine') );

				$j(document).click(function() {
					// all dropdowns
					$j('.wrapper-dropdown-5 .wpb_wrapper').removeClass('active');
				});

			});

/*-------------------get max height testimonail slider--------------------*/
function set_height_testimonial(){
	if($j('.testimonials_holder .testimonials_carousel').length){
	$j('.testimonials_holder .testimonials_carousel').each(function(){
		var this_top=$j(this);
	var heights1 = [];
	this_top.find('.slides li .testimonial_content_inner').css("height","auto");
	
	 if(this_top.find('.slides li').length){
	 this_top.find('.slides li').each(function(){
		 
		 var heightr=$j(this).height();
		heights1.push(heightr);
	 });
	 
	 // Get the biggest height
        var maxHeight = Math.max.apply(null, heights1);
        // Show in the console to verify
        //console.log(heights,maxHeight);
		
		this_top.find('.slides li .testimonial_content_inner').css("height",maxHeight);
	 }
	 

		
	});
	
	}
}
/*-------------------box equal height--------------------*/
function equal_height_box(){
if($j('.equal-box-height').length){
	$j('.equal-box-height').each(function(){
		var this_top=$j(this);
	var heights1 = [];
	var heights2 = [];
	var heights3 = [];
	 if(this_top.find('.image_with_text').length){
	 this_top.find('.image_with_text').each(function(){
		 
		 var heightr=$j(this).height();
		heights1.push(heightr);
	 });
	 
	 // Get the biggest height
        var maxHeight = Math.max.apply(null, heights1);
        // Show in the console to verify
        //console.log(heights,maxHeight);
		
		this_top.find('.image_with_text').css("min-height",maxHeight);
	 }
	 
	  if(this_top.find('.box-col-border > .vc_column-inner > .wpb_wrapper').length){
		  
		  
		   this_top.find('.box-col-border > .vc_column-inner > .wpb_wrapper').each(function(){
		 
		 var heightr=$j(this).height();
		heights2.push(heightr);
	 });
	 
	 // Get the biggest height
        var maxHeight = Math.max.apply(null, heights2);
        // Show in the console to verify
        //console.log(heights,maxHeight);
		
		this_top.find('.box-col-border > .vc_column-inner > .wpb_wrapper').css("min-height",maxHeight);
	  }
	  
	  if(this_top.find('.support-box').length){
		  
		  
		   this_top.find('.support-box').each(function(){
		 
		 var heightr=$j(this).height();
		heights3.push(heightr);
	 });
	 
	 // Get the biggest height
        var maxHeight = Math.max.apply(null, heights3);
        // Show in the console to verify
        //console.log(heights,maxHeight);
		
		this_top.find('.support-box').css("min-height",maxHeight);
	  }
		
	});
	

}
}


function backToTop_footerlogo(){
	"use strict";

	$j(document).on('click','.home .footer-logo a',function(e){
		e.preventDefault();

		$j('body,html').animate({scrollTop: 0}, $j(window).scrollTop()/3, 'linear');
	});
}