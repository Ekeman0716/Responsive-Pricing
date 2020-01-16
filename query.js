$(function() {
  $("#toggle-box").on("click",function() {
    if ($("#toggle").hasClass("toggle-annually")) {
      $("#toggle").removeClass("toggle-annually");
      $("#toggle").addClass("toggle-monthly");
      $(".price-annually").hide();
      $(".price-monthly").fadeIn(300);
      $("#annually-label").removeClass('toggled');
      $("#monthly-label").addClass('toggled');
    }
    else if ($("#toggle").hasClass("toggle-monthly")) {
      $("#toggle").removeClass("toggle-monthly");
      $("#toggle").addClass("toggle-annually");
      $(".price-monthly").hide();
      $(".price-annually").fadeIn(300);
      $("#monthly-label").removeClass('toggled');
      $("#annually-label").addClass('toggled');
    }
  });
})
