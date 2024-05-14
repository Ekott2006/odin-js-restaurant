// @ts-ignore
import Image from "./images/pexels-elevate-1267320.jpg";

export const createElement = (tagName: string, className: string) => {
    const elem = document.createElement(tagName)
    elem.className = className;
    return elem;
}

export function createListItemElement(list: { boldText: string | null, text: string }[], className: string = "") {
    const ulElement = createElement("ul", className)
    list.forEach(x => {
        const element = createElement("li", "")
        const bold = createElement("b", "")
        bold.textContent = x.boldText ?? "";
        const span = createElement("span", "")
        span.textContent = x.text;
        if (x.boldText) element.appendChild(bold);
        element.appendChild(span);
        ulElement.appendChild(element)
    });
    return ulElement;
}

export function createPage(content: Element, array: Element[], className: string, addBackgroundImage: boolean = false) {
    content.replaceChildren()
    const page = createElement("div", `${className}-page`)
    if (addBackgroundImage)
        page.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Image})`
    array.forEach(x => page.appendChild(x))
    content.appendChild(page)
}