let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let count = 0;       
let temp = [];      

let size = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?");

while (isNaN(size) || size < 0) {
    size = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?");
}

for (let i = 0; i < size; i++) {

    // nhập mã sách
    let id = prompt("Nhập mã sách (không được để trống)");
    while (!id) {
        id = prompt("Nhập mã sách (không được để trống)");
    }
    booksId.push(id);

    // nhập tên sách
    let name = prompt("Nhập tên sách (không được để trống)");
    while (!name) {
        name = prompt("Nhập tên sách (không được để trống)");
    }
    booksName.push(name);

    // nhập số lượng
    let quantity = +prompt("Nhập số lượng tồn kho hiện tại (số nguyên ≥ 0)");
    while (isNaN(quantity) || quantity < 0) {
        quantity = +prompt("Nhập số lượng tồn kho hiện tại (số nguyên ≥ 0)");
    }
    inventoryQuantity.push(quantity);
}

console.log(`Danh sách cần xem xét bổ sung: ${booksId.length}`);

for (let i = 0; i < size; i++) {
    console.log(`${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - còn: ${inventoryQuantity[i]} bản`);
}

for (let i = 0; i < size; i++) {
    if (inventoryQuantity[i] <= 5) {
        count++;
    }
    if (inventoryQuantity[i] === 0) {
        temp.push(booksId[i]);
    }
}

console.log(`Số sách còn tồn kho <= 5 bản: ${count} loại`);
console.log(`Các mã sách đã hết hàng (0 bản): ${temp.join(", ")}`);
