let choice;
let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
do {
    choice = +prompt(`
--- THƯ VIỆN KHOA HỌC ---
1. Xem danh sách
2. Nhập sách mới
3. Mượn sách (Xóa)
4. Sửa tên sách
5. Sắp xếp kệ
0. Thoát
`);
    switch (choice) {
        case 0:
            console.log("Thoát chương trình");
            break;
        case 1:
            console.log("Xem danh sách");
            for (let i = 0; i < books.length; i++) {
                console.log(`${i+1}. ${books[i]}`);
            }
            break;
        case 2:
            console.log("Thêm sách");
            let newBook = prompt("Thêm tên sách mới: ");
            if (books.includes(newBook)) {
                console.log("Sách đã tồn tại");
            } else {
                books.push(newBook);
                alert("Thêm sách thành công");
            }
            
        break;
        case 3:
            // console.log("mượn sách");
            let sreachBook = prompt("Nhập tên cuốn sách muốn mượn:")
            let check_index = books.indexOf(sreachBook);
            if (check_index == -1) {
                console.log("Sách không tồn tại");
            } else {
                console.log(`Đã cho mượn sách ${books[check_index]}`);
                books.splice(check_index, 1);
            }
            break;  
        case 4:
            // console.log("Sửa sách");
            let updateBook = prompt("Mời nhập tên sách cần sửa");
            let index = books.indexOf(updateBook);
            if (index==-1) {
                console.log(`Sách ${books[index]} không tồn tại! `);
            } else {
                let newBook = prompt("nhập tên sách mới");
                books[index] = newBook;
            }
            break;
        case 5:
            // console.log("Sắp xếp");
            books.sort();
            for (let i = 0; i < books.length; i++) {
                console.log(`${i+1}. ${books[i]}`);
            }
            break;
        default:
            console.log("Lựa chọn không hợp lệ");

            break;
    }
} while (choice != 0)