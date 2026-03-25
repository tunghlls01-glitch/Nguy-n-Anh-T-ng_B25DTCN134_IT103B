/* 
    Quản lý danh mục
    1. Dùng mảng lưu tất cả danh mục
    2. dùng cái gì để mô tả 1 danh mục: OBJECT
        + 1 Danh mục có thông tin: Tên danh mục 
    
*/
let categories = [];
//Tạo hàm thêm
function addCategory() {
    let categoryName = document.getElementById("categoryName").value;
    let categoryID = document.getElementById("categoryID").value;
    console.log("id vừa nhập", categoryID);
    for(let i = 0; i < categories.length; i++) {
        if (categories[i].name == categoryName) {
            document.getElementsByClassName("ero-name")[0].style.display = "block";
            console.log("name đã tồn tại!");
            return;
        }
    }
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id == categoryID) {
            console.log("id đã tồn tại");
            return;
        }
    }
    let obj = {
        id: Math.floor(Math.random()*99999   ),
        name: categoryName
    };
    categories.push(obj);
    console.log("Thêm danh mục thành công", categories);
    rederCategory();
};
//hiển thị
function rederCategory(){
    let html="";
    for (let i = 0; i < categories.length; i++) {
        html += `
            <tr>
            <td>${id + 1}</td>
            <td>${categories[i].name}</td>
            <td><button>Sửa</button> 
            <button onclick=" deleteCategory(${i})">xóa</button></td>
        </tr>
        `;
    }
    document.getElementById("tbody").innerHTML = html;
}
//hàm xóa 
function deleteCategory(index) {
    let check = confirm(`Bạn có muốn xóa "${categories[i].name}" `);
    if (check) {
        categories.splice(index, 1);
        rederCategory();
    }
}
//hàm tìm kiếm 
function filterCategory() {
    let n = document.getElementById("filterCategories").value.trim().toLowerCase();
    let arrNew = categories.filter((value) => value[index].name.include(n));
    renderFilter(arrNew);
}
//hiển thị lọc 
function renderFilter(arrNew) {
    let str="";
    for(let i; i < arrNew.length; i++) {
        
    }
}