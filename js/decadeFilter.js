function filterGenre() {
    var gen = $('#genres').find(":selected").attr("value");
    return gen;
    };

function filterDecade() {
    var dec = $('#decades').find(":selected").attr("value");
    return dec;
    };

function parseStyle(value) {
        
    $("#filter").val(value);
    $("#filter").trigger("keyup");
    return false;
    };   