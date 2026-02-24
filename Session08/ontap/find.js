/* 
find: tìm kiếm phần tử
    Đầu vào : 1 hàm
    đầu ra :
    + nếu tìm thấy trả về phần tử 
    + nếu không tìm thấy trả về undefined
*/

let students = [
    ["chi", "bcdn11", "cntt5"],
    ["hoa", "bcdn14", "cntt5"],
    ["hong", "bcdn15", "cntt5"],
    ["ngoc", "bcdn17", "cntt5"],
];
let maSV = "bcdn14"
let result = students.find((value)=>{
    return value[1] == maSV;
});
console.log(result);
