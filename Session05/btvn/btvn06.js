let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let size = +prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?");

for (let i = 0; i < size; i++) {
    console.log(`Nhập thông tin người thứ ${i + 1}`);
    //id
    let id = prompt(`Nhập mã sách thứ ${i + 1}: `);
    while (!id || readerCardIds.includes(id)) {
        if (!id) {
            id = prompt("Mã sách không được để trống. Nhập lại:");
        } else {
            id = prompt("Mã sách đã tồn tại. Nhập mã khác:");
        }
    }
    readerCardIds.push(id);
    //tên 
    let name = prompt("Nhập tên bạn đọc:");
    readerNames.push(name);
    //chuỗi
    let booksInput = prompt("Nhập các mã sách (cách nhau dấu phẩy):");
    borrowedBookCodes.push(booksInput);
    //ngày 
    let day = +prompt("Nhập số ngày quá hạn:");
    overdueDays.push(day);
}
// xử lý
//a đếm hạn quá 10 ngày
let countReading = 0;
for (let i = 0; i < size; i++) {
    if (overdueDays[i] >= 10) {
        countReading++;
    }
}
console.log(`a. Tổng số bạn đọc quá hạn >= 10 ngày là: ${countReading} người.`);
//b tìm mượn js và pyt

console.log("b. Các mã thẻ mượn cả sách JS và PYT là:");
let user = false;

for (let i = 0; i < size; i++) {
    let booksArray = borrowedBookCodes[i].split(",");

    let flagJs = false;
    let flagPYT = false;

    for (let j = 0; j < booksArray.length; j++) {
        let bookCode = booksArray[j].trim();
        if (bookCode[0] === 'J' && bookCode[1] === 'S'){
            flagJs = true;
        } 
        if (bookCode[0] === 'P' && bookCode[1] === 'Y' && bookCode[2] === 'T') {
            falsePYT = true;
        }
    }

    if (flagJs === true && falsePYT === true) {
        console.log(`   - Mã thẻ: ${readerCardIds[i]} (${readerNames[i]})`);
        user = true;
    }
}
if (user === false) {
    console.log("   (Không có bạn đọc nào thỏa mãn điều kiện này)");
}
//c tìm ng có số ngày quá hạn cao nhất
if (size > 0) {
    let maxDay = overdueDays[0];
    let maxIndex = 0;      

    for (let i = 1; i < size; i++) {
        if (overdueDays[i] > maxDay) {
            maxDay = overdueDays[i];
            maxIndex = i;
        }
    }
    console.log(`c. Bạn đọc quá hạn lâu nhất là: ${readerNames[maxIndex]} (với ${maxDay} ngày).`);
}
//d in cảnh báo
let count_two = 0;
for (let i = 0; i < size; i++) {
    if (overdueDays[i] >= 7) {
        count_two++;
    }
}

console.log("d. Cảnh báo hệ thống:");
if (count_two === 0) {
    console.log("-> Tình hình trả sách hôm nay khá tốt!");
} else if (count_two >= 1 && count_two <= 4) {
    console.log("-> Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("-> Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}