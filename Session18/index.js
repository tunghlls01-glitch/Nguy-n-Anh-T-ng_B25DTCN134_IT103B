let products = [
    { id: 1, name: "Cá chuối", category: "Điện tử", price: 23000, quantity: 12, describe: "Sekio" },
];
products = JSON.parse(localStorage.getItem("products")) || [];
let editId = null;
//Hiển thị sản phẩm 
function displayProducts() {
    let tbody = document.getElementById("productTableBody");
    let emptyState = document.getElementById("emptyState");
    let totalProducts = document.getElementById("totalProducts");
    totalProducts.innerText = `${products.length}`
    let totalValue = document.getElementById("totalValue");
    let checkTotalValue = products.reduce((acc, cur)=>{
            return acc + cur.price * cur.quantity;
    },0);
    totalValue.innerText=`${checkTotalValue.toLocaleString()}đ`;
    let totalQuantity = document.getElementById("totalQuantity");
    let checkTotalQty = products.reduce((acc, cur)=>{
        return acc + cur.quantity;
    },0);
    totalQuantity.innerText=`${checkTotalQty}`

    if (products.length === 0) {
        tbody.innerHTML = "";
        emptyState.style.display = "block";
        emptyState.innerHTML = `
            <div class="empty-state-icon">📦</div>
            <div class="empty-state-text">
              Chưa có sản phẩm nào. Hãy thêm sản phẩm mới!
            </div>
        `
    } else {
        let str = "";
        for (let i = 0; i < products.length; i++) {
            str += `
            <tr>
                <td>${products[i].id}</td>
                <td><strong>${products[i].name}</strong></td>
                <td>${products[i].category}</td>
                <td class="price">${products[i].price.toLocaleString()}₫</td>
                <td class="quantity">${products[i].quantity}</td>
                <td class="description">${products[i].describe}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct(${products[i].id})">
                      ✏️ Sửa
                    </button>
                    <button class="btn-delete" onclick="deleteProductById(${products[i].id})">
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
              </tr>
        `
        };
        tbody.innerHTML = str;
        emptyState.style.display = "none";
        localStorage.setItem("products", JSON.stringify(products));
    }
};
displayProducts();
//thêm sản phẩm
document.getElementById("productForm").addEventListener("submit", addProducts);
function addProducts(event) {
    event.preventDefault();
    let name = document.getElementById("productName").value;
    let category = document.getElementById("productCategory").value;
    let price = document.getElementById("productPrice").value;
    let quantity = document.getElementById("productQuantity").value;
    let describe = document.getElementById("productDescription").value;
    let newProducts = {
        id: editId ? editId : Date.now(),
        name,
        category,
        price: Number(price),
        quantity: Number(quantity),
        describe
    };
    if (editId) {
        products = products.map(p => p.id === editId ? newProducts : p);
        editId = null;
    } else {
        products.push(newProducts);
    }
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
    document.getElementById("productForm").reset();
    document.getElementById("formTitle").innerText = "Thêm Sản Phẩm Mới";
    document.getElementById("submitBtn").innerText = "➕ Thêm Sản Phẩm";
    document.getElementById("cancelBtn").style.display = "none";
}

//xóa từng sp
function deleteProductById(id) {
    let index = products.findIndex(p => p.id === id);
    if (index === -1) return;
    let check = confirm(`Bạn có muốn xóa sản phẩm "${products[index].name}" không?`);
    if (check) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        displayProducts();
    }
}
//Xóa tất cả 
document.getElementById("clearAllBtn").addEventListener("click", deleteAll);
function deleteAll() {
    let check = confirm("Bạn có muốn xóa toàn bộ sản phẩm không? ");
    if (check) {
        products = [];
        localStorage.setItem("products", JSON.stringify(products));
        displayProducts();
    } else {
        alert("Đã hủy thao tác");
    }
}
// sửa sản phẩm
function editProduct(id) {
    let product = products.find(p => p.id === id);
    document.getElementById("productName").value = product.name;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productQuantity").value = product.quantity;
    document.getElementById("productDescription").value = product.describe;
    editId = id;
    document.getElementById("formTitle").innerText = "Chỉnh Sửa Sản Phẩm";
    document.getElementById("submitBtn").innerText = "Cập Nhật";
    document.getElementById("cancelBtn").style.display = "inline-block";
}

// nút hủy
document.getElementById("cancelBtn").onclick = function () {
    editId = null;
    document.getElementById("productForm").reset();
    document.getElementById("formTitle").innerText = "Thêm Sản Phẩm Mới";
    document.getElementById("submitBtn").innerText = "➕ Thêm Sản Phẩm";
    document.getElementById("cancelBtn").style.display = "none";
};

// tìm kiếm
function filterProduct() {
    let keyword = document.getElementById("searchInput").value.trim().toLowerCase();
    let category = document.getElementById("filterCategory").value;
    let filter = products.filter((product) => {
        let matchKeyword =
            product.name.toLowerCase().includes(keyword) ||
            product.describe.toLowerCase().includes(keyword);
        let matchCategory =
            category === "" || product.category === category;
        return matchKeyword && matchCategory;
    });
    renderFilter(filter);
}
document.getElementById("searchInput").addEventListener("input", filterProduct);
document.getElementById("filterCategory").addEventListener("change", filterProduct);
//hàm hiển thị lọc
function renderFilter(list) {
    let tbody = document.getElementById("productTableBody");
    let emptyState = document.getElementById("emptyState");

    if (list.length === 0) {
        tbody.innerHTML="";
        emptyState.style.display = "block";
        emptyState.innerHTML =`
            <div class="empty-state-icon">📦</div>
            <div class="empty-state-text">
              Không tìm thấy sản phẩm phù hợp
            </div>
        `
    } else {
        let html = "";
        for(let i = 0; i < list.length; i++) {
            html += `
                <tr>
                <td>${list[i].id}</td>
                <td><strong>${list[i].name}</strong></td>
                <td>${list[i].category}</td>
                <td class="price">${list[i].price.toLocaleString()}₫</td>
                <td class="quantity">${list[i].quantity}</td>
                <td class="description">${list[i].describe}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct(${list[i].id})">
                      ✏️ Sửa
                    </button>
                    <button class="btn-delete" onclick="deleteProductById(${list[i].id})">
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
              </tr>
            `
        }
        tbody.innerHTML = html;
        emptyState.style.display = "none";
    };
};
