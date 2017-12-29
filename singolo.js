(function(){
	let menubutton = document.querySelector('.menubutton');

	let menuItems = document.querySelectorAll('header a');

	let navbar = document.querySelector('nav');

	let images = document.querySelectorAll('.gallery img');
	
	const btnwebdesign = document.querySelector('#btnWebDesign');
	btnwebdesign.onclick = showWebDesign;

	const btnall = document.querySelector('#btnAll');
	btnall.onclick = showAll;

	const btngraphicdesign = document.querySelector('#btnGraphicDesign');
	btngraphicdesign.onclick = showGraphicDesign;

	const btnartwork = document.querySelector('#btnArtwork');
	btnartwork.onclick = showArtwork;

	menubutton.onclick = function(){
		navbar.classList.toggle('navbarDisplay');
	}

	for(let i=0; i<menuItems.length; i++){
		menuItems[i].onclick = function(){
			navbar.classList.remove('navbarDisplay');
		};
	}

	function showAll(){
		for(let image of images){
			if(image.style.display === "none")
				image.style.display = "block";
		}
	}

	function showWebDesign(){
		for(let image of images){
			if(image.style.display === "none")
				image.style.display = "block";
			if((image.dataset.projectType) !== "Web Design")
				image.style.display = "none";
		}
	}

	function showGraphicDesign(){
		for(let image of images){
			if(image.style.display === "none")
				image.style.display = "block";
			if((image.dataset.projectType) !== "Graphic Design")
				image.style.display = "none";
		}
	}

	function showArtwork(){
		for(let image of images){
			if(image.style.display === "none")
				image.style.display = "block";
			if((image.dataset.projectType) !== "Artwork")
				image.style.display = "none";
		}
	}
})();