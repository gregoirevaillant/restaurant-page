import createHomePage from "./homePage";
import createMenuPage from "./menuPage";
import createContactPage from "./contactPage";

const createHeader = () => {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    content.appendChild(header);

    const titleHolder = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "tthàn cang-tin";
    titleHolder.appendChild(title);
    header.appendChild(titleHolder);

    const nav = document.createElement("nav");

    const home = document.createElement("button");
    home.textContent = "Home";
    const menu = document.createElement("button");
    menu.textContent = "Menu";
    const contact = document.createElement("button");
    contact.textContent = "Contact";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    header.appendChild(nav);

    menu.setAttribute("id", "menu");
    home.setAttribute("id", "home");
    contact.setAttribute("id", "contact");

    home.classList.add("active");

    header.addEventListener("click", (e) => {
        if (e.target.id === "home") {
            clearPage();
            home.classList.add("active");
            menu.classList.remove("active");
            contact.classList.remove("active");
            createHomePage();
        } else if (e.target.id === "menu") {
            clearPage();
            home.classList.remove("active");
            menu.classList.add("active");
            contact.classList.remove("active");
            createMenuPage();
        } else if (e.target.id === "contact") {
            clearPage();
            home.classList.remove("active");
            menu.classList.remove("active");
            contact.classList.add("active");
            createContactPage();
        }
    });

    function clearPage() {
        const content = document.querySelector("#content");
        const pageContent = document.querySelector(".page-content");
        if (pageContent) {
            content.removeChild(pageContent);
        }
    }
};

export default createHeader;
