/* 

RETURN : Giá trị trả về của hàm và kết thúc hàm
    + Chỉ dùng với hàm 
    + Không được viết câu lệnh sau return
    + 
*/
function sum() {
    let a = 5;
    let b = 6;
    return;
    console.log("tổng a cộng b = ", a+b);
}
sum();

function checkEmail() {
    let email = prompt("mời nhập email");
    if (email.includes("@")){
        return true;
    }
    return false;
}
if (checkEmail()) {
    console.log("email hợp lệ");
} else {
    console.log("email không hợp lệ");
}
