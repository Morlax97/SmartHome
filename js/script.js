$(document).ready(function(){
  $('.tabs').tabs();
  $('#sensor_temp').hide();
  $('#sensor_luz1').hide();
  $('#sensor_luz2').hide();
  $('#sensor_sonido').hide();
  $('#actuador_lampara').hide();
  $('#actuador_alarma').hide();
  $('#regla_cuarto').hide();
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

$('#encendido_lampara').click(function(){
  $("#actuador_lampara_valor").text("ON");
  $("#actuador_lampara_valor_tabla").text("ON");
  $("#actuador_lamp_btn").attr('class', 'btn-floating btn-large waves-effect waves-light yellow');
});

$('#apagado_lampara').click(function(){
  $("#actuador_lampara_valor").text("OFF");
  $("#actuador_lampara_valor_tabla").text("OFF");
  $("#actuador_lamp_btn").attr('class', 'btn-floating btn-large waves-effect waves-light black');
});

$('#encendido_alarma').click(function(){
  $("#actuador_alarma_valor").text("ON");
  $("#actuador_alarma_valor_tabla").text("ON");
  $("#actuador_alarm_btn").attr('class', 'btn-floating btn-large waves-effect waves-light yellow');
});

$('#apagado_alarma').click(function(){
  $("#actuador_alarma_valor").text("OFF");
  $("#actuador_alarma_valor_tabla").text("OFF");
  $("#actuador_alarm_btn").attr('class', 'btn-floating btn-large waves-effect waves-light black');
});

$('#regla_cuarto_edit').click(function(){
  $("#tabla_reglas").hide();
  $('#regla_cuarto').show();
});

$('#aceptar_regla').click(function(){
  $("#regla_cuarto").hide();
  $('#tabla_reglas').show();
});