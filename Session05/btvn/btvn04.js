let booksId = [];
let booksName = [];
let bookStatus = [];

let size = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay? " );
while(size < 0) {
    size = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay? " );
}

for (let i = 0; i < size; i++) {
    // nhập mã sách
     let id = prompt("Nhập mã sách (không được để trống)");
    while (!id) {
        id = prompt("Nhập mã sách (không được để trống)");
    }
    booksId.push(id);

    // nhập tên sách
     let name = prompt("Nhập tên sách (không được để trống)");
    while (!name) {
        name = prompt("Nhập tên sách (không được để trống)");
    }
    booksName.push(name);

    //Nhập tình trạng ban đầu (chọn số 1–3):
     let status = +prompt("Nhập tình trạng ban đầu (chọn số 1-5): ");
    while (![1, 2, 3, 4, 5].includes(status)) {
        status = +prompt("Nhập tình trạng ban đầu (chọn số 1-5):");
    }   
    if (status === 1) {
        bookStatus.push("Hỏng nhẹ");
    } else if (status === 2) {
        bookStatus.push("Hỏng nặng");
    } else if (status === 3) {
        bookStatus.push("Cần sửa gấp");
    } else if (status === 4) {
        bookStatus.push(" Đã sửa xong");
    } else {
        bookStatus.push("Loại bỏ");
    }
}
console.log(`Danh sách cần xem xét bổ sung: ${booksId.length}`);
for (let i = 0; i < size; i++) {
    console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);    
}

let choice;
let count_book = 0;
let count = 0;
do {
    choice = +prompt(`
        1: Sửa tình trạng một cuốn sách
        2: Loại bỏ (xóa) một cuốn sách khỏi danh sách
        0: Kết thúc và in báo cáo cuối
         Người dùng muốn làm gì:
        `)

        switch (choice) {
            case 0:
                alert(`Tổng số sách còn lại: ${booksId.length}`);
                alert(`${count_book} sách đã "Đã sửa xong"`);
                alert(`${count} sách "Loại bỏ"`);
                break;
            case 1:
                let n = prompt("Nhập Id sách muốn sửa");
                let flag = false;
                for (let i = 0; i < booksId.length; i++) {
                    if (n == booksId[i]) {
                        let status = +prompt("Nhập tình trạng mới:");
                        if (status === 4) {
                        bookStatus[i] = "Đã sửa xong";
                        count_book++;
                        }
                    flag = true;
                    break;
                    }
                }
                if (!flag) {
                alert("Không tìm thấy sách");
                }
                break;
            case 2:
                let n_two = prompt("Nhập id muốn xóa");
                let flag_two = false;

                for(let i = 0; i < booksId.length; i++) {
                    if (n_two == booksId[i]) {
                        booksId.splice(i, 1);
                        booksName.splice(i, 1);
                        bookStatus.splice(i, 1);
                        count++;
                        flag_two = true;
                        break;
                    }
                }
                if (!flag_two) {
                    alert("Không tìm thấy sách để xóa");
                }
                break;
            default:
                console.log("lựa chọn không hợp lệ");
                break;
        }
} while(choice != 0)
