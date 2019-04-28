$(document).ready(function() {
			
	var clipboard = new Clipboard('.docopy');
	
	clipboard.on('success', function(e) {
		$('.copy-status').html('Copied!');
		setTimeout(function() { $(".copy-status").html(''); }, 1000);
	});	

	price = $('#price').val();
	
	var price_slider = document.getElementById('price_slider');

	noUiSlider.create(price_slider, {
		start: [price],
		step: 50,
		connect: [true, false],
		tooltips: false,
		range: {
			'min': 400,
			'max': 5000
		},
		format: wNumb({
			decimals: 0,
			prefix: '',
		})
	});
	
	price_slider.noUiSlider.on('update', function( values, handle ) {
		price = values[handle];		
		$('#price').val(price);
	});
	
	$("#type1, #type2").change(function () {
        if ($("#type1").is(":checked")) {
            $("#type1").prop("checked", false);
            window.location.href = "https://wccftech.com/gaming-desktops-and-laptops/?type=laptop";
        } else {
            $("#type2").prop("checked", false);
            window.location.href = "https://wccftech.com/gaming-desktops-and-laptops/?type=desktop";
        }
    });
	
	/*
	$('.share-build .link').on('click', function(e) {
		if (typeof ga !== 'undefined') ga('send', 'event', 'Build My PC', 'link', document.location.href);

		$("#build-link").select();		
		document.execCommand('copy');

		$(".share-build .copy-status").animate({opacity: 1}, 500, function() { $('.share-build .copy-status').html('Copied!'); });

	});*/
	
	$('.share-build .facebook').on('click', function(e) {
		if (typeof ga !== 'undefined') ga('send', 'event', 'Build My PC', 'facebook', document.location.href);
		
		url = 'https://wccftech.com/pc-builder/?purpose=' + $("input[name=purpose]:checked").val() + '&price=' + $("input[name=price]").val().replace('$', '');
		if($("input[name=cpu]:checked").val() != 'Any') url += '&cpu=' + $("input[name=cpu]:checked").val();
		if($("input[name=gpu]:checked").val() != 'Any') url += '&gpu=' + $("input[name=gpu]:checked").val();
		if($("input[name=oc]:checked").val() != null) url += '&oc=' + $("input[name=oc]:checked").val();
		if($("input[name=vr]:checked").val() != null) url += '&vr=' + $("input[name=vr]:checked").val();
		if($("input[name=rgb]:checked").val() != null) url += '&rgb=' + $("input[name=rgb]:checked").val();

		do_share('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url));
	});
	
	$('.share-build .twitter').on('click', function(e) {
		if (typeof ga !== 'undefined') ga('send', 'event', 'Build My PC', 'twitter', document.location.href);

		url = 'https://wccftech.com/pc-builder/?purpose=' + $("input[name=purpose]:checked").val() + '&price=' + $("input[name=price]").val().replace('$', '');
		if($("input[name=cpu]:checked").val() != 'Any') url += '&cpu=' + $("input[name=cpu]:checked").val();
		if($("input[name=gpu]:checked").val() != 'Any') url += '&gpu=' + $("input[name=gpu]:checked").val();
		if($("input[name=oc]:checked").val() != null) url += '&oc=' + $("input[name=oc]:checked").val();
		if($("input[name=vr]:checked").val() != null) url += '&vr=' + $("input[name=vr]:checked").val();
		if($("input[name=rgb]:checked").val() != null) url += '&rgb=' + $("input[name=rgb]:checked").val();

		text = "Check out the PC I just built using Wccftech's intelligent PC Builder";
				
		do_share( 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + text);
	});

	$("#form_build_pc").submit(function(e) {
		
		$('.price_a, .price_n').removeClass('lowest');
		$('.desktop, .laptop, .cpu, .gpu, .mobo, .ram, .ssd, .dd, .psu, .cooler').hide();
		$('.build').hide();
		$('.share-build').hide();
		$(".status").html("");
		$('.loading').css('background-image', "url('https://cdn.wccftech.com/builder/loading.gif')");
		$('.loading2').css('background-image', "url('https://cdn.wccftech.com/builder/loading2.gif')");
		
		price   = $("input[name=price]").val().replace('$', '');
				
		parameters = $("input[name=purpose]:checked").val() + '/' + price + '/' + $("input[name=cpu]:checked").val() + '/' + $("input[name=gpu]:checked").val() + '/' + $("input[name=oc]:checked").val() + '/' + $("input[name=rgb]:checked").val() + '/' + $("input[name=vr]:checked").val();				
		url = 'https://api.wccftech.com/api/build/' + parameters;
		
		//console.log(url);
		
		// $.getJSON(url, function(data) {
			
		// 	$('.loading2').css('background-image', "");
			
		// 	if(JSON.stringify(data) == 0) {
		// 		$(".status").html("Sorry, we couldn't generate a build for this configuration.");
		// 	} else {
		// 		show_data(data);
		// 		$('.share-build').show();

		// 		price = $('#price').val().replace('$', '');
		// 		url = 'https://wccftech.com/pc-builder/?purpose=' + $("input[name=purpose]:checked").val() + '&price=' + $("input[name=price]").val().replace('$', '');
		// 		if($("input[name=cpu]:checked").val() != 'Any') url += '&cpu=' + $("input[name=cpu]:checked").val();
		// 		if($("input[name=gpu]:checked").val() != 'Any') url += '&gpu=' + $("input[name=gpu]:checked").val();
		// 		if(price >= 1000 && $("input[name=oc]:checked").val() != null) url += '&oc=' + $("input[name=oc]:checked").val();
		// 		if(price >= 1000 && $("input[name=vr]:checked").val() != null) url += '&vr=' + $("input[name=vr]:checked").val();
		// 		if(price >= 1000 && $("input[name=rgb]:checked").val() != null) url += '&rgb=' + $("input[name=rgb]:checked").val();
				
		// 		$('#build-link').val(url);
		// 		$('#feedback_form_build').val(url);
		// 	}
		// });
		$('.loading2').css('background-image', "");

		var data = JSON.parse("{\"cpu_id\":\"63\",\"cpu_title\":\"AMD Ryzen Threadripper 2950X\",\"cpu_brand\":\"AMD\",\"cpu_generation\":\"Zen+\",\"cpu_platform\":\"X399,X499\",\"cpu_clock\":\"4.2\",\"cpu_tdp\":\"350\",\"cpu_cstate\":\"Yes\",\"cpu_igpu\":\"No\",\"cpu_oc\":\"Yes\",\"cpu_cooler\":\"No\",\"cpu_bench1\":\"3210\",\"cpu_bench2\":\"0\",\"cpu_bench3\":\"50\",\"cpu_bench3i\":\"20\",\"cpu_bench4\":\"20\",\"cpu_bench5\":\"13333\",\"cpu_fps_s\":\"83\",\"cpu_bench1g\":\"0\",\"cpu_bench2g\":\"0\",\"cpu_bench3g\":\"0\",\"cpu_bench4g\":\"0\",\"cpu_bench5g\":\"0\",\"cpu_fps_g\":\"0\",\"cpu_status\":\"Yes\",\"cpu_budget_min\":\"0\",\"cpu_budget\":\"0\",\"cpu_msrp\":\"0.00\",\"cpu_price\":\"849.00\",\"cpu_amazon_price\":\"849.00\",\"cpu_newegg_price\":\"0.00\",\"cpu_amazon\":\"B07GFN6CVF\",\"cpu_newegg\":\"N82E16819113542\",\"cpu_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/41PpwEHzHOL._SL160_.jpg\",\"gpu_id\":\"77\",\"gpu_title\":\" GIGABYTE Radeon RX Vega 56 DirectX 12 GV-RXVEGA56-8GD-B 8GB 2048-Bit HBM2 PCI Express 3.0 x16 CrossFireX Support ATX Video Card\",\"gpu_manufacturer\":\"GIGABYTE\",\"gpu_brand\":\"AMD\",\"gpu_generation\":\"Polaris\",\"gpu_class\":\"V56\",\"gpu_clock\":\"1471\",\"gpu_tdp\":\"200\",\"gpu_fl\":\"12.0\",\"gpu_vram\":\"8\",\"gpu_tflops\":\"10.5\",\"gpu_rgb\":\"No\",\"gpu_bench1\":\"0\",\"gpu_bench2\":\"6264\",\"gpu_bench3\":\"0\",\"gpu_bench4\":\"0\",\"gpu_bench5\":\"0\",\"gpu_fps_s\":\"43\",\"gpu_bench1g\":\"37\",\"gpu_bench2g\":\"52\",\"gpu_bench3g\":\"56\",\"gpu_bench4g\":\"0\",\"gpu_bench5g\":\"0\",\"gpu_fps_g\":\"52\",\"gpu_status\":\"Yes\",\"gpu_budget_min\":\"0\",\"gpu_budget\":\"0\",\"gpu_price\":\"785.00\",\"gpu_msrp\":\"0.00\",\"gpu_amazon_price\":\"785.00\",\"gpu_newegg_price\":\"0.00\",\"gpu_amazon\":\"B0756FRL83\",\"gpu_newegg\":\"N82E16814932001\",\"gpu_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/51ZdNVOUbEL._SL160_.jpg\",\"psu_id\":\"18\",\"psu_title\":\"CORSAIR RMx Series RM850X 750W 80 PLUS GOLD Haswell Ready Full Modular ATX12V & EPS12V SLI and Crossfire Ready Power Supply\",\"psu_brand\":\"Corsair\",\"psu_tdp\":\"850\",\"psu_cstate\":\"Yes\",\"psu_status\":\"Yes\",\"psu_budget_min\":\"950\",\"psu_budget\":\"2500\",\"psu_msrp\":\"150.00\",\"psu_price\":\"145.07\",\"psu_amazon_price\":\"145.07\",\"psu_newegg_price\":\"0.00\",\"psu_amazon\":\"B015YEI8JG\",\"psu_newegg\":\"\",\"psu_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/51lMWTIlCwL._SL160_.jpg\",\"mobo_id\":\"80\",\"mobo_title\":\" ASUS PRIME X399-A sTR4 AMD X399 SATA 6Gb\/s USB 3.1 Extended ATX AMD Motherboard\",\"mobo_brand\":\"Asus\",\"mobo_generation\":\"Zen\",\"mobo_platform\":\"X399\",\"mobo_tdp\":\"110\",\"mobo_m2\":\"Yes\",\"mobo_oc\":\"Yes\",\"mobo_rgb\":\"Yes\",\"mobo_score\":\"0.0\",\"mobo_status\":\"Yes\",\"mobo_budget_min\":\"0\",\"mobo_budget\":\"0\",\"mobo_msrp\":\"350.00\",\"mobo_price\":\"299.99\",\"mobo_amazon_price\":\"299.99\",\"mobo_newegg_price\":\"0.00\",\"mobo_amazon\":\"B074HC93RX\",\"mobo_newegg\":\"N82E16813119006\",\"mobo_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/61ShTF016VL._SL160_.jpg\",\"ram_id\":\"36\",\"ram_title\":\"GeIL EVO POTENZA 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 2400\",\"ram_brand\":\"GeIL\",\"ram_type\":\"DDR4\",\"ram_size\":\"16\",\"ram_frequency\":\"2400\",\"ram_cas\":\"16\",\"ram_channel\":\"2\",\"ram_access_time\":\"150\",\"ram_intel\":\"No\",\"ram_amd\":\"Yes\",\"ram_rgb\":\"No\",\"ram_score\":\"66\",\"ram_status\":\"Yes\",\"ram_budget_min\":\"0\",\"ram_budget\":\"900\",\"ram_msrp\":\"0.00\",\"ram_price\":\"77.00\",\"ram_amazon_price\":\"77.00\",\"ram_newegg_price\":\"0.00\",\"ram_amazon\":\"B06XKY9V1Y\",\"ram_newegg\":\"N82E16820158204\",\"ram_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/51nNhIL4evL._SL160_.jpg\",\"ssd_id\":\"21\",\"ssd_title\":\"Samsung 970 PRO 512 GB M.2 SSD\",\"ssd_brand\":\"Samsung\",\"ssd_type\":\"M.2 SSD\",\"ssd_size\":\"1024\",\"ssd_read\":\"3500\",\"ssd_write\":\"2700\",\"ssd_iops\":\"410000\",\"ssd_score\":\"96\",\"ssd_status\":\"Yes\",\"ssd_budget_min\":\"0\",\"ssd_budget\":\"0\",\"ssd_msrp\":\"0.00\",\"ssd_price\":\"159.99\",\"ssd_amazon_price\":\"159.99\",\"ssd_newegg_price\":\"0.00\",\"ssd_amazon\":\"B07C8Y31G2\",\"ssd_newegg\":\"\",\"ssd_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/31wp2RuhUSL._SL160_.jpg\",\"dd_id\":\"19\",\"dd_title\":\" WD Blue 1TB Desktop Hard Disk Drive - 7200 RPM SATA 6Gb\/s 64MB Cache 3.5 Inch - WD10EZEX\",\"dd_brand\":\"Western Digital\",\"dd_type\":\"\",\"dd_size\":\"1024\",\"dd_read\":\"185\",\"dd_write\":\"165\",\"dd_iops\":\"850\",\"dd_score\":\"81\",\"dd_status\":\"Yes\",\"dd_budget_min\":\"0\",\"dd_budget\":\"0\",\"dd_msrp\":\"0.00\",\"dd_price\":\"46.88\",\"dd_amazon_price\":\"46.88\",\"dd_newegg_price\":\"0.00\",\"dd_amazon\":\"B0088PUEPK\",\"dd_newegg\":\"N82E16822236339\",\"dd_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/41M8rguEEvL._SL160_.jpg\",\"cooler_id\":\"2\",\"cooler_title\":\"Noctua NH-D15 6 heatpipe with Dual NF-A15\",\"cooler_brand\":\"Noctua\",\"cooler_type\":\"Air\",\"cooler_size\":\"7\",\"cooler_platform\":\"All\",\"cooler_rgb\":\"No\",\"cooler_score\":\"9\",\"cooler_status\":\"Yes\",\"cooler_budget_min\":\"0\",\"cooler_budget\":\"1700\",\"cooler_msrp\":\"90.00\",\"cooler_price\":\"89.94\",\"cooler_amazon_price\":\"89.94\",\"cooler_newegg_price\":\"0.00\",\"cooler_amazon\":\"B00L7UZMAK\",\"cooler_newegg\":\"9SIAADY44C6006\",\"cooler_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/51ls8fys%2BpL._SL160_.jpg\",\"mobos\":[{\"mobo_id\":\"81\",\"mobo_title\":\" MSI X399 GAMING PRO CARBON AC sTR4 AMD X399 SATA 6Gb\/s USB 3.1 ATX AMD Motherboard\",\"mobo_brand\":\"MSI\",\"mobo_generation\":\"Zen\",\"mobo_platform\":\"X399\",\"mobo_tdp\":\"110\",\"mobo_m2\":\"Yes\",\"mobo_oc\":\"Yes\",\"mobo_rgb\":\"Yes\",\"mobo_score\":\"0.0\",\"mobo_status\":\"Yes\",\"mobo_budget_min\":\"0\",\"mobo_budget\":\"0\",\"mobo_msrp\":\"411.00\",\"mobo_price\":\"305.78\",\"mobo_amazon_price\":\"305.78\",\"mobo_newegg_price\":\"0.00\",\"mobo_amazon\":\"B074DHQR9N\",\"mobo_newegg\":\"N82E16813144079\",\"mobo_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/51NgtW6m7OL._SL160_.jpg\",\"mobo_specs\":\"X399 platform motherboard\"}],\"gpus\":[{\"gpu_id\":\"75\",\"gpu_title\":\"PowerColor Radeon RX Vega 56 DirectX 12 AXRX VEGA 56 Video Card\",\"gpu_manufacturer\":\"PowerColor\",\"gpu_brand\":\"AMD\",\"gpu_generation\":\"Polaris\",\"gpu_class\":\"V56\",\"gpu_clock\":\"1471\",\"gpu_tdp\":\"200\",\"gpu_fl\":\"12.0\",\"gpu_vram\":\"8\",\"gpu_tflops\":\"10.5\",\"gpu_rgb\":\"No\",\"gpu_bench1\":\"0\",\"gpu_bench2\":\"6264\",\"gpu_bench3\":\"0\",\"gpu_bench4\":\"0\",\"gpu_bench5\":\"0\",\"gpu_fps_s\":\"43\",\"gpu_bench1g\":\"37\",\"gpu_bench2g\":\"52\",\"gpu_bench3g\":\"56\",\"gpu_bench4g\":\"0\",\"gpu_bench5g\":\"0\",\"gpu_fps_g\":\"52\",\"gpu_status\":\"Yes\",\"gpu_budget_min\":\"0\",\"gpu_budget\":\"0\",\"gpu_price\":\"775.00\",\"gpu_msrp\":\"0.00\",\"gpu_amazon_price\":\"775.00\",\"gpu_newegg_price\":\"0.00\",\"gpu_amazon\":\"B074TVHVSH\",\"gpu_newegg\":\"N82E16814131730\",\"gpu_img\":\"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/41WyfI89g4L._SL160_.jpg\",\"gpu_specs\":\"1471 MHz Polaris GPU with 8 GB vRAM\"}],\"laptop\":{\"laptop_id\":\"68\",\"laptop_brand\":\"HP\",\"laptop_title\":\"HP Laptop - 17z touch|Black|3.6 GHz AMD Quad Core CPU|1 TB SSHD|8GB DDR4|17.3\\\" HD Display|Windows 10 Home 64\",\"laptop_cpu\":\"AMD\",\"laptop_price\":\"795.00\",\"laptop_size\":\"17.0\",\"laptop_res\":\"HD\",\"laptop_image\":\"https:\/\/images2.productserve.com\/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3Assl-product-images.www8-hp.com%2Fdigmedialib%2Fprodimg%2Flowres%2Fc05975589.png&feedId=25245&k=9210e02eec459fe7056cec01567316c3004252f4\",\"laptop_link\":\"https:\/\/www.awin1.com\/pclick.php?p=22069625577&a=531227&m=7168\",\"laptop_status\":\"Yes\"},\"desktop\":{\"desktop_id\":\"113\",\"desktop_brand\":\"HP\",\"desktop_title\":\"HP OMEN Obelisk Desktop PC - 875-0020RZ|AMD CPU|32 GB DDR4|Windows 10 Pro\",\"desktop_cpu\":\"AMD\",\"desktop_price\":\"1480.00\",\"desktop_image\":\"https:\/\/images2.productserve.com\/noimage.gif\",\"desktop_link\":\"https:\/\/www.awin1.com\/pclick.php?p=22450045663&a=531227&m=7168\",\"desktop_status\":\"Yes\"}}");
			
		if(JSON.stringify(data) == 0) {
			$(".status").html("Sorry, we couldn't generate a build for this configuration.");
		} else {
			show_data(data);
			$('.share-build').show();

			price = $('#price').val().replace('$', '');
			url = 'https://wccftech.com/pc-builder/?purpose=' + $("input[name=purpose]:checked").val() + '&price=' + $("input[name=price]").val().replace('$', '');
			if($("input[name=cpu]:checked").val() != 'Any') url += '&cpu=' + $("input[name=cpu]:checked").val();
			if($("input[name=gpu]:checked").val() != 'Any') url += '&gpu=' + $("input[name=gpu]:checked").val();
			if(price >= 1000 && $("input[name=oc]:checked").val() != null) url += '&oc=' + $("input[name=oc]:checked").val();
			if(price >= 1000 && $("input[name=vr]:checked").val() != null) url += '&vr=' + $("input[name=vr]:checked").val();
			if(price >= 1000 && $("input[name=rgb]:checked").val() != null) url += '&rgb=' + $("input[name=rgb]:checked").val();
			
			$('#build-link').val(url);
			$('#feedback_form_build').val(url);
		}

		if (typeof ga !== 'undefined') { ga('send', 'event', 'Build My PC', 'form', parameters); }
		
		e.preventDefault();
	});
	
	$('.gpus').on('click', '.altgpu', function() {
		
		pimage = $('.gpu .pimage').attr('src');
		title = $('.gpu .title').html();
		specs = $('.gpu .specs').html();
		score = $('.gpu').data('score');
		price = $('.gpu').data('price');
		a_link = btoa($('.gpu .price_a').html());
		n_link = btoa($('.gpu .price_n').html());

		currgpu = '<div class="altgpu clearfix" data-title="' + title + '" data-image="' + pimage + '" data-specs="' + specs + '" data-score="' + score + '"  data-price="' + price + '" data-alink="' + a_link + '" data-nlink="' + n_link + '">' + title + '<span></span></div>';
		
		$('.gpu .pimage').attr('src', $(this).data('image'));
		$('.gpu .title').html($(this).data('title'));
		$('.gpu .specs').html($(this).data('specs'));
		$('.gpu .price_a').html(atob($(this).data('alink')));
		$('.gpu .price_n').html(atob($(this).data('nlink')));
		$('.gpu').data('score', $(this).data('score'));
		$('.gpu').data('price', $(this).data('price'));
		
		$('.build .gpu .price_a, .build .gpu .price_n').removeClass('lowest');
		
		var a_wrap = $('<div />').html( atob($(this).data('alink')) );
		var n_wrap = $('<div />').html( atob($(this).data('nlink')) );

		a_price = parseFloat(a_wrap.text().replace('$', ''));
		n_price = parseFloat(n_wrap.text().replace('$', ''));
		
		a_price = (isNaN(a_price)) ? 0 : a_price;
		n_price = (isNaN(n_price)) ? 0 : n_price;
		
		if(a_price == 0)
			$('.build .gpu .price_n').addClass('lowest');
		else if(n_price == 0)
			$('.build .gpu .price_a').addClass('lowest');
		else
			(a_price < n_price) ? $('.build .gpu .price_a').addClass('lowest') : $('.build .gpu .price_n').addClass('lowest');
		
		update_total();

		$("#ASIN_2").val( $('.gpu .link_gpu').attr('href').replace('https://api.wccftech.com/api/go/amazon/', '') );
		
		$(this).remove();
		
		$('.gpus').append(currgpu);
		
		$('.altgpu').each(function() {
			
			main_price = parseFloat( $('.gpu').data('price') );
			this_price = parseFloat( $(this).data('price') );

			diff = this_price - main_price;
			diff = (diff < 0 ? '-' : '+') + '$' + Math.abs(diff.toFixed(2));
			
			main_score = parseFloat( $('.gpu').data('score') );
			this_score = parseFloat( $(this).data('score') );

			diff_p = this_score - main_score;
			diff_p = (diff_p < 0 ? '-' : '+') + Math.abs(diff_p.toFixed(0)) + '%';
			
			span = '<img src="https://cdn.wccftech.com/builder/performance4.png" alt="performance difference" title="performance difference" width="16"> ' + diff_p + ' &nbsp;&nbsp; <img alt="price difference" title="price difference" src="https://cdn.wccftech.com/builder/price.png" width="16"> ' + diff;
			
			$(this).children('span').html(span);
		});
		
		if (typeof ga !== 'undefined') { ga('send', 'event', 'Build My PC', 'gpu', 'swapped'); }
	});
	
	$('.mobos').on('click', '.altmobo', function() {
		
		pimage = $('.mobo .pimage').attr('src');
		title  = $('.mobo .title').html();
		specs  = $('.mobo .specs').html();
		price  = $('.mobo').data('price');
		a_link = btoa($('.mobo .price_a').html());
		n_link = btoa($('.mobo .price_n').html());

		currmobo = '<div class="altmobo clearfix" data-title="' + title + '" data-image="' + pimage + '" data-specs="' + specs + '" data-price="' + price + '" data-alink="' + a_link + '" data-nlink="' + n_link + '">' + title + '<span></span></div>';
		
		$('.mobo .pimage').attr('src', $(this).data('image'));
		$('.mobo .title').html($(this).data('title'));
		$('.mobo .specs').html($(this).data('specs'));
		$('.mobo .price_a').html(atob($(this).data('alink')));
		$('.mobo .price_n').html(atob($(this).data('nlink')));
		$('.mobo').data('price', $(this).data('price'));
		
		$('.build .mobo .price_a, .build .mobo .price_n').removeClass('lowest');
		
		var a_wrap = $('<div />').html( atob($(this).data('alink')) );
		var n_wrap = $('<div />').html( atob($(this).data('nlink')) );
		
		a_price = parseFloat(a_wrap.text().replace('$', ''));
		n_price = parseFloat(n_wrap.text().replace('$', ''));
		
		a_price = (isNaN(a_price)) ? 0 : a_price;
		n_price = (isNaN(n_price)) ? 0 : n_price;
		
		if(a_price == 0)
			$('.build .mobo .price_n').addClass('lowest');
		else if(n_price == 0)
			$('.build .mobo .price_a').addClass('lowest');
		else
			(a_price < n_price) ? $('.build .mobo .price_a').addClass('lowest') : $('.build .mobo .price_n').addClass('lowest');
		
		update_total();
		
		$("#ASIN_3").val( $('.mobo .link_mobo').attr('href').replace('https://api.wccftech.com/api/go/amazon/', '') );

		$(this).remove();
		
		$('.mobos').append(currmobo);

		$('.altmobo').each(function() {
			
			main_price = parseFloat( $('.mobo').data('price') );
			this_price = parseFloat( $(this).data('price') );

			diff = this_price - main_price;
			diff = (diff < 0 ? '-' : '+') + '$' + Math.abs(diff.toFixed(2));
			
			span = '<img src="https://cdn.wccftech.com/builder/price.png" alt="price difference" title="price difference" width="16"> ' + diff;
			
			$(this).children('span').html(span);
		});

		if (typeof ga !== 'undefined') { ga('send', 'event', 'Build My PC', 'mobo', 'swapped'); }		
	});
	

});

function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function update_total() {

	cpu_price  = parseFloat($('.cpu .lowest').text().replace('$', ''));
	gpu_price  = parseFloat($('.gpu .lowest').text().replace('$', ''));
	mobo_price = parseFloat($('.mobo .lowest').text().replace('$', ''));
	ram_price  = parseFloat($('.ram .lowest').text().replace('$', ''));
	ssd_price  = parseFloat($('.ssd .lowest').text().replace('$', ''));
	dd_price   = parseFloat($('.dd .lowest').text().replace('$', ''));
	psu_price  = parseFloat($('.psu .lowest').text().replace('$', ''));
	cooler_price = parseFloat($('.cooler .lowest').text().replace('$', ''));
					
	total = cpu_price + gpu_price + mobo_price + ram_price + (isNaN(ssd_price) ? 0 : ssd_price) + dd_price + psu_price + (isNaN(cooler_price) ? 0 : cooler_price);
	$('.total .price').html('$' + total.toFixed(2));
	
}

function show_data(data) {
	
	$(".build").show();
	
	$('.price_a, .price_n').removeClass('lowest');
	
	total = parseFloat((data.cpu_price == null ? 0 : data.cpu_price)) + parseFloat((data.gpu_price == null ? 0 : data.gpu_price)) + parseFloat((data.mobo_price == null ? 0 : data.mobo_price)) + parseFloat((data.ram_price == null ? 0 : data.ram_price)) + parseFloat((data.ssd_price == null ? 0 : data.ssd_price)) + parseFloat((data.dd_price == null ? 0 : data.dd_price)) + parseFloat((data.psu_price == null ? 0 : data.psu_price)) + parseFloat((data.cooler_price == null ? 0 : data.cooler_price));
	total_a = parseFloat((data.cpu_amazon_price == null ? 0 : data.cpu_amazon_price)) + parseFloat((data.gpu_amazon_price == null ? 0 : data.gpu_amazon_price)) + parseFloat((data.mobo_amazon_price == null ? 0 : data.mobo_amazon_price)) + parseFloat((data.ram_amazon_price == null ? 0 : data.ram_amazon_price)) + parseFloat((data.ssd_amazon_price == null ? 0 : data.ssd_amazon_price)) + parseFloat((data.dd_amazon_price == null ? 0 : data.dd_amazon_price)) + parseFloat((data.psu_amazon_price == null ? 0 : data.psu_amazon_price)) + parseFloat((data.cooler_amazon_price == null ? 0 : data.cooler_amazon_price));
	total_n = parseFloat((data.cpu_newegg_price == null ? 0 : data.cpu_newegg_price)) + parseFloat((data.gpu_newegg_price == null ? 0 : data.gpu_newegg_price)) + parseFloat((data.mobo_newegg_price == null ? 0 : data.mobo_newegg_price)) + parseFloat((data.ram_newegg_price == null ? 0 : data.ram_newegg_price)) + parseFloat((data.ssd_newegg_price == null ? 0 : data.ssd_newegg_price)) + parseFloat((data.dd_newegg_price == null ? 0 : data.dd_newegg_price)) + parseFloat((data.psu_newegg_price == null ? 0 : data.psu_newegg_price)) + parseFloat((data.cooler_newegg_price == null ? 0 : data.cooler_newegg_price));
	
	$('#form_add_to_cart input[type="hidden"]').remove();
	$('#form_add_to_cart').append('<input type="hidden" id="AssociateTag" name="AssociateTag" value="wccftech0a9-20" />');

	if(data.desktop) {
		
		$('.build .desktop .pimage').attr('src', data.desktop.desktop_image);
		$('.build .desktop .title').html('<a target="_blank" class="link_desktop" rel="nofollow" href="'+ data.desktop.desktop_link +'">' + data.desktop.desktop_title + '</a>');
		$('.build .desktop .price_a').html('<a target="_blank" class="link_desktop" rel="nofollow" href="'+ data.desktop.desktop_link +'">$' + data.desktop.desktop_price + '</a>');
		
		$('.build .desktop .price_a').addClass('lowest');
		$('.build .desktop').show();		
	}

	if(data.laptop) {
		
		$('.build .laptop .pimage').attr('src', data.laptop.laptop_image);
		$('.build .laptop .title').html('<a target="_blank" class="link_laptop" rel="nofollow" href="'+ data.laptop.laptop_link +'">' + data.laptop.laptop_title + '</a>');
		$('.build .laptop .price_a').html('<a target="_blank" class="link_laptop" rel="nofollow" href="'+ data.laptop.laptop_link +'">$' + data.laptop.laptop_price + '</a>');
		
		$('.build .laptop .price_a').addClass('lowest');
		$('.build .laptop').show();		
	}

	if(data.cpu_title) {

		specs = data.cpu_clock + ' GHz ' + data.cpu_brand + ' CPU';
		if(data.cpu_oc == 'Yes') specs += ' with overclocking support';
		if(data.cpu_cooler == 'Yes') specs += ' and built-in cooler';

		$('.build .cpu .pimage').attr('src', data.cpu_img);
		$('.build .cpu .title').html(data.cpu_title);
		$('.build .cpu .specs').html(specs);
		
		if(data.cpu_amazon_price > 0) $('.build .cpu .price_a').html('<a target="_blank" class="link_cpu" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ data.cpu_amazon +'">$' + data.cpu_amazon_price + '</a>'); else $('.build .cpu .price_a').html('n/a');
		if(data.cpu_newegg_price > 0) $('.build .cpu .price_n').html('<a target="_blank" class="link_cpu" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ data.cpu_newegg +'">$' + data.cpu_newegg_price + '</a>'); else $('.build .cpu .price_n').html('n/a');
		
		if(data.cpu_amazon_price == 0)
			$('.build .cpu .price_n').addClass('lowest');
		else if(data.cpu_newegg_price == 0)
			$('.build .cpu .price_a').addClass('lowest');
		else
			(parseFloat(data.cpu_amazon_price) < parseFloat(data.cpu_newegg_price)) ? $('.build .cpu .price_a').addClass('lowest') : $('.build .cpu .price_n').addClass('lowest');
		
		$('.build .cpu').show();

		
		$('#form_add_to_cart').append('<input type="hidden" id="ASIN.1" name="ASIN.1" value="' + data.cpu_amazon + '" />');
		$('#form_add_to_cart').append('<input type="hidden" id="Quantity.1" name="Quantity.1" value="1" />');
	}

	if(data.gpu_title) {

		specs = data.gpu_clock + ' MHz ' + data.gpu_generation + ' GPU with ' + data.gpu_vram + ' GB vRAM';
		if(data.gpu_rgb == 'Yes') specs += ' and RGB support';

		$('.build .gpu').data('score', data.gpu_fps_g);
		$('.build .gpu').data('price', data.gpu_price);
		$('.build .gpu .pimage').attr('src', data.gpu_img);
		$('.build .gpu .title').html(data.gpu_title);
		$('.build .gpu .specs').html(specs);

		if(data.gpu_amazon_price > 0) $('.build .gpu .price_a').html('<a target="_blank" class="link_gpu" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ data.gpu_amazon +'">$' + data.gpu_amazon_price + '</a>'); else $('.build .gpu .price_a').html('n/a');
		if(data.gpu_newegg_price > 0) $('.build .gpu .price_n').html('<a target="_blank" class="link_gpu" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ data.gpu_newegg +'">$' + data.gpu_newegg_price + '</a>'); else $('.build .gpu .price_n').html('n/a');

		if(data.gpu_amazon_price == 0)
			$('.build .gpu .price_n').addClass('lowest');
		else if(data.gpu_newegg_price == 0)
			$('.build .gpu .price_a').addClass('lowest');
		else
			(parseFloat(data.gpu_amazon_price) < parseFloat(data.gpu_newegg_price)) ? $('.build .gpu .price_a').addClass('lowest') : $('.build .gpu .price_n').addClass('lowest');
		
		gpus = '';
		
		if(data.gpus) {
			
			$.each( data.gpus, function( key, item ) {
				
				if(item.gpu_amazon_price > 0) a_link = btoa('<a target="_blank" class="link_gpu" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ item.gpu_amazon +'">$' + item.gpu_amazon_price + '</a>'); else a_link = btoa('n/a');
				if(item.gpu_newegg_price > 0) n_link = btoa('<a target="_blank" class="link_gpu" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ item.gpu_newegg +'">$' + item.gpu_newegg_price + '</a>'); else n_link = btoa('n/a');
				
				diff = item.gpu_price - data.gpu_price;
				diff = (diff < 0 ? '-' : '+') + '$' + Math.abs(diff.toFixed(2));
				
				diff_p = item.gpu_fps_g - data.gpu_fps_g;
				diff_p = (diff < 0 ? '-' : '+') + Math.abs(diff_p.toFixed(2)) + '%';
				
				gpus  += '<div class="altgpu clearfix" data-title="' + item.gpu_title + '" data-image="' + item.gpu_img + '" data-specs="' + item.gpu_specs + '" data-score="' + item.gpu_fps_g + '" data-price="' + item.gpu_price + '" data-alink="'+a_link+'" data-nlink="'+n_link+'">' + item.gpu_title + '<span><img alt="performance difference" title="performance difference" src="https://cdn.wccftech.com/builder/performance4.png" width="16"> '+diff_p+' &nbsp;&nbsp; <img alt="price difference" title="price difference" src="https://cdn.wccftech.com/builder/price.png" width="16"> ' + diff + '</span></div>';
			});
			
			$('.gpus').html(gpus);
		}

		$('#form_add_to_cart').append('<input type="hidden" id="ASIN_2" name="ASIN.2" value="' + data.gpu_amazon + '" />');
		$('#form_add_to_cart').append('<input type="hidden" id="Quantity_2" name="Quantity.2" value="1" />');

		$('.build .gpu').show();
	}

	if(data.mobo_title) {

		specs = data.mobo_platform + ' platform motherboard';
		if(data.mobo_oc == 'Yes' && data.mobo_rgb == 'Yes') specs += ' with overclocking and RGB support';
		if(data.mobo_oc == 'Yes' && data.mobo_rgb == 'No') specs += ' with overclocking support';
		if(data.mobo_oc == 'No' && data.mobo_rgb == 'Yes') specs += ' with RGB support';

		$('.build .mobo').data('price', data.mobo_price);
		$('.build .mobo .pimage').attr('src', data.mobo_img);
		$('.build .mobo .title').html(data.mobo_title);
		$('.build .mobo .specs').html(specs);

		if(data.mobo_amazon_price > 0) $('.build .mobo .price_a').html('<a target="_blank" class="link_mobo" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ data.mobo_amazon +'">$' + data.mobo_amazon_price + '</a>'); else $('.build .mobo .price_a').html('n/a');
		if(data.mobo_newegg_price > 0) $('.build .mobo .price_n').html('<a target="_blank" class="link_mobo" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ data.mobo_newegg +'">$' + data.mobo_newegg_price + '</a>'); else $('.build .mobo .price_n').html('n/a');

		if(data.mobo_amazon_price == 0)
			$('.build .mobo .price_n').addClass('lowest')
		else if(data.mobo_newegg_price == 0)
			$('.build .mobo .price_a').addClass('lowest')
		else
			(parseFloat(data.mobo_amazon_price) < parseFloat(data.mobo_newegg_price)) ? $('.build .mobo .price_a').addClass('lowest') : $('.build .mobo .price_n').addClass('lowest');
		
		mobos = '';
		
		if(data.mobos) {
			
			$.each( data.mobos, function( key, item ) {
				
				if(item.mobo_amazon_price > 0) a_link = btoa('<a target="_blank" class="link_mobo" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ item.mobo_amazon +'">$' + item.mobo_amazon_price + '</a>'); else a_link = btoa('n/a');
				if(item.mobo_newegg_price > 0) n_link = btoa('<a target="_blank" class="link_mobo" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ item.mobo_newegg +'">$' + item.mobo_newegg_price + '</a>'); else n_link = btoa('n/a');
				
				diff = item.mobo_price - data.mobo_price;
				diff = (diff < 0 ? '-' : '+') + '$' + Math.abs(diff.toFixed(2));
				
				mobos  += '<div class="altmobo clearfix" data-title="' + item.mobo_title + '" data-image="' + item.mobo_img + '" data-specs="' + item.mobo_specs + '" data-price="' + item.mobo_price + '" data-alink="'+a_link+'" data-nlink="'+n_link+'">' + item.mobo_title + ' <span><img alt="price difference" title="price difference" src="https://cdn.wccftech.com/builder/price.png" width="16"> ' + diff + '</span></div>';
			});
			
			$('.mobos').html(mobos);
		}
		
		$('#form_add_to_cart').append('<input type="hidden" id="ASIN_3" name="ASIN.3" value="' + data.mobo_amazon + '" />');
		$('#form_add_to_cart').append('<input type="hidden" id="Quantity_3" name="Quantity.3" value="1" />');

		$('.build .mobo').show();
	}

	if(data.ram_title) {

		specs = data.ram_size + ' GB '  + data.ram_frequency + ' MHz RAM';
		if(data.ram_rgb == 'Yes') specs += ' with RGB support';

		$('.build .ram .pimage').attr('src', data.ram_img);
		$('.build .ram .title').html(data.ram_title);
		$('.build .ram .specs').html(specs);

		if(data.ram_amazon_price > 0) $('.build .ram .price_a').html('<a target="_blank" class="link_ram" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ data.ram_amazon +'">$' + data.ram_amazon_price + '</a>'); else $('.build .ram .price_a').html('n/a');
		if(data.ram_newegg_price > 0) $('.build .ram .price_n').html('<a target="_blank" class="link_ram" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ data.ram_newegg +'">$' + data.ram_newegg_price + '</a>'); else $('.build .ram .price_n').html('n/a');

		if(data.ram_amazon_price == 0)
			$('.build .ram .price_n').addClass('lowest')
		else if(data.ram_newegg_price == 0)
			$('.build .ram .price_a').addClass('lowest')
		else
			(parseFloat(data.ram_amazon_price) < parseFloat(data.ram_newegg_price)) ? $('.build .ram .price_a').addClass('lowest') : $('.build .ram .price_n').addClass('lowest');
		
		$('#form_add_to_cart').append('<input type="hidden" id="ASIN.4" name="ASIN.4" value="' + data.ram_amazon + '" />');
		$('#form_add_to_cart').append('<input type="hidden" id="Quantity.4" name="Quantity.4" value="1" />');

		$('.build .ram').show();
	}

	if(data.ssd_title) {

		specs = data.ssd_size + ' GB ' + data.ssd_type + ' with sequential read write speeds up to ' + data.ssd_read + '/' + data.ssd_write + ' MB/s';

		$('.build .ssd .pimage').attr('src', data.ssd_img);
		$('.build .ssd .title').html(data.ssd_title);
		$('.build .ssd .specs').html(specs);
		
		if(data.ssd_amazon_price > 0) $('.build .ssd .price_a').html('<a target="_blank" class="link_ssd" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ data.ssd_amazon +'">$' + data.ssd_amazon_price + '</a>'); else $('.build .ssd .price_a').html('n/a');
		if(data.ssd_newegg_price > 0) $('.build .ssd .price_n').html('<a target="_blank" class="link_ssd" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ data.ssd_newegg +'">$' + data.ssd_newegg_price + '</a>'); else $('.build .ssd .price_n').html('n/a');
		
		if(data.ssd_amazon_price == 0)
			$('.build .ssd .price_n').addClass('lowest');
		else if(data.ssd_newegg_price == 0)
			$('.build .ssd .price_a').addClass('lowest');
		else
			(parseFloat(data.ssd_amazon_price) < parseFloat(data.ssd_newegg_price)) ? $('.build .ssd .price_a').addClass('lowest') : $('.build .ssd .price_n').addClass('lowest');
		
		$('#form_add_to_cart').append('<input type="hidden" id="ASIN.5" name="ASIN.5" value="' + data.ssd_amazon + '" />');
		$('#form_add_to_cart').append('<input type="hidden" id="Quantity.5" name="Quantity.5" value="1" />');

		$('.build .ssd').show();
	}

	if(data.dd_title) {
		specs = data.dd_size + ' GB HDD with sequential read write speeds up to ' + data.dd_read + '/' + data.dd_write + ' MB/s';

		$('.build .dd .pimage').attr('src', data.dd_img);
		$('.build .dd .title').html(data.dd_title);
		$('.build .dd .specs').html(specs);

		if(data.dd_amazon_price > 0) $('.build .dd .price_a').html('<a target="_blank" class="link_dd" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ data.dd_amazon +'">$' + data.dd_amazon_price + '</a>'); else $('.build .dd .price_a').html('n/a');
		if(data.dd_newegg_price > 0) $('.build .dd .price_n').html('<a target="_blank" class="link_dd" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ data.dd_newegg +'">$' + data.dd_newegg_price + '</a>'); else $('.build .dd .price_n').html('n/a');

		if(data.dd_amazon_price == 0)
			$('.build .dd .price_n').addClass('lowest');
		else if(data.dd_newegg_price == 0)
			$('.build .dd .price_a').addClass('lowest');
		else
			(parseFloat(data.dd_amazon_price) < parseFloat(data.dd_newegg_price)) ? $('.build .dd .price_a').addClass('lowest') : $('.build .dd .price_n').addClass('lowest');
		
		$('#form_add_to_cart').append('<input type="hidden" id="ASIN.6" name="ASIN.6" value="' + data.dd_amazon + '" />');
		$('#form_add_to_cart').append('<input type="hidden" id="Quantity.6" name="Quantity.6" value="1" />');

		$('.build .dd').show();
	}

	if(data.psu_title) {

		specs = data.psu_tdp + ' W';
		if(data.psu_cstate == 'Yes') specs += ' PSU that is C-Ready';

		$('.build .psu .pimage').attr('src', data.psu_img);
		$('.build .psu .title').html(data.psu_title);
		$('.build .psu .specs').html(specs);

		if(data.psu_amazon_price > 0) $('.build .psu .price_a').html('<a target="_blank" class="link_psu" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ data.psu_amazon +'">$' + data.psu_amazon_price + '</a>'); else $('.build .psu .price_a').html('n/a');
		if(data.psu_newegg_price > 0) $('.build .psu .price_n').html('<a target="_blank" class="link_psu" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ data.psu_newegg +'">$' + data.psu_newegg_price + '</a>'); else $('.build .psu .price_n').html('n/a');

		if(data.psu_amazon_price == 0)
			$('.build .psu .price_n').addClass('lowest');
		else if(data.psu_newegg_price == 0)
			$('.build .psu .price_a').addClass('lowest');
		else
			(parseFloat(data.psu_amazon_price) < parseFloat(data.psu_newegg_price)) ? $('.build .psu .price_a').addClass('lowest') : $('.build .psu .price_n').addClass('lowest');
		
		$('#form_add_to_cart').append('<input type="hidden" id="ASIN.7" name="ASIN.7" value="' + data.psu_amazon + '" />');
		$('#form_add_to_cart').append('<input type="hidden" id="Quantity.7" name="Quantity.7" value="1" />');

		$('.build .psu').show();
	}

	if(data.cooler_title) {
		
		specs = 'Size ' + data.cooler_size;
		if(data.cooler_type == 'AIO') specs += ' water-cooled cooler'; else specs += ' air-cooled cooler'; 
		if(data.cooler_rgb == 'Yes') specs += ' with RGB support';

		$('.build .cooler .pimage').attr('src', data.cooler_img);
		$('.build .cooler .title').html(data.cooler_title);
		$('.build .cooler .specs').html(specs);

		if(data.cooler_amazon_price > 0) $('.build .cooler .price_a').html('<a target="_blank" class="link_cooler" rel="nofollow" href="https://api.wccftech.com/api/go/amazon/'+ data.cooler_amazon +'">$' + data.cooler_amazon_price + '</a>'); else $('.build .cooler .price_a').html('n/a');
		if(data.cooler_newegg_price > 0) $('.build .cooler .price_n').html('<a target="_blank" class="link_cooler" rel="nofollow" href="https://api.wccftech.com/api/go/newegg/'+ data.cooler_newegg +'">$' + data.cooler_newegg_price + '</a>'); else $('.build .cooler .price_n').html('n/a');

		if(data.cooler_amazon_price == 0)
			$('.build .cooler .price_n').addClass('lowest');
		else if(data.cooler_newegg_price == 0)
			$('.build .cooler .price_a').addClass('lowest');
		else
			(parseFloat(data.cooler_amazon_price) < parseFloat(data.cooler_newegg_price)) ? $('.build .cooler .price_a').addClass('lowest') : $('.build .cooler .price_n').addClass('lowest');
		
		$('#form_add_to_cart').append('<input type="hidden" id="ASIN.8" name="ASIN.8" value="' + data.cooler_amazon + '" />');
		$('#form_add_to_cart').append('<input type="hidden" id="Quantity.8" name="Quantity.8" value="1" />');

		$('.build .cooler').show();
	}
	
	//$('.build .total_an .price_a').html('$' + total_a.toFixed(2));
	//$('.build .total_an .price_n').html('$' + total_n.toFixed(2));
	$('.build .total .price').html('$' + total.toFixed(2));
}