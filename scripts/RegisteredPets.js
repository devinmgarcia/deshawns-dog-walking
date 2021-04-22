import { findWalker } from "./Assignments.js"
import { getPets, getWalkers } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split('--')
            const pet = pets.filter(
                (pet) => {
                    if (pet.id === parseInt(petId)) {
                        return true
                    }
                }
            )
            const walker = findWalker(pet[0], walkers)

            window.alert(`${pet[0].name} is being walked by ${walker.name}.`)

        }
    }
)

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}