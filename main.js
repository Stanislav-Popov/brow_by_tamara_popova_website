/** @format */

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("burger-btn")
        .addEventListener("click", function () {
            console.log(document.querySelector(".navbar"))
            document.querySelector("nav").classList.toggle("open")
        })
})  

