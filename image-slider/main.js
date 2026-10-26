let bigImage = document.getElementById("bigImage");

let thumb = document.querySelectorAll(".thumb");

thumb.forEach((thumbs) => {
    thumbs.addEventListener("click", () => {
        bigImage.src = thumbs.src;
    });
});