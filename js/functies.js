console.log('HALLOOOOO');
//Meer articles tevoorschijn toveren
var showButton = document.querySelector('section button');			
var article = document.querySelectorAll('.extra'); 					

var showArticle = function () {										
	for (var i = 0; i < article.length; i++){
	article[i].classList.toggle('showextra');
	}
}
showButton.addEventListener('click', showArticle);					

//Button van kleur veranderen
var heartButtons = document.querySelectorAll('.heartButton');		
	for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener('click', function () {
	this.classList.toggle('color-active');
	});
}

// Download microinteraction
var download = document.querySelectorAll('.download');
	for (var i = 0; i < download.length; i++) {
		download[i].addEventListener('click', function () {
		this.classList.toggle('download-active');
	});
}