$(document).ready(function(){
	guessing();

})

function guessing(){
	var correctAge = Math.floor(Math.random() * 106);
	console.log(correctAge);
	$('#answer').click(function(){
		var age =$('input').val();
		console.log(age);
		if(correctAge == age){
			$('h1').text('Perfect age of '+age);
			$('input').val('');
		}else if(age<correctAge ){
			$('h1').text(age+' is too young!');
			$('input').val('');
		}else{
			$('h1').text(age+' is too old!');
			$('input').val('');
		}





	});
}