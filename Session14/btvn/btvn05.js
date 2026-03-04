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
            <li class="product-item">
                <div class="product">
                    <p class="product-name">Tên: ${products[i].name}</p>
                    <p>Giá: ${products[i].price} VND</p>
                    <button class="delete-btn" onclick="deleteProduct(${i})">Xóa</button>
                    <button onclick="editPrice(${i})" class="edit-price-btn">Sửa giá</button>
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
// xoá
function deleteProduct(index) {
    let check = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (check) {
        products.splice(index, 1);
        renderProducts();
    }
}

// sửa giá
function editPrice(index) {
    let newPrice = prompt("Nhập giá mới:");
    products[index].price = Number(newPrice);
    renderProducts();
}

//tìm sản phẩm
let search = document.getElementById("search-input");

search.addEventListener("input", function(){

    let keyword = this.value.toLowerCase();

    let items = document.querySelectorAll(".product-item");

    items.forEach(function(item){

        let text = item.querySelector(".product-name").innerText.toLowerCase();

        if(text.includes(keyword)){
            item.style.display = "";
        }else{
            item.style.display = "none";
        }

    });

});