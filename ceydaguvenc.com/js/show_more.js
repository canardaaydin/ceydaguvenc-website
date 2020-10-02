jQuery(document).ready(function($) {
	//you can now use $ as your jQuery object.
	var showing_more = false;

	$('#anasayfa-devamini-oku').click(function() {
		if (!showing_more) {
			text_short_version = $('#calisma-alanlari').html();

			var arr = [
				'Uyku Bozuklukları',
				'Öfke Kontrol Bozukluğu',
				'İnternet Oyun ve Pornografi Bağımlılığı',
				'Ağrı Bozuklukları',
				'Gebelik ve Lohusalık Dönemi Ruhsal Sıkıntıları',
				'Alkol Kullanım Bozuklukları',
				'Sertleşme Bozukluğu',
				'Erken Boşalma',
				'Sosyal Kaygı Bozukluğu',
				'Yaygın Kaygı Bozukluğu',
				'Kumar Bağımlılığı',
				'Yaşlılarda Ruh Sağlığı ve Bozuklukları'
			];

			var c = 0;
			arr.forEach((element) => {
				if (c % 2 == 0) {
					$('#calisma-alanlari').append(
						'<div class="column-1_2 col_right"> <div class="sc_services_item sc_services_item_1 odd first"> <a href="#"> <span class="sc_icon icon-check71"></span> <span class="sc_services_item_title">' +
							element +
							'</span> </a> </div></div>'
					);
				} else {
					$('#calisma-alanlari').append(
						'<div class="column-1_2 col_left"> <div class="sc_services_item sc_services_item_1 odd first"> <a href="#"> <span class="sc_icon icon-check71"></span> <span class="sc_services_item_title">' +
							element +
							'</span> </a> </div></div>'
					);
				}
				c += 1;
			});

			$('#anasayfa-devamini-oku').html('Daha Az Göster');
			showing_more = true;
		} else {
			$('#calisma-alanlari').html(text_short_version);
			showing_more = false;
			$('#anasayfa-devamini-oku').html('Devamını Oku');
		}
	});
});
