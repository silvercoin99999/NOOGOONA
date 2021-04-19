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
