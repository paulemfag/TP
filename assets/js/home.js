$(function(){
  $(document).ready(
    function FormsDefault() {
    $('#suscribeItems').hide();
    $('#connectItems').hide();
  })
  $('#suscribebtn').click(function() {
    $('#connectItems').hide();
    $('#suscribeItems').show();
  });
  $('#connectbtn').click(function() {
    $('#suscribeItems').hide();
    $('#connectItems').show();
  });
})
