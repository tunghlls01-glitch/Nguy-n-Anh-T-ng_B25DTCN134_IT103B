/* 
DOM: DOCUMENT OBJECT MODEL: MÔ HÌNH TÀI LIỆU DẠNG ĐỐI TƯỢNG.

AI LÀ NGƯỜI TẠO RA DOM? => khi trang web được tải lên thì trình duyệt sẽ tạo ra mô hình cay dom
dựa vào mô hình DOM này chúng ta có thể làm?
    + thay đổi nội dung trang web
    + thay đổi các phần tử, thuộc tính, ... của các thẻ HTML
    + tương tác các sự kiện trong phần tử HTML
Các thành phần trong DOM
    1.ELEMENT (đối tượng)
        Các cách để lấy element.
            1. Lấy theo id: document.getElementById(); ==> trả về duy nhất 1 đối tượng
            2. lấy theo class: document.getElementsByClassName(); ==> trả về HTML colection gần giống mảng
            3. lấy theo tên thẻ: document.getElementsByTagName(); 
                => kết quả trả về HTML collection dạng mảng

    2.ATRIBUTE (Thuộc tính)
    3. TEXT: nội dung
        innerHTML




*/
function changeColor() {
    document.getElementById("heading").style.color="red";
}
// tên class là từ khóa đặc biệt 
class Student{

}
console.log("getElementsByClassName",document.getElementsByClassName("title")[0]);
console.log("getElementsByClassName",document.getElementsByTagName("a"));

function increaseSize() {
    document.getElementById("content").className = "content_p"; // thêm thuộc tính cho đối tượng
    document.getElementById("content").innerHTML = "học lập trình DOM-ELEMENT";
}

function addCourse() {
    document.getElementById("list").innerHTML = 
    `
        <li>C++</li>
        <li>C</li>
        <li>JS</li>
    `
    
}
