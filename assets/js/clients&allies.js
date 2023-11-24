/** @format */

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// Function to generate the slider HTML based on the clients array
function generateSlider(clients, element) {
	// Get the container element
	const sliderContainer = document.getElementById(element);

	// Dynamically generate the slider HTML
	clients.forEach((client) => {
		const slide = document.createElement('div');
		slide.className = 'slide';
		slide.innerHTML = `<img src="${client.image}" alt="${client.name} Logo">`;
		sliderContainer.appendChild(slide);
	});
}

function generateAnimation(element, speed) {
	jQuery(element).slick({
		speed: speed,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	});
}

// Fetch the array of clients from the JSON file
fetch('https://cdn.juancbotero.com/assets/js/technologies.json')
	.then((response) => response.json())
	.then((clients) => {
		// Call the function to generate the slider HTML

		generateSlider(clients, 'slider-container-1');

		const shuffledClients = shuffleArray(clients);
		generateSlider(shuffledClients, 'slider-container-2');

		jQuery(document).ready(function () {
			generateAnimation('.logos-1', 9000);
			generateAnimation('.logos-2', 5000);
		});
	})
	.catch((error) => console.error('Error fetching clients:', error));
