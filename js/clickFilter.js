$(".addfilter").click(function() {
  var filter = $(this).data("filter");
  $("#result-text div").val(filter);
  $("#result-text div").trigger("keyup");
  return false;
});