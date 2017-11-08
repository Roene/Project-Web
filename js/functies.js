//Change color of heart
var counter = 0;
var heartButtons = document.querySelectorAll('main article footer button');		
for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener('click', function () {
		if(this.classList.contains('color-active')){
			counter--;
		}else{
			counter++;
		}
		document.getElementById("counter").innerHTML = counter; 
		this.classList.toggle('color-active');
	});
}

//Show more articles
var showButton = document.querySelector('section button');			
var article = document.querySelectorAll('.extra'); 					

var showArticle = function () {										
for (var i = 0; i < article.length; i++){
	article[i].classList.toggle('showextra');
	}
}
showButton.addEventListener('click', showArticle);

//Source http://jsfiddle.net/JsZ8S/5/
//Changes made for this project
function filterContent() {
	var filter = document.getElementById("filter").value;
    if(filter=="1") {
		$(".content1")
			.css("display","block");
        $(".content2,.content3")
            .css("display","none");
	} else if (filter=="2") {
		$(".content1")
            .css("display","none");
		$(".content2")
			.css("display","block");
        $(".content3")
            .css("display","none");
	} else if (filter=="3") {
		$(".content1,.content2")
            .css("display","none");
		$(".content3")
			.css("display","block");
	} else if (filter=="")
		$(".content1,.content2,.content3")
			.css("display","block");
}					