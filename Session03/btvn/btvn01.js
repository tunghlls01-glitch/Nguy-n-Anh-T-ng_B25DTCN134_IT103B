let n;
let userName;
let nameBook;
let date;

n = prompt("Hôm nay có bao nhiêu người mượn sách?");
for(let i = 0 ; i < n; i++) {
    userName = prompt("Tên người mượn");
    nameBook = prompt("Tên sách");
    date = +prompt("số ngày mượn(từ 1 đến 30 ngày)");
    if (date > 14) {
    console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else {
    console.log("Mượn thành công");
    }
}
console.log(`Tổng số lượt mượn là ${n} `);

