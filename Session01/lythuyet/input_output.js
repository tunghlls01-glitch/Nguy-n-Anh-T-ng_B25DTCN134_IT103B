/* 
    INPUT: dữ liệu truyền vào 
        + prompt: dữ liệu người dùng vào 
            + giá trị khi người dùng nhập có kiểu dữ liệu string
            + nếu không nhập nhãn cancel giá trị là null 
    Output: dữ liệu xuất ra
        1. alert(): hộp thoại thông báo cho người dùng
        2. console.log () : hiện thị kết quả để kiểm tra, debug...
        3. document.write () : hiển thị ra trình duyệt
        4. confirm xác nhận : confirm
*/

let fullName = prompt("Mời nhập tên");
console.log("fullname", fullName);
document.write("cố gắng học lập trình js");

let result = confirm("bạn đủ 18 tuổi chưa");
console.log(result);
