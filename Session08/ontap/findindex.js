/* 
    findIndex : trả về vị trí

    1. Đầu vào: HÀM
    2. Đầu Ra : 
        + Nếu tồn tại: trả về vị trí
        + Nếu ko tồn tại: trả về -1  
*/

let students = [
    ["chi", "bcdn11", "cntt5",2005],
    ["hoa", "bcdn14", "cntt5",2006],
    ["hong", "bcdn15", "cntt5",2007],
    ["ngoc", "bcdn17", "cntt5",2009],
];
// cho người dùng nhập mã sv sau đó cập nhập năm sinh
let maSV = "bcdn15"
let result = students.findIndex((value)=>{
    return value[1] == maSV;
});
