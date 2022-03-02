var name = filterDecade();

function filterDecade() {
    var dec = $('#decades').find(":selected").attr("value");
    count = 0;

    $('#result-text div').each(function() {

    if ($(this).text().search(new RegExp(dec, "i")) < 0) {
      $(this).hide();

    } else {
      $(this).show();
      count++;
    }
    });

  }
