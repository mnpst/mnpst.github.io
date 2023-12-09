$("#filter").keyup(function() {

  var filter = $(this).val();
  var gen = $('#genres').find(":selected").attr("value");
  var dec = $('#decades').find(":selected").attr("value");
    count = 0;

  $('#result-text div').each(function() {

    if ($(this).text().search(new RegExp(filter, "i")) < 0 || $(this).text().search(new RegExp(gen, "i")) < 0 || $(this).text().search(new RegExp(dec, "i")) < 0 ) {
      $(this).hide();

    } else {
      $(this).show();
      count++;
    }
  });
});

$(".addfilter").click(function() {
  var filter = $(this).data("filter");
  $("#filter").val(filter);
  $("#filter").trigger("keyup");
  return false;
});
