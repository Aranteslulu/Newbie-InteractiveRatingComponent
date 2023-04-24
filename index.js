const rating_buttons = document.querySelectorAll(".rating-btn")
const submit = document.querySelector(".submit-btn")
const rating_area = document.querySelector(".rating-area")
const thanks_area = document.querySelector(".thanks-area")
const rate = document.querySelector(".number-of-rate")
let rating = null


rating_buttons.forEach((rating_button) => {
    rating_button.addEventListener("click", (e) => {
        const active = document.querySelector(".checked")

        if(active) {
            active.classList.remove("checked")
        }

        const event = e.target
        event.classList.add("checked")
        rating = e.target.innerText
    })
})

submit.addEventListener("click", () => {
    if (rating) {
        rate.innerText = rating
        thanks_area.classList.remove("hidden")
        rating_area.classList.add("hidden")
    }
})



function reset() {
    addEventListener('click', () => {
        location.reload()
    })
}