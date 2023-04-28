console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Thank you for your feedback.")
	
	// console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function compliment(){
	
 document.getElementById("compliment") 
 alert("Have a great day!!!");
}

