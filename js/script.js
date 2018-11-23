$(document).ready(function(){
  $('.tabs').tabs();
  $('#sensor_temp').hide();
  $('#sensor_luz1').hide();
  $('#sensor_luz2').hide();
  $('#sensor_sonido').hide();
  $('#actuador_lampara').hide();
  $('#actuador_alarma').hide();
});

$('#sensor_temp_btn').click(function(){
  $('#sensor_temp').show();
  $('#sensor_luz1').hide();
  $('#sensor_luz2').hide();
  $('#sensor_sonido').hide();
  $('#actuador_lampara').hide();
  $('#actuador_alarma').hide();
});

$('#sensor_luz1_btn').click(function(){
  $('#sensor_temp').hide();
  $('#sensor_luz1').show();
  $('#sensor_luz2').hide();
  $('#sensor_sonido').hide();
  $('#actuador_lampara').hide();
  $('#actuador_alarma').hide();
});

$('#sensor_luz2_btn').click(function(){
  $('#sensor_temp').hide();
  $('#sensor_luz2').show();
  $('#sensor_luz1').hide();
  $('#sensor_sonido').hide();
  $('#actuador_lampara').hide();
  $('#actuador_alarma').hide();
});

$('#sensor_sonido_btn').click(function(){
  $('#sensor_temp').hide();
  $('#sensor_luz1').hide();
  $('#sensor_sonido').show();
  $('#sensor_luz2').hide();
  $('#actuador_lampara').hide();
  $('#actuador_alarma').hide();
});

$('#actuador_lamp_btn').click(function(){
  $('#sensor_temp').hide();
  $('#sensor_luz1').hide();
  $('#sensor_sonido').hide();
  $('#sensor_luz2').hide();
  $('#actuador_lampara').show();
  $('#actuador_alarma').hide();
});

$('#actuador_alarm_btn').click(function(){
  $('#sensor_temp').hide();
  $('#sensor_luz1').hide();
  $('#sensor_sonido').hide();
  $('#sensor_luz2').hide();
  $('#actuador_lampara').hide();
  $('#actuador_alarma').show();
});