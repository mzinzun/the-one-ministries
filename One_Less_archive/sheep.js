$(".goBack").click(function () {
  ////// goes to previous page //////
  window.history.back();
});

$("#IIcor5").hide();
$(".verse1").on('click', function () {
  ///// slideToggle IIcor5 ///////////
  $('#IIcor5').slideToggle();
});

$("#ps142").hide();
$(".verse2").on('click', function () {
  /////////// slideToggle ps142 //////
  $('#ps142').slideToggle();
});

$("#col1").hide();
$(".verse3").on('click', function () {
  //////// slideToggle col1 //////////
  $('#col1').slideToggle();
});

$("#list7a").hide();
$(".list7").on('click', function () {
  //////// slideToggle list7 //////////
  $('#list7a').slideToggle();
});