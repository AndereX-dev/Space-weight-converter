//Space weigth converter

const input = document.querySelector("#numinput")
const unit = document.querySelector("#unitdropdown")
const resultTxt = document.querySelector("#result")

const convertUnit = () => {
    let result = ""

    switch(unit.value) {
        case "Sun":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 27.01)} Kgs on the Sun`
            break
        case "Mercury":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 0.38)} Kgs on Mercury`
            break
        case "Venus":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 0.91)} Kgs on Venus`
            break
        case "Earth":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 1)} Kgs on Earth`
            break
        case "Moon":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 0.166)} Kgs on the Moon`
            break
        case "Mars":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 0.38)} Kgs on Mars`
            break
        case "Jupiter":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 2.34)} Kgs on Jupiter`
            break
        case "Saturn":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 1.06)} Kgs on Saturn`
            break
        case "Uranus":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 0.92)} Kgs on Uranus`
            break
        case "Neptune":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 1.19)} Kgs on Neptune`
            break
        case "Pluto":
            result = `Your weigth (${input.value}Kgs) equals ${(input.value * 0.06)} Kgs on Pluto`
            break
        default:
            result = "Error!"
    }
    resultTxt.textContent = result
}