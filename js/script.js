$(document).ready(function(){
  $('.tabs').tabs();
  $('#sensor_temp').hide();
  $('#sensor_luz').hide();
});

$('#sensor_temp_btn').click(function(){
  $('#sensor_temp').show();
  $('#sensor_luz').hide();
});

$('#sensor_luz_btn').click(function(){
  $('#sensor_temp').hide();
  $('#sensor_luz').show();
});

$('#boton_3').click(function(){
  $('#sensor_titulo').text("Sensor Sonido_1");
  $('#sensor_valor').text("10 db");
});