$(document).ready(function () {
  $('#getjoke').on('click',function (){
  var $chiste = $('#chiste')
   $('#chiste').html('');
  $("#body").removeClass("body1");
  $("#body").addClass("body2");
  $.ajax({
    type:'GET',
    url: 'http://api.icndb.com/jokes/random',
    success: function(data){
      console.log(data.value.joke)
        $chiste.append(data.value.joke);
      }});
})});
