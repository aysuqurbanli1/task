(function ($) {
	
	"use strict";

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	
	$('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
          
          var data = $(this).attr('data-filter');
          $grid.isotope({
            filter: data
          })
        });

        var $grid = $(".grid").isotope({
          itemSelector: ".all",
          percentPosition: true,
          masonry: {
            columnWidth: ".all"
          }
        });


	const Accordion = {
	  settings: {
	    // Expand the first item by default
	    first_expanded: false,
	    // Allow items to be toggled independently
	    toggle: false
	  },

	  openAccordion: function(toggle, content) {
	    if (content.children.length) {
	      toggle.classList.add("is-open");
	      let final_height = Math.floor(content.children[0].offsetHeight);
	      content.style.height = final_height + "px";
	    }
	  },

	  closeAccordion: function(toggle, content) {
	    toggle.classList.remove("is-open");
	    content.style.height = 0;
	  },

	  init: function(el) {
	    const _this = this;

	    // Override default settings with classes
	    let is_first_expanded = _this.settings.first_expanded;
	    if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
	    let is_toggle = _this.settings.toggle;
	    if (el.classList.contains("is-toggle")) is_toggle = true;

	    // Loop through the accordion's sections and set up the click behavior
	    const sections = el.getElementsByClassName("accordion");
	    const all_toggles = el.getElementsByClassName("accordion-head");
	    const all_contents = el.getElementsByClassName("accordion-body");
	    for (let i = 0; i < sections.length; i++) {
	      const section = sections[i];
	      const toggle = all_toggles[i];
	      const content = all_contents[i];

	      // Click behavior
	      toggle.addEventListener("click", function(e) {
	        if (!is_toggle) {
	          // Hide all content areas first
	          for (let a = 0; a < all_contents.length; a++) {
	            _this.closeAccordion(all_toggles[a], all_contents[a]);
	          }

	          // Expand the clicked item
	          _this.openAccordion(toggle, content);
	        } else {
	          // Toggle the clicked item
	          if (toggle.classList.contains("is-open")) {
	            _this.closeAccordion(toggle, content);
	          } else {
	            _this.openAccordion(toggle, content);
	          }
	        }
	      });

	      // Expand the first item
	      if (i === 0 && is_first_expanded) {
	        _this.openAccordion(toggle, content);
	      }
	    }
	  }
	};

	(function() {
	  // Initiate all instances on the page
	  const accordions = document.getElementsByClassName("accordions");
	  for (let i = 0; i < accordions.length; i++) {
	    Accordion.init(accordions[i]);
	  }
	})();


	$('.owl-service-item').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		  }
	  })

	$('.owl-courses-item').owlCarousel({
		items:4,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:4
			  }
		  }
	  })
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('.scroll-to-section a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }


	function visible(partial) {
        var $t = partial,
            $w = jQuery(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

    }

    $(window).scroll(function() {

        if (visible($('.count-digit'))) {
            if ($('.count-digit').hasClass('counter-loaded')) return;
            $('.count-digit').addClass('counter-loaded');

            $('.count-digit').each(function() {
                var $this = $(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    })


})(window.jQuery);


/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
	el: "#app",
	data() {
	  return {
		audio: null,
		circleLeft: null,
		barWidth: null,
		duration: null,
		currentTime: null,
		isTimerPlaying: false,
		tracks: [
		  {
			name: "Mekanın Sahibi",
			artist: "Norm Ender",
			cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
			source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
			url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
			favorited: false
		  },
		  {
			name: "Everybody Knows",
			artist: "Leonard Cohen",
			cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
			source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
			url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
			favorited: true
		  },
		  {
			name: "Extreme Ways",
			artist: "Moby",
			cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
			source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
			url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
			favorited: false
		  },
		  {
			name: "Butterflies",
			artist: "Sia",
			cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
			source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
			url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
			favorited: false
		  },
		  {
			name: "The Final Victory",
			artist: "Haggard",
			cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
			source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
			url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
			favorited: true
		  },
		  {
			name: "Genius ft. Sia, Diplo, Labrinth",
			artist: "LSD",
			cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
			source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
			url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
			favorited: false
		  },
		  {
			name: "The Comeback Kid",
			artist: "Lindi Ortega",
			cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
			source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
			url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
			favorited: true
		  },
		  {
			name: "Overdose",
			artist: "Grandson",
			cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
			source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
			url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
			favorited: false
		  },
		  {
			name: "Rag'n'Bone Man",
			artist: "Human",
			cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
			source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
			url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
			favorited: false
		  }
		],
		currentTrack: null,
		currentTrackIndex: 0,
		transitionName: null
	  };
	},
	methods: {
	  play() {
		if (this.audio.paused) {
		  this.audio.play();
		  this.isTimerPlaying = true;
		} else {
		  this.audio.pause();
		  this.isTimerPlaying = false;
		}
	  },
	  generateTime() {
		let width = (100 / this.audio.duration) * this.audio.currentTime;
		this.barWidth = width + "%";
		this.circleLeft = width + "%";
		let durmin = Math.floor(this.audio.duration / 60);
		let dursec = Math.floor(this.audio.duration - durmin * 60);
		let curmin = Math.floor(this.audio.currentTime / 60);
		let cursec = Math.floor(this.audio.currentTime - curmin * 60);
		if (durmin < 10) {
		  durmin = "0" + durmin;
		}
		if (dursec < 10) {
		  dursec = "0" + dursec;
		}
		if (curmin < 10) {
		  curmin = "0" + curmin;
		}
		if (cursec < 10) {
		  cursec = "0" + cursec;
		}
		this.duration = durmin + ":" + dursec;
		this.currentTime = curmin + ":" + cursec;
	  },
	  updateBar(x) {
		let progress = this.$refs.progress;
		let maxduration = this.audio.duration;
		let position = x - progress.offsetLeft;
		let percentage = (100 * position) / progress.offsetWidth;
		if (percentage > 100) {
		  percentage = 100;
		}
		if (percentage < 0) {
		  percentage = 0;
		}
		this.barWidth = percentage + "%";
		this.circleLeft = percentage + "%";
		this.audio.currentTime = (maxduration * percentage) / 100;
		this.audio.play();
	  },
	  clickProgress(e) {
		this.isTimerPlaying = true;
		this.audio.pause();
		this.updateBar(e.pageX);
	  },
	  prevTrack() {
		this.transitionName = "scale-in";
		this.isShowCover = false;
		if (this.currentTrackIndex > 0) {
		  this.currentTrackIndex--;
		} else {
		  this.currentTrackIndex = this.tracks.length - 1;
		}
		this.currentTrack = this.tracks[this.currentTrackIndex];
		this.resetPlayer();
	  },
	  nextTrack() {
		this.transitionName = "scale-out";
		this.isShowCover = false;
		if (this.currentTrackIndex < this.tracks.length - 1) {
		  this.currentTrackIndex++;
		} else {
		  this.currentTrackIndex = 0;
		}
		this.currentTrack = this.tracks[this.currentTrackIndex];
		this.resetPlayer();
	  },
	  resetPlayer() {
		this.barWidth = 0;
		this.circleLeft = 0;
		this.audio.currentTime = 0;
		this.audio.src = this.currentTrack.source;
		setTimeout(() => {
		  if(this.isTimerPlaying) {
			this.audio.play();
		  } else {
			this.audio.pause();
		  }
		}, 300);
	  },
	  favorite() {
		this.tracks[this.currentTrackIndex].favorited = !this.tracks[
		  this.currentTrackIndex
		].favorited;
	  }
	},
	created() {
	  let vm = this;
	  this.currentTrack = this.tracks[0];
	  this.audio = new Audio();
	  this.audio.src = this.currentTrack.source;
	  this.audio.ontimeupdate = function() {
		vm.generateTime();
	  };
	  this.audio.onloadedmetadata = function() {
		vm.generateTime();
	  };
	  this.audio.onended = function() {
		vm.nextTrack();
		this.isTimerPlaying = true;
	  };
  
	  // this is optional (for preload covers)
	  for (let index = 0; index < this.tracks.length; index++) {
		const element = this.tracks[index];
		let link = document.createElement('link');
		link.rel = "prefetch";
		link.href = element.cover;
		link.as = "image"
		document.head.appendChild(link)
	  }
	}
  });
  