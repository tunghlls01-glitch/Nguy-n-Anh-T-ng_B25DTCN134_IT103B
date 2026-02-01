let answer;
let userName;
let idBook;
let nameBook;
let date;
let prioritize;

let count_lose = 0; // bị từ chối
let count_win = 0; //thành công
let count_consider = 0; // xem xét
while (true) {
    answer = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");
    if (answer == "không") {
        break;
    } else if (answer == "có") {
        userName = prompt("Tên bạn đọc");
        idBook = prompt("Mã sách muốn đặt trước");
        nameBook = prompt("Tên sách");
        date = +prompt("Số ngày dự kiến chờ");
        while (date < 1) {
            date = +prompt("Mời bạn nhập lại số ngày dự kiến chờ");
        }
        prioritize = +prompt("Ưu tiên (nhập số 1-3):");
        while(true) {
            if (prioritize == 1 || prioritize == 2 || prioritize == 3) {
                break;
            } else {
                prioritize = +prompt("Mời bạn nhập lại số ưu tiên (1-3)");
            }
        }
        if (date > 45) {
            console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
            count_lose++;
        } else if (prioritize == 3) {
            console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
            count_win++;
        } else if (prioritize == 2 && date <= 30)  {
            console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
            count_win++;
        } else if (prioritize == 1 && date <= 21) {
            console.log("Đặt trước thành công");
            count_win++;
        } else {
            console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
            count_consider++;
        }
    }
}

let sum = 0;
sum = count_lose + count_win;
console.log(`Tổng số yêu cầu đã xử lý ${sum}`);
console.log(`Số yêu cầu được đặt trước thành công ${count_win}`);
console.log(`Số yêu cầu bị từ chối ${count_lose}`);
console.log(`Số yêu cầu chờ xét duyệt ${count_consider}`);
