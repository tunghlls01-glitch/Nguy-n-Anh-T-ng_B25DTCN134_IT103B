let account;
let password;
let loginAttempts = 0;
let isAuthenticated = false;
let remaint = 0;
let choice;
// case 1 biến
let total = 0;
let evan = 0;
let odd = 0;
let idBook;
// case 2 biến
let row;//hàng
let cow;//cột
// case 3 biến
let quantity;
let cost;
let years;
// case 4 biến
let n;
let count = 0;
let list = "";
while (loginAttempts < 3) {
    account = prompt("Mời bạn nhập tài khoản:");
    password = prompt("Mời bạn nhập mật khẩu");

    if (account === "admin" && password === "12345") {
        alert("Đăng nhập thành công!");
        isAuthenticated = true;
        break;
    } else {
        if (account !== "admin" && password !== "12345") {
            loginAttempts++;
            remaint = 3 - loginAttempts;
            alert(`Nhập sai tài khoản và mật khẩu. Còn lại ${remaint} nhập `);
        } else if (account !== "admin" && password === "12345") {
            loginAttempts++;
            remaint = 3 - loginAttempts;
            alert(`Nhập sai tài khoản. Còn lại ${remaint} nhập`);
        } else if (account === "admin" && password !== "12345") {
            loginAttempts++;
            remaint = 3 - loginAttempts;
            alert(`Nhập sai mật khẩu. Còn lại ${remaint} nhập`);
        }

    }
}
if (!isAuthenticated) {
    alert("Tài khoản đã bị khóa!");
} else {
    do {
        choice = +prompt(`
            --- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---
            1. Phân loại mã số sách
            2. Thiết kế sơ đồ kho sách
            3. Dự toán phí bảo trì sách
            4. Tìm mã số sách may mắn
            5.Thoát
            Vui lòng nhập lựa chọn của bạn (1-5):
            `)

        switch (choice) {
            case 1: {
                alert("Nhập các mã số sách (Nhập 0 để dừng lại):");
                while (true) {
                    idBook = Number(prompt("Nhập mã số sách:"));
                    total++;
                    if (isNaN(idBook)) {
                        alert("Vui lòng nhập số nguyên hợp lệ!");
                        continue;
                    }
                    if (idBook === 0) {
                        break;
                    }
                    if (idBook % 2 === 0) {
                        evan++;
                    } else {
                        odd++;
                    }
                }
                console.log("--- Kết quả phân loại mã sách ---");
                console.log(`- Tổng số lượng mã sách đã nhập: ${total}`);
                console.log(`- Số mã chẵn (Sách khoa học): ${evan}`);
                console.log(`- Số mã lẻ (Sách nghệ thuật): ${odd}`);
                alert("Đã phân loại xong! Xem kết quả tại Console (F12).");
                break;
            }
            case 2: {
                row = Number(prompt("Nhập số hàng của kho:"));
                cow = Number(prompt("Nhập số cột của kho:"));
                if (isNaN(row) || isNaN(cow) || row <= 0 || cow <= 0) {
                    alert("Số hàng và cột phải là số dương!");
                    break;
                }
                console.log(`--- Bản đồ kho sách (${row}x${cow}) ---`);
                for (let i = 1; i <= row; i++) {
                    let line = "";
                    for (let j = 1; j <= cow; j++) {
                        let output_book = `[${i}-${j}]`;
                        if (i === j) {
                            output_book += "(Kệ ưu tiên)";
                        }
                        line += output_book + "  ";
                    }
                    console.log(line);
                }
                alert("Đã in bản đồ kho ra Console (F12).");
                break;
            }

            case 3: {
                quantity = Number(prompt("Nhập số lượng sách hiện có:"));
                cost = Number(prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):"));
                years = Number(prompt("Nhập số năm dự toán:"));
                if (isNaN(quantity) || isNaN(cost) || isNaN(years)) {
                    alert("Dữ liệu nhập vào phải là số!");
                    break;
                }
                console.log("--- Dự toán phí bảo trì sách theo năm ---");
                let totalCost;
                for (let y = 1; y < years; y++) {
                    totalCost = quantity * cost;
                    console.log(`Năm ${y}: ${totalCost.toLocaleString()} VNĐ (Đơn giá: ${cost.toFixed(0)}/cuốn)  `);
                    cost = cost * 1.1;
                }
                alert("Đã hoàn thành bảng dự toán tại Console.");
                break;
            }
            case 4: {
                n = Number(prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):"));
                if (isNaN(n) || n <= 0) {
                    alert("Vui lòng nhập số N dương! ");
                    break;
                }
                for (let i = 1; i <= n; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        list += i;
                        count++;
                    }
                }
                console.log(list || "Không có mã nào thỏa mãn.");
                console.log(`=> Tổng cộng có ${count} mã may mắn.`);
                alert(`Tìm thấy ${count} mã may mắn. Xem chi tiết tại Console.`);
                break;
            }
            case 5: {
                alert("Hệ thống đang đăng xuất... Hẹn gặp lại!")
                break;
            }
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại!")
                break;
        }
    } while (choice !== 5);
}



