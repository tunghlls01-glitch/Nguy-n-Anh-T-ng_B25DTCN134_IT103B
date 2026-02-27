// Object - Đối tượng

// Mô tả về 1 thằng người
// Tên: "Peter"
//Tuổi: 18
//quê quán: Hà Nội

let person = {
    name: "Peter",
    age: 18,
    hometown: "Hà Nội",
    job: "Lập trình viên",
    single: true,
    hobbies: ["Listening to music", "Reading books"],
    sayHi: function () {
        console.log("Hello everyone");
    },
};
// cách thức 
// console.log(person);

// console.log(person.name); // "Peter";

// console.log(person.hobbies); //[]

// person.sayHi(); 

//Bracket notation ([])
// Dot notation (.)
// for(let key in person) {
//     console.log(person[key]);
// }

//lần 1: duyệt qua mảng name: person[key] === person["name"] === person.name
//lần 2: duyệt qua age: person[key] === person["age"] === person.age
//--------------//
// cập nhật thêm
//---------------//
// person.weight = "70kg";
// person.height = "175cm";

// person.introduce = function () {
//     console.log("Xin chào tôi tên là perter");
// };

// console.log(person);
//---------------//
//cập nhật giá trị
//---------------//
// person.job = "Chạy Grab";

// console.log(person);

//---------------//
//muốn xóa
//---------------//

// delete person.job;
// console.log(person);