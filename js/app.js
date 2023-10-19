const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

const carouselDOMElement = document.querySelector('.carousel')

images.forEach(data => {
    const html = `<div class="carousel__object">
        <img src="${data.image}" alt="" />
        <div class="overlay">
            <div class="title">${data.title}</div>
            <div class="text">${data.text}</div>
        </div>
    </div>`

    carouselDOMElement.innerHTML +=  html
})

const objectDOMElements = document.querySelectorAll('.carousel__object')

let currentIndex = 3

let currentSlide = objectDOMElements[currentIndex]
currentSlide.classList.add('active')

const arrowUp = document.querySelector('.arrow--up')

const arrowDown = document.querySelector('.arrow--down')

arrowDown.addEventListener('click', function () {

    currentSlide.classList.remove('active')

    currentIndex++
    
    if (currentIndex >= objectDOMElements.length) {
        currentIndex = 0 
    }
    
    currentSlide = objectDOMElements[currentIndex]
    currentSlide.classList.add('active')
})


arrowUp.addEventListener('click', function () {
    
    currentSlide.classList.remove('active')
    
    currentIndex--
   
    if (currentIndex < 0) {
        currentIndex = objectDOMElements.length - 1 
    }

    currentSlide = objectDOMElements[currentIndex]
    currentSlide.classList.add('active')
})

const autoSlideInterval = setInterval(function () {
    
    currentSlide.classList.remove('active')

    currentIndex++
    
    if (currentIndex >= objectDOMElements.length) {
        currentIndex = 0 
    }
    
    currentSlide = objectDOMElements[currentIndex]
    currentSlide.classList.add('active')
}, 3000)