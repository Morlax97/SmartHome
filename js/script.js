$(document).ready(function(){
  $('.tabs').tabs();
  $('#sensor_temp').hide();
  $('#sensor_luz1').hide();
  $('#sensor_luz2').hide();
  $('#sensor_sonido').hide();
});

$('#sensor_temp_btn').click(function(){
  $('#sensor_temp').show();
  $('#sensor_luz1').hide();
  $('#sensor_luz2').hide();
  $('#sensor_sonido').hide();
});

$('#sensor_luz_btn').click(function(){
  $('#sensor_temp').hide();
  $('#sensor_luz1').show();
  $('#sensor_luz2').hide();
  $('#sensor_sonido').hide();
});

$('#sensor_sonido_btn').click(function(){
  $('#sensor_temp').hide();
  $('#sensor_luz1').hide();
  $('#sensor_sonido').show();
  $('#sensor_luz2').hide();
});