	
     $(document).ready(function() {
      		
      	//Mobile Navigation JS
		  $('.menu-trigger').click(function() {
		    $('nav ul').slideToggle(50);
		  });//end slide toggle

		//Welcome Popup JS
		  $('#signOut').click(function() {
		    $('.signOutPopup').slideToggle(50);
		  });//end slide toggle


		//for Active Navigation Tab
	        $('.navWrapper nav li>a').click(function(){
	          $('.navWrapper nav li>a').removeClass("navActive");
	          $(this).addClass("navActive");
	      });
		      

		//Community Slider JS
		if($("body").find("#eServusSlider").length > 0){
			var lightSlider;
			if ($(window).width() >= 767){  
				lightSlider = $('#eServusSlider').lightSlider({
			        gallery:true,
	                item:1,
	                thumbItem:4,
	                speed:2000,
	                auto:true,
	                loop:true,
	                vertical:true,
	                vThumbWidth: 141,
	                verticalHeight: 293,
	                controls: false,
	                galleryMargin: 10,
	            });       
			}else{
				lightSlider = $('#eServusSlider').lightSlider({
			        gallery:true,
	                item:1,
	                thumbItem:4,
	                speed:2000,
	                auto:true,
	                loop:true,
	                vertical:false,
	                vThumbWidth: 141,
	                verticalHeight: 293,
	                controls: false,
	                galleryMargin: 10,
	            });
			}
			 
	    	$(window).resize(function(){
	      		
			    if ($(window).width() >= 767){  
			    	lightSlider.destroy();
					lightSlider = $('#eServusSlider').lightSlider({
				        gallery:true,
		                item:1,
		                thumbItem:4,
		                speed:2000,
		                auto:true,
		                loop:true,
		                vertical:true,
		                vThumbWidth: 141,
		                verticalHeight: 293,
		                controls: false,
		                galleryMargin: 10,
		            });       
				}else{
			    	lightSlider.destroy();
					lightSlider = $('#eServusSlider').lightSlider({
				        gallery:true,
		                item:1,
		                thumbItem:4,
		                speed:2000,
		                auto:true,
		                loop:true,
		                vertical:false,
		                vThumbWidth: 141,
		                verticalHeight: 293,
		                controls: false,
		                galleryMargin: 10,
		            });
				}	
			}); //close resize
	 	}

    	//Building Page Slider JS
    	if($("body").find("#buildingSlider").length > 0){
			$('#buildingSlider').lightSlider({
		        gallery:true,
                item:1,
                thumbItem:0,
                slideMargin: 0,
                speed:2000,
                auto:true,
                loop:true,
                vertical:false,
                vThumbWidth: 1,
                verticalHeight: 373,
                controls: false,
                mode: "fade",
	        });
		}

	});//end ready


    //for Responsive Tabs JS
      (function($) {

		  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
		    var $target = $(e.target);
		    var $tabs = $target.closest('.nav-tabs-responsive');
		    var $current = $target.closest('li');
		    
		    var $next = $current.next();
		    var $prev = $current.prev();

		    $tabs.find('>li').removeClass('next prev');
		    $prev.addClass('prev');
		    $next.addClass('next');
		    
		  });

		})(jQuery);


		//for Annoncement Link Scrolled
		$(document).on('click', '#announcementLink', function(event) {

			var toBeScrolledOffset = $("#annoNewsWrap").offset().top;
            console.log(toBeScrolledOffset);
            toBeScrolledOffset = toBeScrolledOffset - 158;
            
            $('html, body').animate({scrollTop:toBeScrolledOffset}, 'slow');
		});

		//for Social Feed Link Scrolled
		$(document).on('click', '#socialFeedLink', function(event) {

			var toBeScrolledOffset = $("#socialFeedWrap").offset().top;
            console.log(toBeScrolledOffset);
            toBeScrolledOffset = toBeScrolledOffset - 158;
            
            $('html, body').animate({scrollTop:toBeScrolledOffset}, 'slow');
		});


	//for Scroll effect JS on Tenant Directory Tab
		$(document).ready(function() {

			if($("body").find(".tanantDirTblWrap").length > 0){
				var tanantDirTblScroll = new scrollbot(".tanantDirTblWrap");
			}
		});


	// for Community Page calender JS
		$(document).ready(function() {
			if($("body").find("#calendar").length > 0){
				$('#calendar').fullCalendar({
					header: {
						left: 'prev',
						center: 'title',
						right: 'next'
					},
					defaultDate: '2017-10-12',
					navLinks: false, // can click day/week names to navigate views
					editable: false,
					eventLimit: true, // allow "more" link when too many events
					height: 210,
					/*events: [
						{
							title: 'All Day Event',
							start: '2017-10-01'
						},
						{
							title: 'Long Event',
							start: '2017-10-07',
							end: '2017-10-10'
						},
						{
							id: 999,
							title: 'Repeating Event',
							start: '2017-10-09T16:00:00'
						},
						{
							id: 999,
							title: 'Repeating Event',
							start: '2017-10-16T16:00:00'
						},
						{
							title: 'Conference',
							start: '2017-10-11',
							end: '2017-10-13'
						},
						{
							title: 'Meeting',
							start: '2017-10-12T10:30:00',
							end: '2017-10-12T12:30:00'
						},
						{
							title: 'Lunch',
							start: '2017-10-12T12:00:00'
						},
						{
							title: 'Meeting',
							start: '2017-10-12T14:30:00'
						},
						{
							title: 'Happy Hour',
							start: '2017-10-12T17:30:00'
						},
						{
							title: 'Dinner',
							start: '2017-10-12T20:00:00'
						},
						{
							title: 'Birthday Party',
							start: '2017-10-13T07:00:00'
						},
						{
							title: 'Click for Google',
							url: 'http://google.com/',
							start: '2017-10-28'
						}
					]*/
				});
			}
		});


	//For Bulletin Board Post Pagination JS
		if($("body").find("#bbPostPagination").length > 0){
			YUI().use(
			  'aui-pagination',
			  function(Y) {
			    new Y.Pagination(
			      {
			        after: {
			          changeRequest: function(event) {
			            console.log(
			              'page:', event.state.page,
			              'getOffsetPageNumber:', this.getOffsetPageNumber()
			            );
			          }
			        },
			        boundingBox: '#bbPostPagination',
			        offset: 1,
			        page: 1,
			        strings: {
			          next: '>',
			          prev: '<'
			        },
			        total: 5
			      }
			    ).render();

			  }
			);
		}