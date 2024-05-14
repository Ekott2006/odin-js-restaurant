import {createElement} from "../helper";
// @ts-ignore
import Image from  "./../images/pexels-ash-122861-376464.jpg"
export default function createMenuPage() {
    const imgElement = createElement('img', "menu-img") as HTMLImageElement
    imgElement.src = Image;
    const h2Element = createElement("h2", "")
    h2Element.textContent = "Japanese Soufflé Pancakes (Hotcakes)"
    const pElement = createElement("p", "")
    pElement.textContent = "Fluffy, light pancakes dusted with powdered sugar and drizzled with a sweet maple syrup glaze."
    return [imgElement, h2Element, pElement]
}
