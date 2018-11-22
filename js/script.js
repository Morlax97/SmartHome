$(document).ready(function(){
  $('.tabs').tabs();
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
});