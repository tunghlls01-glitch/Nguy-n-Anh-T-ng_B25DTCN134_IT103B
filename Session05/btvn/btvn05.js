let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let size = +prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");
while (isNaN(size) || size < 0) {
    size = +prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");
}

for (let i = 0; i < size; i++) {
    //nhập id
    let id = prompt(`Nhập mã sách thứ ${i + 1}: `);
    while (!id || booksId.includes(id)) {
        if (!id) {
            id = prompt("Mã sách không được để trống. Nhập lại:");
        } else {
            id = prompt("Mã sách đã tồn tại. Nhập mã khác:");
        }
    }
    booksId.push(id);
    //tên
    let name = prompt(`Nhập tên sách thứ ${i + 1}:`);
    while (!name) {
        name = prompt(`Nhập tên sách không để trống`);
    }
    booksName.push(name);
    //thể loại
    let category = prompt(`Nhập các thể loại của sách thứ ${i + 1} (các thể loại cách nhau bởi dấu phẩy):`);
    let categories = category.split(",");
    booksCategory.push(categories);
    booksCategory.push(["Lập trình", "JavaScript", "Web"]);
    //tồn kho
    let quantity = +prompt("Nhập số lượng tồn kho (≥ 0)");
    while (quantity < 0) {
        quantity = +prompt("Nhập số lượng tồn kho (≥ 0)");
    }
    inventoryQuantity.push(quantity);
}
// in
let count = 0;

for (let i = 0; i < size; i++) {
    for (let j = 0; j < booksCategory[i].length; j++) {
        if (booksCategory[i][j].toLowerCase().includes("lập trình")) {
            count++;
            break;
        }
    }
}

console.log(`Tổng số sách thuộc thể loại "Lập trình": ${count}`);

console.log('Các mã sách thuộc cả "JavaScript" và "Web":');

for (let i = 0; i < size; i++) {
    let flagJavascript = false;
    let flagWeb = false;
    for (let j = 0; j < booksCategory[i].length; j++) {
        let category = booksCategory[i][j].toLowerCase();
        if (category === "javascript") {
            flagJavascript = true;
        }
        if (category === "web") {
            flagWeb = true;
        }
    }

    if (flagJavascript === true && flagWeb === true) {
        console.log(booksId[i]);
    }
}

let minIndex = 0;

for (let i = 1; i < size; i++) {
    if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
        minIndex = i;
    }
}

console.log("Sách có số lượng tồn kho thấp nhất:");
console.log(
    `Mã sách: ${booksId[minIndex]} - Tên sách: ${booksName[minIndex]} - Tồn kho: ${inventoryQuantity[minIndex]}`
);
