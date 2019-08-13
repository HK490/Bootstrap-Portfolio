$(document).ready(function () {

    $("#home").click(function () {
        $('html,body').animate({
            scrollTop: $("#first").offset().top
        });
    });

    $("#port").click(function () {
        $('html,body').animate({
            scrollTop: $("#second").offset().top
        });
    });

    $("#cont").click(function () {
        $('html,body').animate({
            scrollTop: $("#third").offset().top
        });
    });






    // if ($(document).scrollTop() + $(document).height() >= $(document).height()) {
    //     $("body").append($(".container"))
    // }
});