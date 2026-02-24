const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];
let choose;
do {
    choose = +prompt(`nhập lựa chọn:
        --- QUẢN LÝ ĐỘI BÓNG ---
        1. Xem danh sách
        2. Tìm kiếm (Find)
        3. Lọc vị trí (Filter)
        4. Tổng bàn thắng (Reduce)
        5. Kiểm tra hiệu suất (Some/Every)
        0. Thoát
    `);

    switch (choose) {
        case 0:
            console.log("Thoát chương trình");
            break;
        case 1: {
            console.log("xem danh sách cầu thủ");
            show();
            break;
        }
        case 2: {
            console.log("Tìm kiếm cầu thủ");
            if (searchForPlayer) {
                console.log(`Cầu thủ tìm thấy `);
                
            } else {
                console.log("không tìm thấy");
                
            }
            break;
        }
        default:
            console.log("lựa chọn không hợp lệ");
            break;
    }

} while (choose !== 0)

// hàm hiển thị danh sách cầu thủ
function show() {
    squad.forEach((value, index) => {
        console.log(`tên cầu thủ:${value[0]} vị trí:${value[2]} bàn thắng:${value[1]} `);
    });
}
//hàm tím kiếm cầu thủ
function searchForPlayer() {
    let name = prompt("Nhập tên cầu thủ");
    let result = squad.find((value)=>{
        return value[0].toLowerCase() == name.toLowerCase();
    });
}