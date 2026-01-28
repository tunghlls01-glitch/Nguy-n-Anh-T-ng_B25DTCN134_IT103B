let nameBook = prompt("Nhập tên sách: ").trim();
let year = +prompt("Năm xuất bản: ");

let bookYear = new Date().getFullYear() - year;
console.log("Sách:", nameBook);
console.log("Năm xuất bản:", year);
console.log("Tuổi của sách:", bookYear);
