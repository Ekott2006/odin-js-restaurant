import {createElement} from "../helper";

export default function createAboutUsPage() {
    const h1Element = createElement('h1',  "heading")
    h1Element.textContent = "About Us"
    const textElem = createElement("p",  "")
    textElem.textContent = "The Wandering Wok isn't your typical restaurant. We're a traveling culinary adventure, bringing the exotic flavors of the world to your doorstep... well, almost! We set up our vibrant food truck in a different location every week, offering a taste of a new culture through delicious and authentic cuisine.Our owner and chef, Marco Polo (yes, really!), has spent years traveling the globe, collecting recipes and techniques from the hidden gems of every continent. Now, he's sharing his passion for global gastronomy with you, one delicious dish at a time."
    return [h1Element, textElem]
}