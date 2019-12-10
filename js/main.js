// programtabs
function tab(m) {
	let n = m.parentNode.getElementsByTagName('li');
	let t = m.parentNode.parentNode.getElementsByTagName('div');
	for (let i = 0; i < n.length; i++) {
		n[i].className = m == n[i] ? 'program__tab_current' : '';
		t[i].style.display = m == n[i] ? 'block' : 'none';
	}
}

// teachers slider
// const controls = document.querySelectorAll('.teachers__controls');
// for (let i = 0; i < controls.length; i++) {
// 	controls[i].style.display = 'inline-block';
// }

const slides = document.querySelectorAll('#teachers__slides .teachers__slide');
let currentSlide = 3;
let zSlides = 0;

function nextSlide() {
	console.log(currentSlide);
	goToNextSlide(currentSlide + 1);
}

function previousSlide() {
	goToPrevSlide(currentSlide - 1);
}

function goToNextSlide(n) {
	if (currentSlide == 0) {
		slides[slides.length - 1].className = 'teachers__slide showing--center';
		slides[slides.length - 2].className = 'teachers__slide showing';
		slides[slides.length - 3].className = 'teachers__slide hidding';
		slides[currentSlide].className = 'teachers__slide showing';
		slides[currentSlide].style.order = slides.length + currentSlide;
		currentSlide = (n + slides.length) % slides.length;
	} else if (currentSlide == 1) {
		slides[currentSlide - 1].className = 'teachers__slide showing--center';
		slides[slides.length - 1].className = 'teachers__slide showing';
		slides[slides.length - 2].className = 'teachers__slide hidding';
		slides[currentSlide].className = 'teachers__slide showing';
		slides[currentSlide].style.order = slides.length + currentSlide;
		currentSlide = (n + slides.length) % slides.length;
	} else if (currentSlide == 2) {
		slides[currentSlide - 1].className = 'teachers__slide showing--center';
		slides[currentSlide - 2].className = 'teachers__slide showing';
		slides[slides.length - 1].className = 'teachers__slide hidding';
		slides[currentSlide].className = 'teachers__slide showing';
		slides[currentSlide].style.order = slides.length + currentSlide;
		currentSlide = 3;
		for (let j = 0; j < slides.length; j++) {
			slides[j].style.order = j;
		}
	} else {
		slides[currentSlide - 1].className = 'teachers__slide showing--center';
		slides[currentSlide - 2].className = 'teachers__slide showing';
		slides[currentSlide - 3].className = 'teachers__slide hidding';
		slides[currentSlide].className = 'teachers__slide showing';
		slides[currentSlide].style.order = currentSlide;
		currentSlide = (n + slides.length) % slides.length;
	}
}

function goToPrevSlide(n) {
	console.log(currentSlide);
	if (currentSlide == 0) {
		slides[slides.length - 3].className = 'teachers__slide showing--center';
		slides[slides.length - 2].className = 'teachers__slide showing';
		slides[slides.length - 1].className = 'teachers__slide hidding';
		slides[slides.length - 4].className = 'teachers__slide showing';
		slides[slides.length - 4].style.order = currentSlide;
		currentSlide = 4;
	} else if (currentSlide == 1) {
		slides[slides.length - 2].className = 'teachers__slide showing--center';
		slides[slides.length - 1].className = 'teachers__slide showing';
		slides[currentSlide - 1].className = 'teachers__slide hidding';
		slides[slides.length - 3].className = 'teachers__slide showing';
		slides[slides.length - 3].style.order = currentSlide - slides.length;
		currentSlide = 5;
		for (let j = 0; j < slides.length; j++) {
			slides[j].style.order = j;
		}
	} else if (currentSlide == 2) {
		slides[slides.length - 1].className = 'teachers__slide showing--center';
		slides[currentSlide - 2].className = 'teachers__slide showing';
		slides[currentSlide - 1].className = 'teachers__slide hidding';
		slides[slides.length - 2].className = 'teachers__slide showing';
		slides[slides.length - 2].style.order = currentSlide - slides.length;
		currentSlide -= 1;
	} else if (currentSlide == 3) {
		slides[currentSlide - 3].className = 'teachers__slide showing--center';
		slides[currentSlide - 2].className = 'teachers__slide showing';
		slides[currentSlide - 1].className = 'teachers__slide hidding';
		slides[slides.length - 1].className = 'teachers__slide showing';
		slides[slides.length - 1].style.order = currentSlide - slides.length;
		currentSlide -= 1;
	} else if (currentSlide > 3) {
		slides[currentSlide - 3].className = 'teachers__slide showing--center';
		slides[currentSlide - 2].className = 'teachers__slide showing';
		slides[currentSlide - 1].className = 'teachers__slide hidding';
		slides[currentSlide - 4].className = 'teachers__slide showing';
		slides[currentSlide - 4].style.order = currentSlide - slides.length;
		currentSlide -= 1;
	}
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.onclick = function() {
	nextSlide();
};
previous.onclick = function() {
	previousSlide();
};
