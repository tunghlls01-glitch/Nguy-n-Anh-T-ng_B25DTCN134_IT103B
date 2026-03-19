let products = [
    {id: 1, name: "Tai nghe Bluetooth TWS" , describe: "Chống ồn nhẹ, pin 20h, kết nối ổn định", price: 320000, src: "https://picsum.photos/seed/mp19-tws/1200/800"},
    {id: 2, name: "Bàn phím cơ 87 phím" , describe: "Switch blue, led trắng, gõ sướng tay", price: 790000, src: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60"},
    {id: 3, name: "Chuột không dây công thái học" , describe: "Thiết kế ergonomic, sạc USB-C", price: 450000, src: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60"},
    {id: 4, name: "USB 64GB" , describe: "Nhỏ gọn, tốc độ đọc/ghi ổn định", price: 120000, src: "https://picsum.photos/seed/mp19-usb/1200/800"},
    {id: 5, name: "Đế tản nhiệt laptop" , describe: "2 quạt gió, đỡ mỏi cổ tay", price: 210000, src: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60"},
    {id: 6, name: "Cáp sạc Type-C 1m" , describe: "Bọc dù, hỗ trợ sạc nhanh", price: 80000, src: "https://picsum.photos/seed/mp19-cable/1200/800"}
];

let carts = [];
localStorage.setItem("products", JSON.stringify(products));
localStorage.setItem("carts", JSON.stringify(carts));
//hiển thị products
function renderProducts() {
    let producstGrid = document.getElementById(`products-grid`);
    let productCountBadge = document.getElementById(`product-count-badge`);
    productCountBadge.innerText = `${products.length} sản phẩm`;
    let html = "";
    for(let i = 0; i < products.length; i++){
        html += `
            <article class="card">
              <div class="card-img">
                <img
                  src=${products[i].src}
                  alt="${products[i].name}"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3 class="card-title">${products[i].name}</h3>
                <p class="card-desc">${products[i].describe}.</p>
                <div class="card-footer">
                  <div class="price">${products[i].price.toLocaleString()} VNĐ</div>
                  <button class="btn btn-primary" onclick="addCart(${i})">Thêm vào giỏ</button>
                </div>
              </div>
            </article>
        `
    }
    producstGrid.innerHTML = html;
};
renderProducts();
// thêm giỏ hàng
function addCart(index) {
  let product = products[index];
  let check = carts.find((value) => value.id === product.id)
  if (check){
    check.quantity += 1;
  } else {
    carts.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }
  localStorage.setItem("carts", JSON.stringify(carts));
  renderCart();
}
//Hiển thị cart 
function renderCart () {
    let cartTbody = document.getElementById("cart-tbody");
    let cartLinesBadge = document.getElementById("cart-lines-badge");
    let cartQtyBadge = document.getElementById("cart-qty-badge");
    cartLinesBadge.innerText = `${carts.length} dòng`;
    let statLines = document.getElementById("stat-lines");
    let statQty = document.getElementById("stat-qty");
    let statTotal = document.getElementById("stat-total");
    statLines.innerText = `${carts.length}`;
    //tính tổng số lượng và món
    let sumQty = carts.reduce((acc, cur)=>{
        return acc + cur.quantity;
    }, 0);
    statQty.innerText = `${sumQty}`;
    cartQtyBadge.innerText= `${sumQty} món`;
    // tính tổng tiền
    let sumPrice = carts.reduce((acc, cur)=>{
        return acc + cur.price * cur.quantity;
    }, 0);
    statTotal.innerText = `${sumPrice.toLocaleString()}`;
    let html ="";
    for(let i = 0; i < carts.length; i++) {
      html += `
        <tr>
                  <td>${carts[i].name}</td>
                  <td class="right">${carts[i].price.toLocaleString()} VNĐ</td>
                  <td class="center"><button onclick="reduceQty(${i})">-</button>${carts[i].quantity}<button onclick="increaseQty(${i})">+</button></td>
                  <td class="right">${(carts[i].price * carts[i].quantity).toLocaleString()} VNĐ</td>
                  <td class="center"><button onclick="ondelete(${i})">Xóa</button></td>
                </tr>
      `
    };
    cartTbody.innerHTML = html;
}
renderCart();

// xóa sp
function ondelete(index) {
  let check = confirm(`Bạn có muốn xóa sản phẩm "${carts[index].name}" không? `);
  if (check) {
    carts.splice(index, 1);
    localStorage.setItem("carts", JSON.stringify(carts));
    renderCart();
  }
}
//xóa toàn bộ 
function deleteCarts() {
  let check = confirm(`Bạn có muốn xóa toàn bộ sản phẩm không? `);
  if (check) {
    carts = [];
    localStorage.setItem("carts", JSON.stringify(carts));
    renderCart();
  }
}

// nút +
function increaseQty(index) {
    carts[index].quantity += 1;
    localStorage.setItem("carts", JSON.stringify(carts));
    renderCart();
}
// nút -
function reduceQty(index) {
  if (carts[index].quantity > 1) {
    carts[index].quantity--;
  } else {
    carts.splice(index,1);
  }
  localStorage.setItem("carts", JSON.stringify(carts));
  renderCart();
}