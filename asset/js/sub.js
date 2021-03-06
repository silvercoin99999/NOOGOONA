// * -------------------------------
// * airDatePicker
// * -------------------------------
function airDatePicker() {
  if ($(".air-datepicker").length) {
    $(".air-datepicker").attr("readonly", "readonly").datepicker({
      autoClose: true,
      language: "ko",
    });
    $(".air-datepicker").each(function () {
      if ($(this).val() !== "") {
        $(this)
          .data("datepicker")
          .selectDate(new Date($(this).val()));
      }
    });
  }
}
$(document).ready(function () {
  airDatePicker();
});

// * -------------------------------
// * all-check-btn(checkbox)
// * -------------------------------
$(document).on("change", "input[type=checkbox].all-check-btn", function () {
  var check_match = $(this).data("checkMatch");

  if ($(this).is(":checked")) {
    $("input[type=checkbox]").each(function () {
      if ($(this).data("checkMatch") == check_match) {
        $(this).prop("checked", true);
      }
    });
  } else {
    $("input[type=checkbox]").each(function () {
      if ($(this).data("checkMatch") == check_match) {
        $(this).prop("checked", false);
      }
    });
  }
});

$(document).on(
  "change",
  'input[type=checkbox]:not(".all-check-btn")',
  function () {
    var check_match = $(this).data("checkMatch");
    var ctn = 0;

    $('input[type=checkbox]:not(".all-check-btn")').each(function () {
      if ($(this).data("checkMatch") == check_match) {
        if (!$(this).is(":checked")) {
          ctn++;
        }
      }
    });

    $("input[type=checkbox].all-check-btn").each(function () {
      if ($(this).data("checkMatch") == check_match) {
        ctn > 0
          ? $(this).prop("checked", false)
          : $(this).prop("checked", true);
      }
    });
  }
);

// * -------------------------------
// * show-match-btn
// * -------------------------------
$(document).on("click", ".show-match-btn", function () {
  var toggle_match = $(this).data("toggleMatch");

  $(".toggle-match-con").each(function () {
    if ($(this).data("toggleMatch") == toggle_match) {
      $(this).show();
    }
  });
});

// * -------------------------------
// * hide-match-btn
// * -------------------------------
$(document).on("click", ".hide-match-btn", function () {
  var toggle_match = $(this).data("toggleMatch");

  $(".toggle-match-con").each(function () {
    if ($(this).data("toggleMatch") == toggle_match) {
      $(this).hide();
    }
  });
});


// * -------------------------------
// * user-util-wrap
// * -------------------------------
$(document).click(function(e){
	var $e_more_opt_wrap = $(e.target).closest('.user-util-wrap');

	// user-util??? ????????????
	if( !$('.user-util').is(':visible') ){
		$('.user-util').hide();
		$('.user-util-wrap').removeClass('active');
		$e_more_opt_wrap.find('.user-util').show();
		$e_more_opt_wrap.addClass('active');
	
	// user-util??? ?????????
	} else {
		if( !$e_more_opt_wrap.length ){
			$e_more_opt_wrap.removeClass('active');
			$('.user-util').hide();
		}

		// user-util-btn ????????????
		if( $(e.target).closest('.user-util-btn').length ){

			// user-util??? ???????????? ??????
			if( $e_more_opt_wrap.find('.user-util').is(':visible') ){
				$e_more_opt_wrap.removeClass('active');
				$e_more_opt_wrap.find('.user-util').hide();
				
			// user-util??? ???????????? ??????
			} else {
				$('.user-util').hide();
				$('.user-util-wrap').removeClass('active');
				$e_more_opt_wrap.addClass('active');
				$e_more_opt_wrap.find('.user-util').show();
			}

		// ??? ??? ????????????
		} else {
			$('.user-util').hide();
			$('.user-util-wrap').removeClass('active');
		}
	}
});


// * -------------------------------
// * detail-head (fixed)
// * -------------------------------
$(window).scroll(function(){ 
  if( $('.detail-head').length ){
    var scroll_top = $(document).scrollTop();
    (scroll_top > 100)
    ? $('.detail-head').addClass('fixed')
    : $('.detail-head').removeClass('fixed');
  }
});


// * -------------------------------
// * faq
// * -------------------------------
$(document).on('click', '.q-btn', function(){
  $(this).closest('li').toggleClass('active');
});


// * -------------------------------
// * mngr
// * -------------------------------
// * mngr-menu
// * -------------------------------
$(document).on('click', '.mngr-menu button', function(){
  $(this).closest('.mngr-menu').toggleClass('active');
});


// * -------------------------------
// * layerPopupOpen
// * -------------------------------
function layerPopupOpen(t){
  var dataLayer = $(t).data('layer');
  
  $('.layer-popup').each(function() {
    if( $(this).data('layer') == dataLayer ) {
      $(this).closest('.dimmed-layer').show();
    }
  });
}


// * -------------------------------
// * layerPopupClose
// * -------------------------------
function layerPopupClose(t){
  $(t).closest('.dimmed-layer').hide();
}