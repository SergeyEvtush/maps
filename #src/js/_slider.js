//JavaScript метод document.querySelectorAll() возвращает список элементов в пределах документа (статичный (не живой) объект типа NodeList), соответствующих указанному селектору, или группе селекторов. Если совпадений не найдено, то возвращается пустой объект типа NodeList.Объект NodeList представляет из себя набор узлов, к котрым можно обращаться по номерам индексов, индекс коллекции начинается с 0. Вы можете использовать свойство length объекта NodeList для определения количества элементов, соответствующих указанному селектору и при необходимости перебирать все эти элементы в цикле.

var slides = document.querySelectorAll('#slides .slide');//получаем все слайды из контейнера
var currentSlide = 0;//переменная для получения текущего слайда
//В отличие от метода setTimeout, setInterval выполняет код много раз, через равные промежутки времени, пока не будет остановлен при помощи clearInterval.
var slideInterval = setInterval(nextSlide, 2000);//задаю интервал для перелистывания в 2сек
function nextSlide() {
	slides[currentSlide].className = 'slide';//меняю класс текущего слайда чтобы его спрятать
	currentSlide = (currentSlide + 1) % slides.length;//к текущему слайду добавляю класс а остаток от деления нужен чтобы вернуться к нулевому слайду при достижении последнего т.к при получении остатка от деления числа самого на себя  будет 0
	slides[currentSlide].className = 'slide showing';//после получения индекса слайда меняю класс и показываю новый

}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow() {
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
	if (playing) {
		pauseSlideshow();
	} else {
		playSlideshow();
	}
};

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow() {
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
	if (playing) {
		pauseSlideshow();
	} else {
		playSlideshow();
	}
};