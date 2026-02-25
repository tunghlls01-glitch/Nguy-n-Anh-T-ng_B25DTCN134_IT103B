let names = ["iPhone", "Samsung", "Realme", "Oppo", "iPad"];
let prices = ["1000", "500", "300", "550", "2000"];
let stocks = [5, 4, 8, 0, 12];
let choice;
do {
    choice = +prompt(`
        --- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
        1. Lọc sản phẩm cao cấp (>500)
        2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
        3. Phân tích giá trị vốn hóa (Tổng tài sản)
        4. Triển khai chiến dịch chiết khấu (Giảm 10%)
        5. Truy vấn sản phẩm theo từ khóa
        6. Báo cáo tình trạng tồn kho
        7. Thoát chương trình
        Vui lòng nhập lựa chọn của bạn (1-7):
    `);
    switch (choice) {
        case 1: {
            let n = names.filter((value, index) => {
                return prices[index] > 500;
            });
            alert(`Danh sách sản phẩm cao cấp(>500): ${n}`);
            break;
        }
        case 2: {
            let copy_some = stocks.some((value) => {
                return value == 0;
            });
            let copy_every = prices.every((value) => {
                return value > 100;
            });
            alert(`Kết quả kiểm định:
                    - Có sản phẩm hết hàng: ${copy_some ? "Có" : "Không"}
                    - Tất cả sản phẩm giá > 100: ${copy_every ? "Đúng" : "Sai"}`);
            break;
        }
        case 3: {
            let copy_reduce = prices.reduce((acc, cur, index) => {
                return acc + Number(cur) * stocks[index];
            }, 0);
            alert(`Tổng giá trị tài sản hiện có trong kho: ${copy_reduce} USD`)
            break;
        }
        case 4: {
            prices.forEach((value, index) => {
                prices[index] = Number(value) * 90 / 100;
            });
            alert("Đã cập nhật giảm giá 10% cho toàn bộ sản phẩm!");
            break;
        }
        case 5: {
            let check = prompt("Nhập tên sản phẩm cần tìm: ").toLowerCase();
            let arr = "";
            names.map((value, index) => {
                if (value.toLowerCase().includes(check)) {
                    arr += `${value} - Giá: ${prices[index]} - SL: ${stocks[index]}\n`;
                }
            });
            if (arr !== "") {
                alert(arr);
            } else {
                alert("Không tìm thấy sản phẩm");
            }
            break;
        }
        case 6: {
            let copy_map = names.map((value, index) => {
                let status = stocks[index] == 0 ? "Hết hàng" : "còn hàng";
                return `${value}: ${status} (${stocks[index]})`;
            }).join("\n");
            alert(copy_map);
            break;
        }
        case 7: {
            alert("Đã thoát chương trình. Hẹn gặp lại!");
            break;
        }



        default:
            break;
    }

} while (choice !== 7);