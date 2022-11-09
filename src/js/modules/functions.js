// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
console.log("functions.js");

export let bodyLockStatus = true;

export let bodyLockToggle = (delay = 500) => {
  if (document.documentElement.classList.contains("lock")) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};

export let bodyUnlock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
	  const lockPadding = document.querySelectorAll('.lock-padding');
    setTimeout(() => {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
      body.style.paddingRight = "0px";
      document.documentElement.classList.remove("lock");
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
export let bodyLock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
	const lockPadding = document.querySelectorAll('.lock-padding');

    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight =
        window.innerWidth -
        document.querySelector(".wrapper").offsetWidth +
        "px";
    }
    body.style.paddingRight =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    document.documentElement.classList.add("lock");

    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};

export function menuInit() {
  const menuBody = document.querySelector(".menu__body");
  const iconMenu = document.querySelector(".icon-menu");
  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      if (bodyLockStatus && e.target.closest(".icon-menu")) {
        bodyLockToggle();
        iconMenu.classList.toggle("menu-open");
        menuBody.classList.toggle("__active-menu--burger");
      }
    });
  }

  const menuLink = document.querySelectorAll(".menu__link");
  menuLink.forEach((element) => {
    element.addEventListener("click", function (e) {
      menuClose();
      console.log('click');
    });
  });
}
export function menuClose() {
  const menuBody = document.querySelector(".menu__body");
  const iconMenu = document.querySelector(".icon-menu");
  bodyUnlock(500);
  menuBody.classList.remove("__active-menu--burger");
  iconMenu.classList.remove("menu-open");
}

//SHOWMORE
//========================================================================================================================================================
export function showMore() {
  window.addEventListener("load", function (e) {
    document.addEventListener("click", function (e) {
      const targetEvent = e.target;
      const showMoreButton = targetEvent.closest("[data-showmore-button]");
      if (showMoreButton) {
        console.log("showmoreClick");
        const showMoreBlock = showMoreButton.closest("[data-showmore]");
        const showMoreContent = showMoreBlock.querySelector(
          "[data-showmore-content]"
        );
        if (!showMoreContent.classList.contains("_showmore-active")) {
          showMoreContent.classList.add("_showmore-active");
          showMoreButton.classList.remove("_showmore-active");
        } else {
          showMoreContent.classList.remove("_showmore-active");
        }
      }
    });
  });
}
