"use strict"
/*код определяющий на каком устройстве открыта страница */
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
/*---------------------------- */
//проверка :если объект функция в объекте isMobile возвращает true то это значит что страница открыта на каком либо моб устройстве поддерж tuch-screen
if (isMobile.any()) {

	document.body.classList.add('_touch');//тогда мы присваиваем элементу body класс _touch

	let menuArrows = document.querySelectorAll('.menu__arrow');//получаем все элементы с классом .menu__arrow(стрелочки) 
	//проверяем наличие этих элементов =>если размер массива бошльше 0 
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {//перебираем этот массив

			const menuArrow = menuArrows[index];//получаем все элементы из этого массива в переменную
			menuArrow.addEventListener("click", function (e) {//слушаем эту переменную если происходит клик то вызываем функцию которая при клике добавляет если нет и убирает если есть(toggle) родителю(parentElement) элемента которого слушем класс _active
				menuArrow.parentElement.classList.toggle('_active');

			});
		}

	}
}
//иначе присваиваем класс _pc
else {
	document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');//получаем все объекты с классом .menu__icon
const menuBody = document.querySelector('.menu__body');//получаем все объекты с классом .menu__body
if (iconMenu) {//проверяем на существование объектов .menu__icon
	iconMenu.addEventListener("click", function (e) {//слушаем клик по нним тогда добавляем на них функцию 
		document.body.classList.toggle('_lock');//добавляем класс '_lock' к боди для того чтобы он не скролился при открытии бургера
		iconMenu.classList.toggle('_active');//при добавлении этого класса бургер становится крестиком
		menuBody.classList.toggle('_active');//появляется меню
	});
}


//! Прокрутка при клике
//получаем объекты которые передали data-атрибут
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
//проверка на наличие этих объектов если размер их массива >0 то
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {//двигаясь по ним заносим их в переменную menuLink
		menuLink.addEventListener("click", onMenuLinkClick);// слушаем ее ,если происходит событие клик то выполняем функцию onMenuLinkClick
	});

	function onMenuLinkClick(e) {
		//получаем объект на который кликнули
		const menuLink = e.target;
		//проверяем заполнен ли data-атрибут и существует ли объект на который ссылается данный data-атрибут(т.е правильно ли записан адресс в данном случае класс)
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			//получаем объект 
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			//расчитываем положение этого объекта на странице с учетом высоты шапки(с пом функции getBoundingClientRect().top получаю расстояние от верха до этого объекта+ добавляем количество прокрученных пикселей(pageYOffset)-вычитаю высоту шапки полученную с пом функции offsetHeight)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {//если бургер содержит '_active'
				document.body.classList.remove('_lock');//то при прокрутке удаляем '_lock' для того чтобы тело прокручивалось
				iconMenu.classList.remove('_active');//удаляем '_active' чтобы бургер вернулся в исходное сосотояние
				menuBody.classList.remove('_active');//удаляем '_active' чтобы меню закрылось
			}
			//код который заставляет скролл прокрутиться к нужному месту
			//обращаемся к окну браузера(window) и включаем прокрутку scrollTo
			window.scrollTo({
				top: gotoBlockValue,//определяем откуда надо прокрутиться в данном случае сверху и указывавем на какую величину надо прокрутиться  в данном случае на размер константы которую мы посчитали выше gotoBlockValue
				behavior: "smooth"//плавность прокрутки
			});
			e.preventDefault();//для отключения href адреса в ссылке а для того чтобы она просто прокручивала
		}
	}
}