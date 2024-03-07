const close = document.querySelector(".close");
const imgs = document.querySelectorAll(".project");
const info = document.querySelector(".detailes");
for (let i = 0; i < imgs.length;i++){
    imgs[i].addEventListener("click", function () {
        info.classList.remove("hidden");
        console.log(imgs[i])
    })
}
close.addEventListener("click", function () {
    info.classList.add("hidden")
})