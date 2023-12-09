$("#filter").keyup(function() {

  var filter = $(this).val();
  var gen = filterGenre();
  var dec = filterDecade();
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
