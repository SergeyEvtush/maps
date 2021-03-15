


var next = document.getElementById('next');


var prew = document.getElementById('prew');





var slides = document.getElementsByClassName('slide');//присваиваем переменной slides массив значений с id slide
for (var i = 0; i < slides.length; i++) {//при помощи цикла присваиваем значение z-index последнему элементу 0 для того чтобы он находился под всеми и т.д по убыванию=>значит у первого элемента будет самый высокий z-index
	slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
	var activeEl = document.querySelector('.active');//показываем элемент с классом active
	if (activeEl.nextElementSibling) {//если переменная activeEl получила следующий элемент то это мы убираем влево на его длинну
		activeEl.style.left = "-100%";
		activeEl.classList.remove('active');// и убираем у него класс active
		activeEl.nextElementSibling.classList.add('active');//добавляем этот класс следующему
		this.classList.remove('no_active');
		prew.classList.remove('no_active');
		if (!activeEl.nextElementSibling.nextElementSibling) {
			this.classList.add('no_active');//если дошел до конца добавляем кнопке класс no_active
		}
	}
}
//такая же функция как и предыдущая
prew.onclick = function () {
	var activeEl = document.querySelector('.active');
	if (activeEl.previousElementSibling) {
		activeEl.previousElementSibling.style.left = "0%";
		activeEl.classList.remove('active');
		activeEl.previousElementSibling.classList.add('active');
		this.classList.remove('no_active');
		next.classList.remove('no_active');
		if (!activeEl.previousElementSibling.previousElementSibling) {
			this.classList.add('no_active');
		}
	}
}


