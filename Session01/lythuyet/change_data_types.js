/* 
    chuyển kiểu dữ liệu 
    1. string --> number 
        + Number
        + dùng toán tử +
        + parseInt chuyển sang số nguyên
        + parseFloat (chuyển sang số thực)
    2. number --> string
    string()
    toString()
 */
// let a = Number(prompt("mời bạn nhập giá trị số a")); // 678
// let b = +prompt ("mời bạn nhập giá trị số b"); 
// let c = parseInt (prompt("mời bạn nhập giá trị c"));
// let sum = a + b + c ; // "5" + "6"
// console.log("giá trị sum", sum);
let age = 18;
let result = String(age);
console.log(typeof(result));
