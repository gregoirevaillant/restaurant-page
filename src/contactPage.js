const createContactPage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
    pageContent.appendChild(contactTitle);

    const contactInfo = document.createElement("p");
    contactInfo.textContent = "Phone: 555-555-5555";
    pageContent.appendChild(contactInfo);

    content.appendChild(pageContent);
};

export default createContactPage;
