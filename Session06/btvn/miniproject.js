let count_user = 0;
let flag_user = false;
//biến menu
let choice;
let libraries = ["Toán", "Văn", "Anh"];

while (count_user < 3) {
    let account = prompt("Tên đăng nhập: ");
    let password = prompt("Mật khẩu:");
    if (account === "admin" && password === "12345") {
        flag_user = true;
        break;
    } else {
        count_user++;
        if (account !== "admin" && password !== "12345") {
            alert(`Sai tài khoản! Còn ${3 - count_user} lần thử.`);
        } else if (account !== "admin" && password === "12345") {
            alert(`Sai tài khoản! Còn ${3 - count_user} lần thử.`)
        } else {
            alert(`Sai mật khẩu! Còn ${3 - count_user} lần thử.`)
        }
    }
}
if (!flag_user) {
    alert(`Tài khoản đã bị khóa!`);
} else {
    alert(`Đăng nhập thành công!`);
    do {
        choice = +prompt(`
            --- HỆ THỐNG QUẢN TRỊ THƯ VIỆN 4.0 ---
            1. Nhập thêm lô sách mới
            2. Hiển thị danh sách sách
            3. Tìm kiếm sách
            4. Cập nhật tên sách
            5. Đảo ngược thứ tự kệ sách
            6. Nhập kho từ nguồn khác
            7. Thoát chương trình
            Vui lòng chọn (1-7):
            `)
        switch (choice) {
            case 1: {
                let input_book = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");
                let new_book = input_book.split(",");
                let count_add_book = 0;
                for (let i = 0; i < new_book.length; i++) {
                    let name_book = new_book[i].trim();
                    if (name_book !== "") {
                        libraries.push(name_book);
                        count_add_book++;
                    }

                }
                alert(`Đã thêm thành công ${count_add_book} cuốn sách mới.`);
                break;
            }
            case 2: {
                console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");
                if (libraries.length === 0) {
                    console.log("Thư viện hiện đang trống.");
                } else {
                    let n = 1;
                    for (let book of libraries) {
                        console.log(`${n}. ${book}`);
                        n++;
                    }
                }
                break;
            }
            case 3: {
                let search_book = prompt("Nhập tên cuốn sách cần tìm:");
                if (libraries.includes(search_book)) {
                    let index = libraries.indexOf(search_book);
                    alert(`Sách "${search_book}" được tìm thấy tại vị trí số ${index} trong mảng.`);
                } else {
                    alert(`Không tìm thấy sách ${search_book} trong kho.`);
                }
                break;
            }
            case 4: {
                let edit_book = prompt("Nhập tên sách cần sửa:");
                let found = libraries.indexOf(edit_book);
                if (found !== -1) {
                    let new_name = prompt(`Tìm thấy sách "${edit_book}". Nhập tên mới:`);
                    if (new_name) {
                        libraries[found] = new_name;
                        alert("Cập nhật thành công!");
                    }
                } else {
                    alert("Sách không tồn tại để sửa.");
                }
                break;
            }
            case 5: {
                libraries.reverse();
                console.log("--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC ---");
                for (let index in libraries) {
                    console.log(`Vị trí index [${index}]: ${libraries[index]}`);
                }
                alert("Thứ tự trên kệ đã thay đổi. Kiểm tra console.");
                break;
            }
            case 6: {
                let array = ["Sách Kỹ Năng", "Truyện Tranh"];
                libraries = libraries.concat(array);
                alert("Đã gộp kho sách từ chi nhánh khác thành công.");
                break;
            }
            case 7: {
                alert(`Hẹn gặp lại!`)
                break;
            }

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice !== 7);
}