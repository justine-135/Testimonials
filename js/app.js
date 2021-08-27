window.addEventListener("load", () => {
	const prevBtn = document.querySelector(".prev-btn");
	const nextBtn = document.querySelector(".next-btn");
	const imgSlider = document.querySelectorAll(".slider img");
	const sliderContainer = document.querySelector(".slider");
	const quote = document.querySelector(".text__inside p");
	const person = document.querySelector(".text__inside__name h6");
	const company = document.querySelector(".text__inside__name span");

	let counter = 1;
	const size = imgSlider[0].clientWidth;

	sliderContainer.style.transform = "translateX(" + -size * counter + "px)";

	nextBtn.addEventListener("click", () => {
		sliderContainer.classList.add("slider-smooth");
		counter++;
		sliderContainer.style.transform = "translateX(" + -size * counter + "px)";
		if (counter == 2) {
			quote.textContent = `“ If
            you want to lay the best foundation possible I’d recommend taking this
            course. The depth the instructors go into is incredible. I now feel so
            confident about starting up as a professional developer. ”`;

			person.textContent = `John Tarkpor`;
			company.textContent = `Junior Front-end Developer`;
		} else {
			quote.textContent = `“ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”`;

			person.textContent = `Tanya Sinclair`;
			company.textContent = `UX Engineer`;
		}

		nextBtn.disabled = true;
		prevBtn.disabled = true;
		setTimeout(() => {
			nextBtn.disabled = false;
			prevBtn.disabled = false;
		}, 500);
	});

	prevBtn.addEventListener("click", () => {
		sliderContainer.classList.add("slider-smooth");
		counter--;
		sliderContainer.style.transform = "translateX(" + -size * counter + "px)";
		if (counter == 0) {
			quote.textContent = `“ If
            you want to lay the best foundation possible I’d recommend taking this
            course. The depth the instructors go into is incredible. I now feel so
            confident about starting up as a professional developer. ”`;

			person.textContent = `John Tarkpor`;
			company.textContent = `Junior Front-end Developer`;
		} else {
			quote.textContent = `“ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”`;

			person.textContent = `Tanya Sinclair`;
			company.textContent = `UX Engineer`;
		}
		console.log(counter);

		nextBtn.disabled = true;
		prevBtn.disabled = true;
		setTimeout(() => {
			nextBtn.disabled = false;
			prevBtn.disabled = false;
		}, 500);
	});

	sliderContainer.addEventListener("transitionend", () => {
		if (imgSlider[counter].id === "lastImg") {
			sliderContainer.classList.remove("slider-smooth");
			counter = 1;
			sliderContainer.style.transform = "translateX(" + -size * counter + "px)";
		} else if (imgSlider[counter].id === "firstImg") {
			sliderContainer.classList.remove("slider-smooth");
			counter = 2;
			sliderContainer.style.transform = "translateX(" + -size * counter + "px)";
		}
	});
});
