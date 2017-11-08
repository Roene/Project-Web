//Source : https://gist.github.com/kaneshin/3847842
//Changes made for this project
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('main p')
		.css('opacity', 0.2);
	  $('h1')
		.css('opacity', 0.9);
	  $('button p')
		.css('opacity', 1)
    } else {
      $('main p')
		.css('opacity', 0.9);
	  $('h1')
		.css('opacity', 0);
	  $('button p')
		.css('opacity', 1)
    }
  });
});

//Source Jelle Roos
//Changes made for this project
var like = document.querySelector('.like');

function likePopUp() {
    var likeUp = document.querySelector(".likeUp");
    like.classList.toggle("likeActive");
    likeUp.classList.toggle("likeUpAnimation");
    if (countLike.innerText.trim() === "141") {
        countLike.innerHTML = countLike.innerHTML.replace(countLike.innerText.trim(), 142);
    } else {
        countLike.innerHTML = countLike.innerHTML.replace(countLike.innerText.trim(), 141);
    }
}

//Source https://stackoverflow.com/questions/33365144/html-button-onclick-start-javascript-progressbar
//Changes made for this project
function downloading(al) {
var bar = document.getElementById('progressBar');
var status = document.getElementById('status');
  status.innerHTML = al + "%";
  bar.value = al;
  al++;
var sim = setTimeout("downloading(" + al + ")", 1);
  if (al == 100) {
    status.innerHTML = "100%";
    bar.value = 100;
    clearTimeout(sim);
var finalMessage = document.getElementById('finalMessage');
    finalMessage.innerHTML = "Downloaden is voltooid";
  }
var change = document.getElementById("download");
  if (change.innerHTML == "Download") {
   change.innerHTML = "Open PDF";
   }
}