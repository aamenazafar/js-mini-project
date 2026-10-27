let menuClick = document.getElementById("menu-bar");

let menuShow = document.getElementById("menu-open");

menuClick.addEventListener("click", () => {
    menuShow.classList.add("open-menu");
});
document.getElementById("closebtn").addEventListener("click", () => {
    menuShow.classList.remove("open-menu");})