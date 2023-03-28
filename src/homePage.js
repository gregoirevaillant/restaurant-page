const createHomePage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    //Create and append the title of the restaurant
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "The Best Restaurant";
    pageContent.appendChild(title);

    //Create and append the subtitle of the restaurant
    const subtitle = document.createElement("h2");
    subtitle.classList.add("subtitle");
    subtitle.textContent = "The Best Food";
    pageContent.appendChild(subtitle);

    content.appendChild(pageContent);
};

export default createHomePage;
