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

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== SWIPER SHOE ===============*/


/*=============== SHADOW HEADER ===============*/
