/** @format */

function displayTechnologies(projectTechnologies) {
	// Fetch technologies from JSON file
	fetch('https://cdn.juancbotero.com/assets/js/technologies.json')
		.then((response) => response.json())
		.then((technologies) => {
			// Filter technologies based on projectTechnologies
			const technologies_used = technologies.filter((tech) => projectTechnologies.includes(tech.id));

			// Display technologies in the HTML
			const technologyContainer = document.getElementById('technology-container');
			technologyContainer.innerHTML = ''; // Clear existing content

			technologies_used.forEach((tech) => {
				const col = document.createElement('div');
				col.className = 'col-6 col-md-4 mb-4 text-center';
				col.innerHTML = `
                    <img src="${tech.logo}" alt="${tech.name} Icon" class="technology-icon mx-auto d-block" style="width: 50px; height: 50px;"> 
                    <p>${tech.name}</p>
                    `;
				technologyContainer.appendChild(col);
			});
		})
		.catch((error) => console.error('Error fetching technologies:', error));
}