let answer;
let userName;
let idBook;
let feedback;
let level;
let note;

let count_serious = 0; // tăng số khiếu nại nghiêm trọng
let count_medium = 0; //trung bình
let count_light = 0; //nhẹ
let count_improve = 0; // cải thiện
let count_positive =0; // tích cực
while (true) {
    answer = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");
    if (answer == "không") {
        break;
    } else if (answer == "có") {
        userName = prompt("Tên bạn đọc (không được để trống)");
        while (true) {
            if (true) {
                break;
            } else {
                userName = prompt("Tên bạn đọc (không được để trống)");
            }
        }
        idBook = +prompt("Mã thẻ bạn đọc (nếu có, có thể để trống)");
        feedback = +prompt("Loại phản hồi (nhập số):");
        while (true) {
            if (feedback == 1 || feedback == 2 || feedback == 3) {
                break;
            } else {
                feedback = +prompt("Loại phản hồi (nhập số 1 - 3):");
            }
        }
        level = +prompt("Mức độ nghiêm trọng");
        while(true) {
            if (level == 1 || level == 2 || level == 3 ) {
                break;
            } else {
                level = +prompt("Mức độ nghiêm trọng nhập số 1-3 ");
            }
        }
        note = prompt("Nội dung ngắn gọn");

        if(feedback == 1 && level == 3) {
            console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
            count_serious++;
        } else if (feedback == 1 && level == 2) {
            console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
            count_medium++;
        } else if (feedback == 1 && level == 1) {
            console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
            count_light++;
        } else if (feedback == 2 ) {
            console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
            count_improve++;
        } else if (feedback == 3) {
            console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
            count_positive++;
        }
    }
}
let sum = 0;
sum = count_serious + count_medium + count_light + count_improve + count_positive;
console.log(`Tổng số phản hồi/khiếu nại đã xử lý ${sum}`);
console.log(`Số khiếu nại nghiêm trọng (mức 3) ${count_serious}`);
console.log(`Số khiếu nại trung bình (mức 2) ${count_medium}`);
console.log(`Số khiếu nại nhẹ (mức 1) ${count_light}`);
console.log(`Số đề xuất cải thiện ${count_improve}`);
console.log(`Số phản hồi tích cực ${count_positive}`);
