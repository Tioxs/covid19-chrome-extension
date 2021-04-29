//var url = "https://covid19.saglik.gov.tr/";
//var source = file_get_contents($url);
$(document).ready(function() {
	$.ajax({
		cache: false,
		url: 'https://covid19.saglik.gov.tr/',
		type: 'GET',
		mode: 'no-cors',
		success: function(response) {
			var resp = response.split('var sondurumjson = ')[1].split(';//]]>')[0].replace(/( +|\[|\])/g, "").replace();
			var data = JSON.parse(resp);
			$('#tarih').html(data.tarih);
			$('#gunluk_test').html(data.gunluk_test);
			$('#gunluk_vaka').html(data.gunluk_vaka);
			$('#gunluk_hasta').html(data.gunluk_hasta);
			$('#gunluk_iyilesen').html(data.gunluk_iyilesen);
			$('#toplam_test').html(data.toplam_test);
			$('#toplam_hasta').html(data.toplam_hasta);
			$('#toplam_vefat').html(data.toplam_vefat);
			$('#toplam_iyilesen').html(data.toplam_iyilesen);
		}
	});
});