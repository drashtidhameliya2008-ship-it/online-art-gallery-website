const menuOpen = document.getElementById("menu-open-button");
const menuClose = document.getElementById("menu-close-button");

if(menuOpen && menuClose){
    menuOpen.addEventListener("click", () => {
        document.body.classList.add("show-mobile-menu");
    });

    menuClose.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
}
function scrollToGallery() {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
}