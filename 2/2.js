var formElement = document.forms['formElement'];

formElement.addEventListener("focusin", (evt) => {
    console.log("here")
    var activeElement = formElement.querySelector('.focused');
	if (activeElement) {
	    activeElement.classList.remove('focused');
    }
    evt.target.classList.add('focused');
});

formElement.addEventListener("focusout", () => {
    var activeElement = formElement.querySelector('.focused');
    if (activeElement) {
     	activeElement.classList.remove('focused');   
    }
});





