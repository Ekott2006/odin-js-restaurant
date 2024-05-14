import {createElement} from "../helper";
export default function createHomePage() {
    const h1Element = createElement('h1', "")
    h1Element.textContent = "Wonderful Delights Restaurant"
    const pElement = createElement("p", "")
    pElement.textContent = "The Wandering Wok may not have a brick-and-mortar location, but wherever we park our truck becomes our temporary home"

    return [h1Element, pElement]
}
