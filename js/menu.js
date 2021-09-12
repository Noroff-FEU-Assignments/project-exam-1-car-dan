const nav = document.querySelectorAll("#navbar");

function fixnavbar() {
    if (window.scrollY > 0) {
        document.body.classList.add("fixed-nav");
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
}
window.addEventListener("scroll", fixnavbar);