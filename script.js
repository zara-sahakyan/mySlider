/** @format */

/** @format */
let slidePosition = 0;
const slides = document.getElementsByClassName("item");
const countSlides = slides.length;

document.getElementById("arrow-next").addEventListener("click", function () {
	moveToNextSlide();
});
document.getElementById("arrow-prev").addEventListener("click", function () {
	moveToPrevSlide();
});

function updateSlidePosition() {
	for (let slide of slides) {
		slide.classList.remove("item-visible");
		slide.classList.add("item-hidden");
	}
	slides[slidePosition].classList.add("item-visible");
}

function moveToNextSlide() {
	if (slidePosition === countSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	updateSlidePosition();
}
function moveToPrevSlide() {
	if (slidePosition === 0) {
		slidePosition = countSlides - 1;
	} else {
		slidePosition--;
	}
	updateSlidePosition();
}
