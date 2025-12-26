const products = [
    {
        name: "Premium Cotton, Co-ord Set",
        price: 1155,
        image: "images/kurti1.png"
    },
    {
        name: "Grape Wine, Floral",
        price: 799,
        image: "images/kurti2.png"
    },
    {
        name: "Straight Fit Kurti",
        price: 799,
        image: "images/kurti3.png"
    }
];

const container = document.getElementById("products");

products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card fade-in";

    card.innerHTML = `
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
    `;

    container.appendChild(card);
});
