const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 }
];

// hiển thị danh sách sản phẩm
function renderProducts() {

    let html = "";

    for (let i = 0; i < products.length; i++) {
        html += `
            <li>
                <div class="product">
                    <p>Tên: ${products[i].name}</p>
                    <p>Giá: ${products[i].price} VND</p>
                </div>
            </li>
        `;
    }

   document.getElementById("product-list").innerHTML = html;
}
renderProducts();
     
let form = document.getElementById("product-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("product-name").value;
    let price = document.getElementById("product-price").value;

    let newProduct = {
        id: Date.now(),
        name: name,
        price: price
    };

    products.push(newProduct);

    renderProducts();

    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
});