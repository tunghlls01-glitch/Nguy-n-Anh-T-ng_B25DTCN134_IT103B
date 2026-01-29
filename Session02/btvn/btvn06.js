let nameBook = prompt("Tên sách");
let userName = prompt("Tên người mượn");
let statusBook = prompt("Tình trạng( sẵn || mượn || không có sẵn):");
let day = prompt("Số ngày mượn: ");
let card = prompt("Thẻ thư viện(có || không): ");

console.log("sách: ", nameBook);
console.log("Tên người mượn: ", userName);
console.log("Tình trạng: ", statusBook);
console.log("số ngày mượn: ", day);

if (statusBook == "sẵn") {
    if (card == "có") {
        console.log("Chúc mừng, bạn có thể mượn sách này");
    } else {
        console.log("bạn không thể mượn sách khi chưa có thẻ");
    }
} else if (statusBook == "mượn") {
    if (day < 30) {
        if (card == "có") {
            console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
        } else {
            console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
        }
    }
} else if (statusBook == "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
} else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
    
}
