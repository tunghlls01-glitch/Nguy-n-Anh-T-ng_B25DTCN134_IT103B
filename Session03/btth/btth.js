let password = "";
password = prompt("mời nhập mật khẩu"); // mât khẩu đúng admin123
let count = 0;
let flag = true;
while (password != "admin123") {
    if (count == 2){
        flag = false;
        break
        
    }
    count++; //2
    password = prompt("mật khẩu chưa đúng nhập lại");
}
//nếu đăng nhập đúng thì cho chọn chức năng
// nếu đăng nhập sai thì hiển thị thông báo
if(flag) {
    let sum = 0; // tổng tiền các cuốn sách
    console.log("chào admin cho chọn chức năng");
    let number_book = prompt("bạn muốn nhập bao nhiêu cuốn sách");
    for (let i = 0; i < number_book; i++) {
          let numberBook = prompt("nhập giá tiền cuốn sách thứ ${}")
    }
} else {
    console.log("đăng nhập quá số lần");
}
