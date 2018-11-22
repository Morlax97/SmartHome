$(document).ready(function(){
  $('.tabs').tabs();
  $("#sensor_temp").hide();
  $("#sensor_luz").hide();
});

$("#sensor_temp_btn").click(function() {
  $("#sensor_temp").show();
});

$("#sensor_luz_btn").click(function() {
  $("#sensor_luz").show();
});