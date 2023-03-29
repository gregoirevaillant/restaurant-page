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
        {
            name: "Beef",
            price: "$15",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur.",
        },
        {
            name: "Beef",
            price: "$15",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur.",
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
    ``;

    const dishes = document.createElement("div");
    dishes.classList.add("dishes");

    for (let i = 0; i < numberItems; i++) {
        const dish = document.createElement("div");
        dish.classList.add("dish");

        const menuTitle = document.createElement("h1");
        menuTitle.classList.add("menu-title");
        menuTitle.textContent = menuItemsList[i].name;
        dish.appendChild(menuTitle);

        const menuPrice = document.createElement("h2");
        menuPrice.classList.add("menu-price");
        menuPrice.textContent = menuItemsList[i].price;
        dish.appendChild(menuPrice);

        const menuDescription = document.createElement("p");
        menuDescription.classList.add("menu-description");
        menuDescription.textContent = menuItemsList[i].description;
        dish.appendChild(menuDescription);

        dishes.appendChild(dish);
    }
    pageContent.appendChild(dishes);
    content.appendChild(pageContent);
};

export default createMenuPage;