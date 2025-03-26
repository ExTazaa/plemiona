$(".item_container").on('click', function(){
var ilo = '1';
if ($('.name').is(':empty'))
{
}else{
	setTimeout(function(){
	var nameitem = $('.name').text();
	$('.line3').remove();
	procentitem = nameitem.match(/\((\d+)\%\)/);
	var procentitem = procentitem[0].replace('(','')
	var procentitem = procentitem.replace('%)','')
	prcmaterial = ( (parseInt(game_data.village.storage_max) * parseInt(procentitem)) / 100 );
	var iloc = $('.active').find('.count').text();
	var ilo = ($('.active').find('.count').text() > 1) ? iloc : 1
	$('.line2').after('<span class="line line3">Jeden pakiet doda do spichlerza w tej wiosce po <b>' + Math.round(prcmaterial) + '</b> każdego surowca<br>Wszystkie pakiety dodadzą: <b> ' + (Math.round(prcmaterial))*ilo + '</b> każdego surowca</span>');
	}, 200);
}
});
