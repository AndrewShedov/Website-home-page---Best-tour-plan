// import Swiper slider bundle with all modules installed
import Swiper from 'swiper/bundle';
// import Swiper slider
import 'swiper/css/bundle';

let burger = document.getElementById("burger");
let menuMobile = document.getElementById("menu_mobile");
let wrap = document.getElementById("wrap");
let UpButton = document.getElementById("UpButton");

///////////////Function opening menu mobile
function calcShowMenu(showMenu) {
  burger.classList.toggle("burger-open", showMenu);
  menuMobile.classList.toggle("menu_mobile-open", showMenu);
  menuMobile.classList.toggle("menuMoveLeft", showMenu);

  const menuWidth = menuMobile.offsetWidth;
  [wrap.style, burger.style, UpButton.style].map(
    (v) => (v.transform = `translateX(${showMenu ? -menuWidth + 1 : 0}px)`)
  );

  [burger.style].map(
    (v) => (v.transform = `translateX(${showMenu ? -menuWidth - 25 : 0}px)`)
  );
}

let showMenu = false;
/////////////////Pressing a Burger
burger.addEventListener("click", () => calcShowMenu((showMenu = !showMenu)));
/////////////Closing when pressed outside the menu mobile
window.addEventListener("mousedown", (event) => {
  if (!event.target.closest(".menu_mobile, .burger")) calcShowMenu((showMenu = false));
});

/////////////Closing when pressed outside the menu mobile for mobile
window.addEventListener("touchstart", (event) => {
  if (!event.target.closest(".menu_mobile, .burger")) calcShowMenu((showMenu = false));
});

/////////////Closing when you click on a menu mobile item
document.getElementById("menu_mobile").onclick = function (event) {
  var target = event.target;
  if (target.tagName == "A") {
    calcShowMenu((showMenu = !showMenu));
  }
};

/*Menu scrolling*/

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  let nav = document.querySelector("nav");
  let li = document.querySelectorAll("nav  ul  li");

  if (scrollTop >= 180) {
    li.forEach((el) => (el.style.height = "55px"));
    nav.style.height = "55px";
  } else {
    nav.style.height = "80px";
    li.forEach((el) => (el.style.height = "80px"));
  }
});

// Up Button
function scrollTo(to, duration = 700) {
  const element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}
let btn = document.querySelector(".up_button");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
btn.onclick = function (click) {
  click.preventDefault();
  scrollTo(0, 200);
};

//Gallery slider
const galleryButtons = Array.from(document.querySelectorAll(".hotel_information_gallery_menu ul li"));
const gallerySlide = Array.from(document.querySelectorAll(".hotel_information_gallery_slide"));
galleryButtons[0].classList.add("active");
gallerySlide[0].classList.add("active");
let activeButton = galleryButtons[0];
let activeSlide = gallerySlide[0];
galleryButtons.forEach((e) => {
  e.addEventListener("click", buttonClick);
});
function buttonClick(e) {
  e.preventDefault();
  const button = e.target.closest(".hotel_information_gallery_menu ul li");
  changeButton(button);
}
function changeButton(button) {
  if (button.classList.contains("active")) {
    return;
  }
  activeButton.classList.remove("active");
  button.classList.add("active");
  activeButton = button;
  changeButtonIndex(button);
}
function changeButtonIndex(button) {
  const indexButton = galleryButtons.indexOf(button);
  changeSlide(indexButton);
}
function changeSlide(index) {
  activeSlide.classList.remove("active");
  gallerySlide[index].classList.add("active");
  activeSlide = gallerySlide[index];
}

const mySwiper = new Swiper('.swiper_container_1', {
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: '.swiper_1_slider_button_next',
    prevEl: '.swiper_1_slider_button_prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }
});

const mySwiper2 = new Swiper('.people_thinks_swiper', {
  loop: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.swiper_2_button_next',
    prevEl: '.swiper_2_button_prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }
});

const mySwiper3 = new Swiper('.other_activities_slider', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 29,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    410: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    685: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 4,
      spaceBetween: 29,
    }
  },
  speed: 8000,
  autoplay: {
    delay: false,
    pauseOnMouseEnter: true,
  },

});















