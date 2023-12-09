var name = filterGenre();

function filterGenre() {
    var gen = $('#genres').find(":selected").attr("value");

    $("#filter").val(gen);
    $("#filter").trigger("keyup");
    return false;
    };
    
var name = filterDecade();

function filterDecade() {
    var dec = $('#decades').find(":selected").attr("value");

    $("#filter").val(dec);
    $("#filter").trigger("keyup");
    return false;
    };
    
var name = parseStyle(value);

function parseStyle(value) {
    count = 0;

  $('#result-text div').each(function() {

    if ($(this).text().search(new RegExp(value, "i")) < 0 ) {
      $(this).hide();

    } else {
      $(this).show();
      count++;
    }
  });
}
