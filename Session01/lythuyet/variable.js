/*
    Biến là gì? dùng để lưu trữ dữ liệu


    3 cách khai báo biến 
        js 1995
    1. Var
        + có thể khai báo lại
        + có thể gán lại giá trị
        + phạm vi truy cập function
        + có hoisting truy cập đc.
            đưa phần khai báo lên đầu
    2. let sinh ra ơ phiên bản ES6 (2015)
        + không thể khai báo lại
        + Có thể gán lại giá trị
        + phạm vi block scope {}
        + có hoisting nhưng không truy cập đc.
    3. const sinh ra ơ phiên bản ES6 (2015) : thường dùng khai báo hằng số
        + Không thể khai báo lại
        + Không thể gán giá trị
        + phạm vi block scope {}
        + có hoisting nhưng không truy cập đc.
    quy tắc đặt tên biến: 
    + không bắt đầu bằng số, ký tự đặc biệt trừ (_, $)
    + tránh trùng từ khóa đặc biệt ( let, const, var, class, function...)
    + theo quy tắc con lạc đà (camel_case)
    + phân biệt hoa thường

*/
var b;
var fullName = "Lê Minh Thu";
var fullName = " Vũ Hồng Vân";
fullName = "Lê Minh Huyền";


{
    let a = 8;
    a = 5;
    {
        a=100;
    }
}

console.log("giá trị b",b);
b = 5;
