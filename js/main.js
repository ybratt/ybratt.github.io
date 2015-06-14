/* everything on here is comment*/
// everything on here is also comment
function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' '+ lastName
	console.log(fullName);
	$('h2').text('Hello '+fullName);

	var userAge=prompt('How old are you?')
	userAge=parseInt(userAge);
	if (userAge>=35) {
	$('h2').text('Wow you are so old!!!');

	} else if (userAge >=13) { alert('Come back in a few years');
	} else {
		alert ('Go away, child!');
	}
	if (firstName=="Yasmine" && userAge<=60) {console.log('All right');}
	if (firstName.toLowerCase=="general" && lastName.toLowerCase!="assembly") {
		console.log("Hello my General");
		$('h2').text("Hello my General");
	}
	$('h1').append(', '+userAge + ' years old');
}


//when the page has loaded
$(function(){
$('img').on('click', askQuestions);
//Hide the content
	$('h3').next().hide();
	//when the user clicks on a h3
	$('h3').on('click', function() {

		//find the next element and hide it
		$(this).next().slideToggle(1000);
		$(this).toggleClass('open')
	});
});