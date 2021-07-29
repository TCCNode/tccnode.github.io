$(document).ready(function() {
	$("#gototop").hide();
	$("#gotg").hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$("#gototop").fadeIn(1500);
			$("#gotg").fadeIn(1500);
		}else {
			$("#gototop").fadeOut(1000);
			$("#gotg").fadeOut(1000);
		}
	});
	$("#gototop").click(function () {
		$('body,html').animate({ scrollTop: 0 }, 1000);
		return false;
	});
	
	$(".goProjectHighlights").click(function () {
		$('body,html').animate({ scrollTop: $("#ProjectHighlights").offset().top }, 1000);
		return false;
	});
	$(".goEcologicalPlanning").click(function () {
		$('body,html').animate({ scrollTop: $("#EcologicalPlanning").offset().top }, 1000);
		return false;
	});
	$(".goRewardDistribution").click(function () {
		$('body,html').animate({ scrollTop: $("#RewardDistribution").offset().top }, 1000);
		return false;
	});
	$(".goFinancialLicense").click(function () {
		$('body,html').animate({ scrollTop: $("#FinancialLicense").offset().top }, 1000);
		return false;
	});
	$(".goFQA").click(function () {
		$('body,html').animate({ scrollTop: $("#FQA").offset().top }, 1000);
		return false;
	});
	$(".ff1").click(function () {
		$('#FF2').hide();
		$('#FF1').show();
	});
	$(".ff2").click(function () {
		$('#FF1').hide();
		$('#FF2').show();
	});
});

$(window).scroll(function() {
	if($(window).width() < 768) {
		$(".hidecc a").click(function() {
			$(".hidecc").collapse('show');
		});
		$(window).scroll(function() {
			$(".hidecc").collapse('hide');
		});
	}
});