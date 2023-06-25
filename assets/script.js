const leftArrowElement = document.querySelector(".arrow_left");
const rightArrowElement = document.querySelector(".arrow_right");
const imgBannerElement = document.querySelector(".banner-img");
const pBannerElement = document.querySelector("#banner p");
const dotsContainerElement = document.querySelector('.dots')

let index = 0;

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


const changeCssDotElement = () => {
	const allDotsElements = document.querySelectorAll('.dot');
	allDotsElements.forEach((dot, i) => {
		dot.classList.remove('dot_selected')
		if (i === index) {
			dot.classList.add('dot_selected')
		}
	})
}

const changeCarouselElement = () => {
	imgBannerElement.src = "./assets/images/slideshow/" + slides[index].image;
	pBannerElement.innerHTML = slides[index].tagLine;
}

slides.forEach((data, i) => {
	const dotElement = document.createElement('span');
	dotElement.classList.add('dot')

	if (i === index) {
		dotElement.classList.add('dot_selected')
	}

	dotElement.addEventListener('click', () => {
		index = i
		changeCarouselElement()
		changeCssDotElement()
	})

	dotsContainerElement.appendChild(dotElement)
})

leftArrowElement.addEventListener("click", () => {
  index = index - 1;
  if (index < 0) {
	index = slides.length - 1
  }
  changeCarouselElement()
  changeCssDotElement()
});

rightArrowElement.addEventListener("click", () => {
  index = index + 1;
  if (index > slides.length - 1) {
	index = 0
  }
  changeCarouselElement()
  changeCssDotElement()
});
