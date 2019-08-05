$(function(){
	$('#lastDropdownBox').mouseenter(function(){
		$('.dropdownBox').show();
	});
	
	$('#lastDropdownBox').mouseleave(function(){
		$('.dropdownBox').hide();
	});
	
	$('#look').focus(function(){
		$("#lookBox").css('border-color','orange');
	})
	$('#look').blur(function(){
		$("#lookBox").css('border-color','#e7e7e7');
	})
	
	$('.slideLi').each(function(){
		$(this).mouseenter(function(){
			$('.slidePop').show();
		})
		$('.slidePop').mouseenter(function(){
			$('.slidePop').show();
		})
		$('.slidePop').mouseleave(function(){
			$('.slidePop').hide();
		})
		$(this).mouseleave(function(){
			$('.slidePop').hide();
		})
	})
	
	
})


