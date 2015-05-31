console.log('\'Allo \'Allo!');

$(document).ready(function(){
	'use strict';
	// Show clicked panel hide all others
	$('.tab-panels .tabs li').on('click', function() {
		var $thisPanel = $(this).closest('.tab-panels');
		$thisPanel.find('.tabs li.on').removeClass('on');
		$(this).addClass('on');
		var panelShow = $(this).attr('rel');
		
		function showNextPanel(){
			$(this).removeClass('on');
			$('#'+panelShow).slideDown(300, function(){
				$(this).addClass('on');
			});
		}

		$thisPanel.find('.panel.on').slideUp(300, showNextPanel);
	});
});