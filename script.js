const button = document.querySelector(".read-btn");

button.addEventListener("click", () => {
    document.getElementById("featured-poem").scrollIntoView({
        behavior: "smooth"
    });
});