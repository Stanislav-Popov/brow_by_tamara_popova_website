/** @format */

const callbackBtn = document.getElementById("callback-btn")
const servicesPreviewBtn1 = document.getElementById("services-preview-item-btn1")
const servicesPreviewBtn2 = document.getElementById("services-preview-item-btn2")
const servicesPreviewBtn3 = document.getElementById("services-preview-item-btn3")
const callbackModalCloseBtn = document.getElementById("modal-about-me-btn")

// document.addEventListener("DOMContentLoaded", function () {
//     document
//         .getElementById("burger-btn")
//         .addEventListener("click", function () {
//             console.log(document.querySelector(".navbar"))
//             document.querySelector("nav").classList.toggle("open")
//         })
// })

callbackBtn.onclick = function () {
    console.log(document.querySelector(".modal-about-me"))
    document.querySelector(".modal-about-me").classList.add("show")
}
callbackModalCloseBtn.onclick = function () {
    console.log(document.querySelector(".modal-about-me"))
    document.querySelector(".modal-about-me").classList.remove("show")
}

servicesPreviewBtn1.onclick = function () {
    window.open("https://t.me/brow_by_me")
}
servicesPreviewBtn2.onclick = function () {
    window.open("https://t.me/brow_by_me")
}
servicesPreviewBtn3.onclick = function () {
    window.open("https://t.me/brow_by_me")
}
