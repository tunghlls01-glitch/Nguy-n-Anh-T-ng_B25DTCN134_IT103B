/* 
1. Array (mảng): là một kiểu dữ liệu có thể lưu nhiều giá trị khác
2. Cú pháp khai báo mảng: 
    Tên từ khóa + tên mảng = [];
    Tên từ khóa : (let, const, var) 
    tên mảng: đặt tên theo tên tiếng anh, theo quy tắc đặt tên biến camel_case
    3. Thao tác với mảng dùng các PHƯƠNG THỨC (method)
        CRUD với mảng:
        C(CREATE: TẠO_THÊM PHẦN TỬ)
            + push(): thêm phần tử vào cuối mảng
            + unshift(): thêm vào đầu mảng
            + splice(index, deleteCount,item);
        R(READ: ĐỌC, HIỂN THỊ)
            + dùng vòng lặp for
        U(UPDATE: CẬP NHẬT PHẦN TỬ)
            + Cập nhật theo index
            + splice(index, deleteCount, item);
        D(DELETE_ XÓA;
            + pop(): xóa phần tử ở cuối mảng
            + shift(): xóa phần tử đầu
            + splice(): xóa mọi phần tử


*/
// khai báo mảng danh sách sinh viên
let students =[];
students.push("Minh");
students.push("Quang");//[minh, quang] // [Minh, văn, quang]
students.splice(1, 0, "Văn");
students[1] = "Mạnh";
students.splice(1, 1, "Ngọc")
console.log("students", students);

let courses = ["HTML", "CSS", "C++", "C", "JS"];
//["HTML", "CSS", "C++", "C", "JS"];
courses.splice(3, 0, "Python");
console.log("courses", courses);

for (let i = 0; i < courses.length; i++) {
    console.log(`Khoa hoc thu ${i+1}: ${courses[i]}`);
    

}

let number = [5, 15, 25];
console.log("phần tử", number[2]);




