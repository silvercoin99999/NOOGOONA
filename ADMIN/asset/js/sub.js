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