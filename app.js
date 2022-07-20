// var g = G$('John', 'Doe', "en");
// g.setLanguage('es').log();

$('#login').on("click", function () {
    
    var loginGr = G$('John', 'Doe', "en");
    $('#logindiv').hide();
    loginGr.setLanguage($('#lang').val()).HtmlGreeting('#greeting', false).log();
})