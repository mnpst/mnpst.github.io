var name = filterGenre();

function filterGenre() {
    var gen = $('#genres').find(":selected").attr("value");
    count = 0;

    $('#result-text div').each(function() {

    if ($(this).text().search(new RegExp(gen, "i")) < 0) {
      $(this).hide();

    } else {
      $(this).show();
      count++;
    }
    });

  }
