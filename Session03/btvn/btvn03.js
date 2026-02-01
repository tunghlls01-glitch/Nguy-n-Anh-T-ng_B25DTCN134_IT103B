let count_win = 0; 
let count_lose = 0;
let sum;
let answer;
while (true) {
    answer = prompt("Bạn có muốn gia hạn(có || không)");
    if (answer == "không" ) {
        break;
    } else {
        let userName = prompt("Tên bạn đọc");
        let nameBook = prompt("Tên sách");
        let borrow_date = +prompt("số ngày mượn");
        while (borrow_date < 1) {
            borrow_date = +prompt("số ngày mượn không hợp lệ nhập lại");
        }
        let extend_date = +prompt("Số ngày gia hạn");
        while (extend_date < 1) {
            extend_date = +prompt("số ngày gia hạn không hợp lệ nhập lại");
        }
        sum = borrow_date + extend_date;
        if (sum > 60 && borrow_date > 45) {
            console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa và Đã mượn quá lâu (>45 ngày)");
            count_lose++;
        } else {
            console.log("Gia hạn thành công"); 
            count_win++;
        }
    }
}
console.log(`Số lần gia hạn thành công ${count_win}`);
console.log(`Số lần gia không hạn thành công ${count_lose}`);

