//CRUD object
// cách khai báo
let person = {};
console.log(typeof person); // object

//Thuộc tính : tên : An (key : value)
let person_V2 = {
    fullName : "An",
    age : 19,
};

//read 
// Dot notation, bracket notation

//Dot
console.log(person_V2.fullName);
//bracket
console.log(`Tên của bạn theo cách 2 là: ${person_V2["fullName"]}`);

//update 
person_V2.fullName = "Thuy";
console.log(person_V2);

//Creat 

person_V2.email = "tung@gmail.com";
console.log(person_V2);

// cách 2 
let person_V3 = {
    ...person_V2,
    sex: "male",
};
console.log(person_V3);
// delete
delete person_V3.sex;
console.log(person_V3);

// duyệt object
console.log(Object.keys(person_V3));
console.log(Object.values(person_V3));
console.log(Object.entries(person_V3));

for (const [key, value] of Object.entries(person_V3)) {
    console.log("key là:"key, "value là:"value);
};

// CRUD mảng object
let players = [
    {id : 0, name : "Thuy", age : 18, goal: -1},
    {id : 1, name : "An", age : 18, goal: 0},
    {id : 1, name : "Quyet", age : 18, goal: 2},
];
// hiển thị cầu thủ có chỉ só ghi bàn lớn hơn 0

Let listTopGoal = players.filter((players) => {
    return players.goal > 0;
});




