const createMenuPage = () => {
    const menuItemsList = [
        {
            name: "Chicken",
            price: "$10",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur. Sed euismod, enim at ultrices tincidunt.",
        },
        {
            name: "Beef",
            price: "$15",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur.",
        },
    ];

    const numberItems = menuItemsList.length;
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    for (let i = 0; i < numberItems; i++) {
        const menuTitle = document.createElement("h1");
        menuTitle.textContent = menuItemsList[i].name;
        pageContent.appendChild(menuTitle);

        const menuPrice = document.createElement("h2");
        menuPrice.textContent = menuItemsList[i].price;
        pageContent.appendChild(menuPrice);

        const menuDescription = document.createElement("p");
        menuDescription.textContent = menuItemsList[i].description;
        pageContent.appendChild(menuDescription);
    }
    content.appendChild(pageContent);
};

export default createMenuPage;
