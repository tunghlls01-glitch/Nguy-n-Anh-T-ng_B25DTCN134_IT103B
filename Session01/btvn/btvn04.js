let nameBook = prompt("Nhập tên cuốn sách: ");
let originalName = nameBook.trim();
let nameUpdate = nameBook.trim().toUpperCase();
let nameLower = nameBook.trim().toLowerCase();

console.log("tên sách ban đầu:", originalName);
console.log("tên sách viết hoa:", nameUpdate);
console.log("tên sách viết thường:", nameLower);
