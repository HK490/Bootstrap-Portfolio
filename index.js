$(document).ready(function () {


    

    $("#home").click(function () {
        $( "#first").hide();
        $("#first").fadeIn(2000);
        $('html,body').animate({
            scrollTop: $("#first").offset().top
        });
    });

    $("#port").click(function () {
        $( "#second").hide();
        $("#second").fadeIn(2000);
        $('html,body').animate({
            scrollTop: $("#second").offset().top
        });
        
    });

    $("#cont").click(function () {
        $( "#third").hide();
        $("#third").fadeIn(2000);
        $('html,body').animate({
            scrollTop: $("#third").offset().top
        });
    });






    // if ($(document).scrollTop() + $(document).height() >= $(document).height()) {
    //     $("body").append($(".container"))
    // }
});