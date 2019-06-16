$('form').submit((e) => {
    e.preventDefault();
    $('.status').attr('status', 'passed');

    if ($('.status').attr('status') == 'passed') {
    	$('.status').css('display','none');
    	$('.statusok').fadeIn().css('display','block');
    	$('.obrigado-aviso').slideDown().css('display','block');
    	$('.termos').slideDown().css('display','block');
    	$('footer').css('top','1150px');
    }
});

$('input').focus(function() {
	$(this).css('margin-top','-9px');
	$(this).siblings().slideDown().css('display','inline-block');

})