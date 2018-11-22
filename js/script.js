$(document).ready(function(){
  $('.tabs').tabs();
<<<<<<< HEAD
  $("#sensor_temp").hide();
  $("#sensor_luz").hide();
});

$("#sensor_temp_btn").click(function() {
  $("#sensor_temp").show();
});

$("#sensor_luz_btn").click(function() {
  $("#sensor_luz").show();
=======
  $('#disp_scr').hide();
  $('#reglas_scr').hide();
});

$('#boton_1').click(function(){
  $('#sensor_titulo').text("Sensor Temp_1");
  $('#sensor_valor').text("25°C");
});

$('#boton_2').click(function(){
  $('#sensor_titulo').text("Sensor Luz_1");
  $('#sensor_valor').text("100 l");
});

$('#boton_3').click(function(){
  $('#sensor_titulo').text("Sensor Sonido_1");
  $('#sensor_valor').text("10 db");
>>>>>>> 4d345138c5b1114a385ed0f4a8550f34876395c0
});