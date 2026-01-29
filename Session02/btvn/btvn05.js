let nameBook = prompt("Nhập tên sách: ").trim().toUpperCase();
let statusBook = prompt("Tình trạng( sẵn || mượn):");
let year = prompt("Năm xuất bản:");

let bookYear = new Date().getFullYear() - year;

if (statusBook == "sẵn"){
    if (bookYear <= 5) {
        console.log("Sách này mới và có sẵn để mượn");
    }  else if (bookYear > 5) {
        console.log("Sách này có sẵn nhưng đã lâu năm");
    }
} else if (statusBook == "mượn") {
    if (bookYear <= 10) {
        console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
    }  else if (bookYear > 10) {
        console.log("Sách này đã mượn và khá cũ");
    }
}