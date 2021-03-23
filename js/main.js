const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});


// cart
const overlayCart = document.querySelector('.overlay')
const cratButton = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');

const openModal = function (){
	modalCart.classList.add ('show')
}

const closeModal = function (){
	modalCart.classList.remove('show')
}


cratButton.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)
overlayCart.addEventListener('click', ()=>{
	modalCart.classList.remove('show')
})

// scrool

{const scrollLink = document.querySelectorAll('a.scroll-link');


for (let i = 0; i < scrollLink.length; i++){
	scrollLink[i].addEventListener('click', (event)=>{
		event.preventDefault();
		const id = scrollLink[i].getAttribute("href");
		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	});
}}