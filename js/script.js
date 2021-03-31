const Noactive = document.querySelectorAll('.front');
const Active = document.querySelectorAll('.back');
const Slides = document.querySelectorAll('.slide');
for (let i = 0; i < Slides.length; i++) {
	const Noactivevar = Noactive[i];
	const Activevar = Active[i];
	const Slidesvar = Slides[i];



	function makeFrases() {
		var words1 = ["у тебя", "для тебя", "тебе", "вам", "для вас"];
		var words2 = ["благоприятное", "отличная", "хороший", "не плохая", "интересная"];
		var words3 = ["стечение обстоятельств", "возможность", "вариант", "проверка", "покупка"];
		var rand1 = Math.floor(Math.random() * words1.length);
		var rand2 = Math.floor(Math.random() * words2.length);
		var rand3 = Math.floor(Math.random() * words3.length);
		var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
		//alert(phrase);
		document.getElementById("message").innerHTML = phrase;
	};





	Slidesvar.addEventListener("click", function (e) {
		Slidesvar.classList.toggle('returnn')
		Activevar.classList.toggle('_active');
		Noactivevar.classList.toggle('_no_active');
		if (Activevar.classList.contains('_active')) {


			makeFrases();
		}
		else {
			document.getElementById("message").innerHTML = " ";

		}
	});

}

let i = 0;
let btnNext = document.getElementById('next');
let btnPrew = document.getElementById('prew');
btnNext.addEventListener("click", function () {
	++i;
	if (i >= Slides.length) {
		Slides[i - 1].classList.remove("active");
		i = 0;
		Slides[i].classList.add("active");
	} else {
		Slides[i - 1].classList.remove("active");
		Slides[i].classList.add("active");
	}

});
