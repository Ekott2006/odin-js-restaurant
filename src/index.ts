import "./css/reset.css"
import "./css/styles.css"

import createAboutUsPage from "./pages/about";
import createMenuPage from "./pages/menu";
import createHomePage from "./pages/home";
import createContactUsPage from "./pages/contact-us";
import {createPage} from "./helper";
// @ts-ignore
import Image from "./images/pexels-elevate-1267320.jpg";

const homePage = document.querySelector("#home") as HTMLButtonElement
const aboutPage = document.querySelector("#about") as HTMLButtonElement
const menuPage = document.querySelector("#menu") as HTMLButtonElement
const contactUsPage = document.querySelector("#contact-us") as HTMLButtonElement
const content = document.querySelector("#content")

homePage.onclick = () => createPage(content, createHomePage(), "home",true)
aboutPage.onclick = () => createPage(content, createAboutUsPage(), "about")
menuPage.onclick = () => createPage(content, createMenuPage(), "menu")
contactUsPage.onclick = () => createPage(content, createContactUsPage(), "contact")

homePage.click();