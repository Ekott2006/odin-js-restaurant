import {createElement, createListItemElement} from "../helper";

export default function createContactUsPage() {
    const h1Element = createElement('h1', "heading")
    h1Element.textContent = "Get In Touch"

    const h2Element = createElement("h2", "h2")
    h2Element.textContent = "Want to know where The Wandering Wok will be serving up next week's adventure? Follow us on social media!"
    const listElement = createListItemElement([
        {boldText: "Instagram:", text: "@TheWanderingWok"},
        {boldText: "Twitter:", text: "@WWokTruck"},
        {boldText: "Website:", text: "https://www.facebook.com/thewanderingwokcebu/"}
    ], "contact-link-list")
    return [h1Element, h2Element, listElement]
}