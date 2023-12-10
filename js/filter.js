$("#filter").keyup(function() {

  var filter = $(this).val();
  var dec = filterDecade();
    count = 0;

  $('#result-text div').each(function() {

    if ($(this).text().search(new RegExp(filter, "i")) > -1 && $(this).text().search(new RegExp(dec, "i")) > -1 ) {
      $(this).show();
      count++;
    } else {
      $(this).hide();
    }
  });
});
