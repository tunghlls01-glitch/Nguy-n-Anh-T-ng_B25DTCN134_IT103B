// //session storage

// console.log(sessionStorage);

// //get - lấy dữ liệu session storage
// console.log(sessionStorage.email);
// console.log(sessionStorage.password);

// //.getItem

// let email = sessionStorage.getItem("email");
// console.log(email);

// //cread - them du lieu cho session storage

// sessionStorage.username = "mck123123";

// // .setItem();
// sessionStorage.setItem("dob", "31/1/1995");

//update - cập nhật du lieu cho session storage

// sessionStorage.dob = "30/01/1995";

// sessionStorage.dob ="29/02/1995";

// //delete - xóa dữ liệu nằm trong session storage

// delete sessionStorage.dob;
// sessionStorage.removeItem("username");


// session storage 2

// sessionStorage.name = "Hello world";

// console.log(sessionStorage.name); //hello word 
// sessionStorage.age = 18;
// console.log(sessionStorage.age); //18

// sessionStorage.status = true;

// console.log(sessionStorage.status); //true

// JSON -   javascript Object Notation

// sessionStorage.dob = "31/01/11995";
// let students = [
//     {
//         id: 1,
//         name: "tran van a"
//     },
//     {
//         id: 2,
//         name: "tran van n"
//     }
// ];
// sessionStorage.studentsList = JSON.stringify(students);
// console.log(JSON.parse(sessionStorage.studentsList));

//local storage
localStorage.age = JSON.stringify(18);
localStorage.studentsList = JSON.stringify([{id: 1, name: "Hello word"}]);