 // Select Menu Button
let menuClick = document.getElementById("menu-bar");

// Select Menu Container
let menuShow = document.getElementById("menu-open");

// Select Close Button
let closeBtn = document.getElementById("closebtn");

// Open Menu
menuClick.addEventListener("click", () => {
    menuShow.classList.add("open-menu");
});

// Close Menu
closeBtn.addEventListener("click", () => {
    menuShow.classList.remove("open-menu");
});