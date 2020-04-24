$(document).ready(function() {
  $("#home").click(function() {
    $("#first").hide();
    $("#first").fadeIn(2000);
    $("html,body").animate({
      scrollTop: $("#first").offset().top
    });
  });

  $("#port").click(function() {
    $("#second").hide();
    $("#second").fadeIn(2000);
    $("html,body").animate({
      scrollTop: $("#second").offset().top
    });
  });

  // $("#cont").click(function () {
  //     $( "#third").hide();
  //     $("#third").fadeIn(2000);
  //     $('html,body').animate({
  //         scrollTop: $("#third").offset().top
  //     });
  // });

  $(".carousel").carousel("next");

  // if ($(document).scrollTop() + $(document).height() >= $(document).height()) {
  //     $("body").append($(".container"))
  // }

  $(document).scroll(function() {
    if ($(document).scrollTop() >= 600) {
      // user scrolled 50 pixels or more;
      // do stuff
      $(".nav").css({"background-color": "#f9f9f9", "box-shadow": "inset 7px 7px 10px 10px white", "box-shadow": "3px 3px 6px 6px white"})
    } else {
      $(".nav").css({"background-color": "transparent", "box-shadow": "none"})
    }
  });

});
