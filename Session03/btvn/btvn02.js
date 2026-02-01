let n;
let userName;
let nameBook;
let date;
let count = 0;
n = prompt("Hôm nay có bao nhiêu người trả sách?");
for(let i = 0 ; i < n; i++) {
    userName = prompt("Tên người trả");
    nameBook = prompt("Tên sách");
    date = +prompt("số ngày đã mượn thực tế");
    while (date < 1) {
        date = +prompt("Nhập sai số ngày (>= 1) mời bạn nhập lại: ");
    }
    if (date <= 14) {
        console.log("Trả đúng hạn");
    } else if (date > 21) {
        console.log("Quá hạn nghiêm trọng" + " " + "Cần ghi biên bản phạt"); 
        count++;  
    } else {
        console.log( "Trả muộn nhẹ" + " " +  "Phạt nhắc nhở");
        count++;
    }
}
console.log(`Tổng số lượt trả sách là ${n} `);
console.log(`Số lượt trả muộn (≥ 15 ngày) là ${count}`);
