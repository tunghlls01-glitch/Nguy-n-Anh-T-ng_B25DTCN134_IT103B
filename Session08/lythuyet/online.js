// let result = increase10AndSquare([1, 2, 3, 4])();

// let result2 = increase10AndSquare([-1, -2, -3, -4])();

// function increase10AndSquare(arr) {
//     for (let index in arr) {
//         arr[index] = arr[index] + 10;
//     }
//     return function() {
//         for(let index in arr) {
//             arr[index] = arr[index] ** 2;
//         }
//         return arr;
//     }
// }

// console.log(result);
// console.log(result2);


// nhận một hàm khác là đối số thục tế

// viết một hàm nhận vào một mảng
//hàm sẽ có nhiệm vụ thay đổi từng phần tử có trong mảng
// theo một công thức nào đó do người dùng sử dụng Hàm quyết định

//trả về một mảng mới bao gồm các phần tử đã được thay đổi theo đúng 
// công thức

// let result = applyFormula([1, 2, 3, 4], function(el) {
//     el = el + 10;
//     return el;
// });//[]
// console.log(result);

// let result2 = applyFormula([-1, -2, -3, -4], function (el) {
//     el = el ** 2;
//     return el;
// }) //[]
// console.log(result2);

// function applyFormula(arr, fn) {
//     let result = [];
//     for(let index in arr) {
//         let el = fn(arr[index]);
//         result.push(el);
//     }
//     return result;
// }


//forEach()

let arr = [10, 20, 30, 40];

// arr.forEach(function(element, index){
//     console.log(element, index);
// });

//.map()

// let newArr = arr.map(function(element, index){
//     return element + 10;
// }); //[20, 30, 40, 50]

// console.log(newArr);

// filter()
// let result = arr.filter(function(element, index) {
//     return element > 40;
// }); //[30]

// console.log(result);

// .reduce() - Giảm xuống
let result = arr.reduce(function(acc, cur) {
    // acc: accumulator: Biến tích lũy
    // cur: current value: Giá trị hiện tại của phần tử đang duyệt qua

    acc = acc + cur;
    return acc;
}, 0);

console.log(result);


// // NOTE: Trong trường hợp không truyền vào reduce giá trị khởi tạo 
// // dành cho accumulator (Biến tich lỹ)

// // Biến tích lũy sẽ có giá trị khởi tạo mặc định là phần tử đầu tiên
// //Trong mảng

// console.log(result);

//some - một vài
// let result = arr.some(function (element, index){
//     return element > 40;
// }); //false
// console.log(result);

// // every - Toàn bộ

// let result2 = arr.every(function (element, index){
//     return element > 1;
// }); // true
// console.log(result2);
