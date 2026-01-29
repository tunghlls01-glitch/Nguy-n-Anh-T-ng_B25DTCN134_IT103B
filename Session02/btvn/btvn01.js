let nameBook = prompt("Nhập tên sách: ").trim().toUpperCase();
let author = prompt("Tác giả: ").trim();
let year = prompt("Năm xuất bản:");

let bookYear = new Date().getFullYear() - year;
    
if (bookYear == 0) {
    console.log("Đây là sách mới!");
} else if (bookYear <= 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}



