$(document).ready(function() {
	  
  function get_joke(){
	var randomArray = ['random1.jpg', 'random2.jpg', 'random3.jpg', 'random4.jpg'];
	var path = 'images/';
	var $chiste = $('#chiste')
	$.ajax({
		type:'GET',
		url: 'https://api.icndb.com/jokes/random',
		success: function(data){
		  console.log(data.value.joke)
		  var random = randomArray[Math.floor(Math.random() * randomArray.length)];
		  console.log(random);
		  
		  $('#body').css({'background-image':'url('+path+random+')'});
		  $('#chiste').html(data.value.joke);
		}
	});
  }
  
  $('#getjoke').on('click',function (){
	get_joke();
  })
  
  
});
