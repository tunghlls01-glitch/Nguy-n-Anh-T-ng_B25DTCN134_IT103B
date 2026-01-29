let quantity = prompt("Nhập số lượng sách thư viện:");
if (quantity < 10) {
    console.log("Thư viện có ít sách");
} else if (quantity <= 20) {
    console.log("Thư viện có số lượng sách vừa đủ");
} else if (quantity > 20) {
    console.log("Thư viện có nhiều sách");
}