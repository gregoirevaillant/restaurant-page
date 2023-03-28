import createHomePage from "./homePage";
import createMenuPage from "./menuPage";
import createContactPage from "./contactPage";

const createHeader = () => {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    content.appendChild(header);

    const home = document.createElement("button");
    home.textContent = "Home";
    header.appendChild(home);

    const menu = document.createElement("button");
    menu.textContent = "Menu";
    header.appendChild(menu);

    const contact = document.createElement("button");
    contact.textContent = "Contact";
    header.appendChild(contact);

    menu.setAttribute("id", "menu");
    home.setAttribute("id", "home");
    contact.setAttribute("id", "contact");

    header.addEventListener("click", (e) => {
        if (e.target.id === "home") {
            clearPage();
            createHomePage();
        } else if (e.target.id === "menu") {
            clearPage();
            createMenuPage();
        } else if (e.target.id === "contact") {
            clearPage();
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
