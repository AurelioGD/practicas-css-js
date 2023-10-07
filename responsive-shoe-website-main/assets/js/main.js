/*=============== SHOW MENU ===============*/
const SHOW_MENU_CLASS = "show-menu"

const menuIconElement = document.querySelector("#menu-icon")
const menuCloseIconElement = document.querySelector(".menu-close-icon")
const menuContainerElement = document.querySelector(".menu_anchors")
menuIconElement.addEventListener("click", () => {
    menuContainerElement.classList.add(SHOW_MENU_CLASS)
})

menuCloseIconElement.addEventListener("click", () => {
    menuContainerElement.classList.remove(SHOW_MENU_CLASS)
})

const swiper = new Swiper('.swiper', {
    speed: 800,
    spaceBetween: 100,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

const swiperContainer = document.querySelector('.swiper').swiper;
/*=============== REMOVE MENU MOBILE ===============*/


/*=============== SWIPER SHOE ===============*/


/*=============== SHADOW HEADER ===============*/
