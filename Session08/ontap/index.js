/* 
1. từ khóa khai báo biến : var, const, let.
2. toán tử : operator
    + toán tử số học : +, -, *, /, %, **
    + toán tử logic : &&, ||
    + toán tử gán : =
    + toán tử so sánh: >, <, >=, <=, ==, ===, !=, !==,...
    + toán tử ba ngôi: ? :
    + toán tử tăng giảm: a++, ++a

3. câu điều kiện : condition
    if_else
    if_else: lồng
    if_else: bậc thang
    switch-case:
4. vòng lặp: loop
    + for, for lồng
    + while
    + do while
5. mảng: array
    let, var, const TÊN MẢNG = [];
    CRUD : với mảng
    5.1 C: CREATE : thêm
        + push()  : thêm vào cuối
        + unshift : thêm vào đầu mảng
        + splice (index, count, update) : thêm vào vị trí bất kì
    5.2 R: READ : đọc, hiển thị
        for, for_in, for_of
    5.3 U: Update (): cập nhập
        splice()
        cập nhật theo vị trí
        arr[index] = giá trị mới
    5.4 D: Delete (): xóa 
        pop(): xóa cuối
        shift(): xóa đầu
        splice(): xóa vị trí bất kì
6. các method làm việc với mảng
    + reverce() : đảo ngược phần tử của mảng
    + indexOf() : tìm xem phần tử có tồn tại trong mảng hay không ==> index || -1
    + includes() : tìm kiếm phần tử có tồn tại ==> true || flase
    + slice()    : cắt và sao chép các phần tử trong mảng
    + trim() : xóa khoảng trắng hai đầu
    + split() : chuyển string sang mảng
    + join()  : chuyển mảng sang string
    + concat() : gộp các mảng
    + sort()   : sắp xếp 
    + replace() : thay thế phần tử...

7. function
    1. declaration
    2. expression
    3. arrow function
8. các phương thức làm việc với mảng
    map, forEach, filter, reduce, some, every, find, findIndex
*/
/* 
    KHI LÀM VIỆC VỚi CÁC METHOD 
        1. Đầu vào nhận là gì ?
        2. Kết quả trả về là gì?
*/
/* 
    filter : 
        Đầu vào : hàm
        đầu ra : 1 mảng
*/
// filter : lọc : trả về 1 mảng 
let students = [
    ["Thuy", 5],
    ["chi", 6],
    ["văn", 3],
];
let result = students.filter((value)=>{
    return value[1] >= 5;
});
console.log(result);
// let arr = [5, 7, 88, 4, 55];

// let result = arr.filter(function test(value, index, arr) {
//     return value > 50;
// });
// let result = arr.filter((value, index, arr)=>{
//     return value > 50;
// });
// console.log(result);
