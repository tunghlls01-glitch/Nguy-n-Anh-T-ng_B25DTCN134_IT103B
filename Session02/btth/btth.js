let userName = prompt("Nhập tên người dùng");
let role = prompt("Mời nhập vai trò admin || student || guest").toLowerCase();
let account_balance = +prompt("Mời nhập số dư tài khoản thẻ");
let card_status = prompt("mời nhập trạng thái thẻ");
let date = prompt("Số ngày quá hạn trả sách");

//2 Kiểm tra quyền truy cập dựa vào biến Vai trò
if (role == "admin") {
    console.log(`chào ${role} bạn có toàn quyền hệ thống`);
} else if (role == "student") {
    console.log(`chào ${role} bạn có thể mượn sách`);
} else if (role == "guest") {
    console.log(`chào ${role} bạn chỉ có thể đọc sách tại chỗ `);
} else {
    console.log("lỗi vai trò");
}
//3 Kiểm tra điều kiện mượn sách:
let check = userName != null && role == "admin" || role=="student" && account_balance > 0 && card_status == true;

if (check) {
    console.log("đủ điều kiện mượn sách");
} else {
    console.log("không đủ điều kiện");
}

//4. tính phí trả sách dựa vào ngày quá hạn 

if(date == 0){
    console.log("cảm ơn bạn đã đúng hạn");
} else if (date >= 1 && date <= 5) {
    console.log("tổng tiền phạt", date*5000);
    
} else if (date <= 10) {
    console.log("tổng tiền phạt", date*10000);
} else if (date >10) {
    console.log("phạt 200.000, khóa tài khoản");
    card_status = false;
} else {
    console.log(`${date} không hợp lệ`);
}
// in ra kết quả 
console.log("--- HỆ THỐNG MƯỢN TRẢ ---");
console.log("người dùng:", userName);
console.log("Quyền hạn: ", role);
console.log();


