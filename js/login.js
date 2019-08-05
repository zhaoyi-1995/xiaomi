$(function(){
	$('.erCode').mouseenter(function(){
		$(this).css('opacity','1');
	});
	
	$('.erCode').mouseleave(function(){
		$(this).css('opacity','0.3');
	})
	
	$('.erCode').click(function(){
		$('.erCodeBox').show();
	})
	$('.closeBox').click(function(){
		$('.erCodeBox').hide();
	})
})