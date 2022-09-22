//При клике на любой объект с классом popup-limnk открывается попап
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
//вызов анимации
const timeout = 800;

// ОТКРЫВАЕМ ПОПАП
//проверяем есть ли попапы
if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', ''); //во всех ссылках убираем хэш что является айди попапа (чистое иимя попапа)
      const currentPopup = document.getElementById(popupName); /// выбираем текущий попап
      popupOpen(currentPopup); // открываем его
      e.preventDefault(); //чтобы ссылка не презагружалась при клике
    });
  }
}

function copyDate() {
let itemSetImg = document.querySelectorAll('.ration__item-set img'); // кнопка в попапе
 if (itemSetImg.length) {

 }
}


// функция переноса контента в попап
const btn = document.querySelectorAll('.ration .item-set__button'); //кнопка вызова попапа
const imagePopup = document.querySelector('.ration_set--popup .preview') //изображение товара в вызываемом попапе с пустым атрибутом src
const imageForm = document.querySelector('.ration_set--form img') //изображение товара в вызываемом попапе с пустым атрибутом src

//const setName = document.querySelector('.ration .item-set__set-name') // наименование товара со страницы
//const subТame = document.querySelector('.ration .item-set__subname') //контентт со страницы

if (btn.length > 0) {
  for (let index = 0; index < btn.length; index++) {
    const el = btn[index];
    el.addEventListener('click', function (e) { // при клике
      let img = el.closest('.item-set__body').firstElementChild.firstElementChild; // обращаемся к тегу img в вызываемом попапе
      imagePopup.src = img.src ; // копируем изображение со страницы сайта в попап
      imageForm.src = img.src ; // копируем изображение со страницы сайта в форму попапа
      let bodyItem = this.closest('.item-set__body'); // обращаемся к карточке товара, на который кликнули
      let setName = bodyItem.querySelector('.item-set__set-name') //обращаемся к названию товара в этой карточке
      let subName = bodyItem.querySelector('.item-set__subname')//обращаемся к контенту товара в этой карточке
      let setNamePopup = document.querySelector('.ration_set--popup .item-set__set-name') //обращаемся к контенту товара в попапе
      let subNamePopup = document.querySelector('.ration_set--popup .item-set__set-subname')//обращаемся к контенту товара в попапе
      let setNameForm = document.querySelector('.ration_set--form .item-set__set-name') //обращаемся к контенту товара в форме попапе
      let subNameForm = document.querySelector('.ration_set--form .item-set__set-subname')//обращаемся к контенту товара в форме попапе
      setNamePopup.innerHTML = setName.innerHTML; // копирование
      subNamePopup.innerHTML = subName.innerHTML; // копирование
      setNameForm.innerHTML = setName.innerHTML; // копирование
      subNameForm.innerHTML = subName.innerHTML; // копирование
    });
  }
}

// ЗАКРЫВАЕМ ПОПАП
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    })
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  // убираем скролл ПОСЛЕ анимации
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}


//////СЕТ М
////let setM = document.querySelector('#set-M');
////let popup = document.querySelector('.popup');
////setM.onclick = function () {
////  popup.classList.toggle('_appear')
////  document.body.classList.toggle('_lock');
////}
//////ЗАКРЫТЬ ПОПАП
////let close = document.querySelector('.popup__close');
////close.onclick = function () {
////  popup.classList.remove('_appear');
////  document.body.classList.toggle('_lock');
////}

//////let popup__body = document.querySelector('.popup__body');
//////document.onclick = function ()  {
//////  popup.classList.remove('_appear');
//////}

////document.addEventListener('click', function (e) {
////  var target = e.target;
////  it_is_popup = target == popup;
////  if (!it_is_popup) {
////    popup.classList.remove('_appear');
////}
////})
