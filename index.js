//...............................................AJAX BASIC COMMAND USED.............
		//navigation menu
	const menubtn = document.querySelector(".menu_btn");
	const navigation = document.querySelector(".navigation");
	menubtn.addEventListener("click", () =>{
		menubtn.classList.toggle("active");
		navigation.classList.toggle("active");
	})
	//video slider navigation
	const btns = document.querySelectorAll(".nav_btn");
	const slides = document.querySelectorAll(".video_slide");
	const content = document.querySelectorAll(".content");

	var slidernav = function(manual){
		btns.forEach((btn)=>{
		btn.classList.remove("active");
	});
		slides.forEach((slide)=>{
		slide.classList.remove("active");
	});
		content.forEach((content)=>{
		  	content.classList.remove("active");
	});
		btns[manual].classList.add("active");
		slides[manual].classList.add("active");
		content[manual].classList.add("active");
	}
	btns.forEach((btn, i) => {
		btn.addEventListener("click", ()=> {
			slidernav(i);
		});
	});
//.........................................END PROGRAM.............................	