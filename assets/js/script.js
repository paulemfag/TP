$(function(){
// Modal qui s'ouvre sur la page forum
$(document).ready(function () {
$('#rules').modal('show')
})
// validation réglement
  function check() {
    if(document.getElementById('#check').checked = true){
      $('#terms').prop('disabled', false);

    } else {
      $('#terms').prop('enabled', true);
    }
  };

})
