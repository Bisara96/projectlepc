	(function($) {
	$(document).ready(function() {

		var headroom  = new Headroom(document.querySelector("header"), {"offset": 125, tolerance: 5 });
		headroom.init();	
		
		$('.toggle-search').click(function() {
			$(".search-form").fadeToggle(100, 'linear');
			$(this).toggleClass("active");
			$('#q').focus();
			if (typeof ga !== 'undefined') { ga('send', 'event', 'Search', 'click'); }
		});

		$('.feedback-link').click(function() {
			$(".feedback-form").fadeToggle(100, 'linear');
			$("#feedback_form_name").val('');
			$("#feedback_form_email").val('');
			$("#feedback_form_feedback").val('');
			if (typeof ga !== 'undefined') { ga('send', 'event', 'Build My PC', 'feedback-link'); }
		});

		$('.post-tv').click(function() {
			video_id = $(this).data("video");
			$(this).find('.video').addClass("open");
			$(this).find('.video').html('<iframe class="inline-youtube" src="https://www.youtube.com/embed/'+video_id+'?enablejsapi=1&rel=0&autoplay=1&showinfo=0&modestbranding=1&iv_load_policy=3" frameborder="0" allowFullScreen="allowFullScreen" allow="autoplay"></iframe>');
			if (typeof ga !== 'undefined') { ga('send', 'event', 'YouTube', 'Inline', video_id); }
		});

		function isScrolledIntoView(elem) {
			var $window = $(window),
			docViewTop = $window.scrollTop(),
			docViewBottom = docViewTop + $window.height(),
			elemTop = $(elem).offset().top,
			elemBottom = elemTop + $(elem).outerHeight();
			//return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
			return ((elemBottom <= docViewBottom) && (elemBottom >= docViewTop));
		}
		
		$(window).on("scroll", function() {
		
			$('.inline-youtube').each(function() {
				if (!isScrolledIntoView(this)) {
					$(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');				
				}
			});
		
		});
			
		/*
		$('.search-form').submit(function(e) {
			e.preventDefault();
			var search_url = '/find/?q=' + document.getElementById('s').value.replace(/ /g, '+');
			window.location = search_url;
		});
		*/

		$('a.wccf-stock-quote').each(function() {

			var link = $(this);
			var text = $(this).text();
			var exc_sym = text.split(":");

			$(this).html(text + '<span class="fetching"></span>');

			var newtext;
			$.getJSON('https://api.iextrading.com/1.0/stock/'+exc_sym[1]+'/quote', function(data) {

				if(data.symbol !== null) {
					
					if(data.change < 0) {
						$(link).addClass('minus');
						newtext = text + ' <span><i class="icon-arrow-down"></i><strong>' + data.latestPrice + '</strong> ' + (data.changePercent * 100).toFixed(2) + '%</span>';
					}
					
					if(data.change > 0) {
						$(link).addClass('plus');
						newtext = text + ' <span><i class="icon-arrow-up"></i><strong>' + data.latestPrice + '</strong> ' + (data.changePercent * 100).toFixed(2) + '%</span>';
					}
		
					if(data.change == 0) {
						$(link).addClass('plus');
						newtext = text + ' <span><strong>' + data.latestPrice + '</strong> ' + (data.changePercent * 100).toFixed(2) + '%</span>';
					}

					$(link).html(newtext);
				} else {
					
					$(link).html(text + '<span class="quote-na">n/a</span>');
					
				}
				
			}).error(function() {
				 
				$(link).html(text + '<span class="quote-na">n/a</span>');
				
			});
		});
			
		$('.nav a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Menu', 'click', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});

		$('a.wccf-amazon').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			var product = $(this).text();
			var href = $(this).attr("href");
			ga('send', 'event', 'Affiliate', 'Auto', product, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});

		$('a.wccf-amazon-bottom').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			var product = $(this).data("product");
			var href = $(this).attr("href");
			ga('send', 'event', 'Affiliate', 'Post End', product, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});

		$('.sidebar-latest a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Sidebar', 'Widget: Latest', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});

		$('.sidebar-exclusives a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Sidebar', 'Widget: Exclusives', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});

		$('.sidebar-trending a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Sidebar', 'Widget: Trending', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});

		$('.sidebar-popular a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Sidebar', 'Widget: Popular', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});


		$('.sidebar-deals a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Sidebar', 'Widget: Deals', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});
		
		$('.aside-deals-home a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Deals', 'Home', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});
		
		$('.aside-deals-archive a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Deals', 'Archive', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});
		
		$('.aside-event a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Event', 'iPhone Xs Launch', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});
			
		$('.aside-reviews-hardware a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Review Box', 'Hardware', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});

		$('.aside-reviews-mobile a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Review Box', 'Mobile', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});

		$('.build').on('click', '.price_a a', function(e) {
			if (typeof ga !== "function") return;
			href = $(this).attr("href");
			link_class = $(this).attr("class");
			ga('send', 'event', 'Build My PC (Amazon)', link_class, href, {
				'transport': 'beacon',
				'hitCallback': function() { window.open(href); }
			});
		});

		$('.build').on('click', '.price_n a', function(e) {
			if (typeof ga !== "function") return;
			href = $(this).attr("href");
			link_class = $(this).attr("class");
			ga('send', 'event', 'Build My PC (Newegg)', link_class, href, {
				'transport': 'beacon',
				'hitCallback': function() { window.open(href); }
			});
		});

		/*
		$('.related-posts a').click(function(e) {
			if (typeof ga !== "function") return;
			//e.preventDefault();
			href = $(this).attr("href");
			ga('send', 'event', 'Related Posts (Bottom)', 'click', href, {
				'transport': 'beacon',
				'hitCallback': function(){document.location = href;}
			});
		});
		*/

		$('.sidebar-youtube-player').on('click', function(e) {
			
			var video_id = $(this).data("video");
			var sidebar = $(this).closest(".sidebar-youtube").attr('id');
			if(sidebar == 'sidebar-youtube-hardware') sidebar = 'Hardware'; else if (sidebar == 'sidebar-youtube-gaming') sidebar = 'Gaming'; else sidebar = 'Single';
				
			$('.sidebar-youtube-player').css('background-image', 'none');
			$('.sidebar-youtube-player').html('<iframe src="https://www.youtube.com/embed/'+video_id+'?&rel=0&autoplay=1&showinfo=0&modestbranding=1&iv_load_policy=3" frameborder="0" allowFullScreen="allowFullScreen" allow="autoplay"></iframe>');

			if (typeof ga !== 'undefined') { ga('send', 'event', 'YouTube', 'Sidebar (' + sidebar + ')', video_id); }
		});	


		$('.sidebar-youtube-video').on('click', function(e) {
			
			var video_id = $(this).data("video");
			var sidebar = $(this).closest(".sidebar-youtube").attr('id');
			if(sidebar == 'sidebar-youtube-hardware') sidebar = 'Hardware'; else if (sidebar == 'sidebar-youtube-gaming') sidebar = 'Gaming'; else sidebar = 'Single';

			$('.sidebar-youtube-player').css('background-image', 'none');
			$('.sidebar-youtube-player').html('<iframe src="https://www.youtube.com/embed/'+video_id+'?&rel=0&autoplay=1&showinfo=0&modestbranding=1&iv_load_policy=3" frameborder="0" allowFullScreen="allowFullScreen" allow="autoplay"></iframe>');

			$('.sidebar-youtube-video').removeClass('active');
			$(this).addClass('active');
			if (typeof ga !== 'undefined') { ga('send', 'event', 'YouTube', 'Sidebar (' + sidebar + ')', video_id); }
		});	
		

		$('.youtube-thumb').on('click', function(e) {
			
			var video_id = $(this).data("video");
			$('.youtube-player-wrap').css('background-image', 'none');
			$('.youtube-player-wrap').html('<iframe src="https://www.youtube.com/embed/'+video_id+'?&rel=0&autoplay=1&showinfo=0&modestbranding=1&iv_load_policy=3" frameborder="0" allowFullScreen="allowFullScreen" allow="autoplay"></iframe>');

			$('.youtube-thumb').removeClass('active');
			$(this).addClass('active');
			if (typeof ga !== 'undefined') { ga('send', 'event', 'YouTube', 'Home', video_id); }
		});	
		
		$('.youtube-player-wrap').on('click', function(e) {
			
			var video_id = $(this).data("video");
			$('.youtube-player-wrap').css('background-image', 'none');
			$('.youtube-player-wrap').html('<iframe src="https://www.youtube.com/embed/'+video_id+'?&rel=0&autoplay=1&showinfo=0&modestbranding=1&iv_load_policy=3" frameborder="0" allowFullScreen="allowFullScreen" allow="autoplay"></iframe>');

			if (typeof ga !== 'undefined') { ga('send', 'event', 'YouTube', 'Home', video_id); }
		});	

		$(".feedback-form form").submit(function(e) {
			
			if (typeof ga !== 'undefined') { ga('send', 'event', 'Build My PC', 'feedback-form'); }
			$('.feedback-result').html('<img src="https://cdn.wccftech.com/builder/loading2.gif" width="15" height="15" alt="loading">');
			$.post("/wp-admin/admin-ajax.php", $(this).serialize(), function(response) {
				if(response == 'success') {
					$('.feedback-result').html('Thank you for the feedback.');
					$('.feedback-form').hide();
				} else {
					$('.feedback-result').html(response);			
				}
			});
			e.preventDefault();
		});
		
		$("#form_add_to_cart").submit(function(e) {
			if (typeof ga !== 'undefined') { ga('send', 'event', 'Build My PC', 'Add To Cart'); }
		});

		$("footer form").submit(function(e) {
			
			if (typeof ga !== 'undefined') { ga('send', 'event', 'Footer', 'Subscribe'); }
			$('.footer-4 p').html('<img src="https://cdn.wccftech.com/builder/loading2.gif" width="15" height="15" alt="loading">');
			$.post("/wp-admin/admin-ajax.php", $(this).serialize(), function(response) {
				if(response == 'success') {
					$('.footer-4 p').html('You have been successfully subscribed to our newsletter. Thank you.');
					$('#traqli').hide();
				} else {
					$('.footer-4 p').html(response);			
				}
			});
			e.preventDefault();
		});
		
		/*
		$('main.wrap').on('mouseenter', '.shares', function(){
			$(this).append('<div class="sohail-share"><i class="icon-facebook share-facebook"></i><i class="icon-twitter share-twitter"></i><i class="icon-reddit share-reddit"></i></div>');
			$(".sohail-share").show();
		}).on('mouseleave', '.shares', function(){
			$(".sohail-share").hide().remove();
		});

		$('main').on('click', '.share-facebook', function(e) {
			e.preventDefault();
			var url = $(this).closest('.shares').data('url');
			if (typeof ga !== 'undefined') ga('send', 'event', 'Share', 'Archive', url);
			do_share('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url));
		});
		
		$('main').on('click', '.share-twitter', function(e) {
			e.preventDefault();
			var url = $(this).closest('.shares').data('url');
			var text = $(this).closest('.shares').data('text');
			if (typeof ga !== 'undefined') ga('send', 'event', 'Share', 'Archive', url);
			do_share('https://twitter.com/intent/tweet?url=' + url + '&text=' + encodeURIComponent(truncate_text(text, 110)));
		});
		
		$('main').on('click', '.share-reddit', function(e) {
			e.preventDefault();
			var url = $(this).closest('.shares').data('url');
			if (typeof ga !== 'undefined') ga('send', 'event', 'Share', 'Archive', url);
			do_share('https://www.reddit.com/submit?url=' + encodeURIComponent(url));
		});
		*/


		$('.meta-share-top .facebook').on('click', function(e) {
			if (typeof ga !== 'undefined') ga('send', 'event', 'Share', 'Single (Top)', document.location.href);
			do_share('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href));
		});
		
		$('.meta-share-top .twitter').on('click', function(e) {
			if (typeof ga !== 'undefined') ga('send', 'event', 'Share', 'Single (Top)', document.location.href);
			do_share( 'https://twitter.com/intent/tweet?url=' + document.location.href + '&text=' + encodeURIComponent(truncate_text(document.title, 110)) );
		});

		$('.meta-share-top .reddit').on('click', function(e) {
			if (typeof ga !== 'undefined') ga('send', 'event', 'Share', 'Single (Top)', document.location.href);
			do_share('https://www.reddit.com/submit?url=' + encodeURIComponent(document.location.href));
		});

		$('.meta-share-bottom .facebook').on('click', function(e) {
			if (typeof ga !== 'undefined') ga('send', 'event', 'Share', 'Single (Bottom)', document.location.href);
			do_share('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href));
		});
		
		$('.meta-share-bottom .twitter').on('click', function(e) {
			if (typeof ga !== 'undefined') ga('send', 'event', 'Share', 'Single (Bottom)', document.location.href);
			do_share( 'https://twitter.com/intent/tweet?url=' + document.location.href + '&text=' + encodeURIComponent(truncate_text(document.title, 110)) );
		});

		$('.meta-share-bottom .reddit').on('click', function(e) {
			if (typeof ga !== 'undefined') ga('send', 'event', 'Share', 'Single (Bottom)', document.location.href);
			do_share('https://www.reddit.com/submit?url=' + encodeURIComponent(document.location.href));
		});

		//$(".wp-gallery").lightGallery({mode: 'lg-fade', hideBarsDelay: 2000, preload: 2, thumbWidth: 168, thumbContHeight: 100});
		$(".wp-lightbox").lightGallery({mode: 'lg-fade'});
		$('.lightslider').lightSlider({
	        gallery:true,
	        item:1,
	        loop:true,
	        thumbItem:6,
	        slideMargin:0,
	        enableDrag: false,
	        currentPagerPosition:'left',
			onSliderLoad: function(el) {
	            el.lightGallery({
	                selector: '.lightslider .lslide', mode: 'lg-fade', hideBarsDelay: 1000, preload: 2, thumbWidth: 124, thumbContHeight: 80, getCaptionFromTitleOrAlt: false
	            });
	        }
	    });
			
	});
	})(jQuery);	