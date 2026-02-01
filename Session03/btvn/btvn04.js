let answer;
let count_lost = 0;
let count_end = 0;
let count_exist = 0;
let count_normal = 0;
while (true) {
    answer = prompt("Bạn có muốn gia hạn(có || không)");
    if (answer == "không" ) {
        break;
    } else {
        let idBook = prompt("Nhập mã sách");
        while(idBook == " ") {
            idBook = prompt("Nhập lại mã sách");
        }
        let nameBook = prompt("Tên sách");
        let quantityBook = +prompt("số lượng sách trong kho");
        while(quantityBook < 0) {
            quantityBook = prompt("Nhập sai mời bạn nhập lại số lượng thực tế trong kho");
        }
        let statusBook = +prompt("Tình trạng sách(1 và 2):");
        while (true) {
            if (statusBook == 1 || statusBook ==2){
                break;
            } else {
                statusBook = +prompt("Tình trạng sách(1 và 2) mời bạn nhập lại:");
            }
        }
        if (statusBook == 2) {
            count_lost++;
        } else if (statusBook == 1 && quantityBook == 0) {
            count_end++;
        } else if (statusBook == 1 && quantityBook >= 10) {
            count_exist++;
        } else {
            count_normal++;
        }
    }
}
let sum = 0;
sum = count_lost + count_end + count_exist + count_normal;
console.log(`Tổng số sách đã kiểm kê: ${sum} cuốn`);
console.log(`Số sách mất: ${ count_lost} cuốn`);
console.log(`Số sách hết hàng:  ${count_end} cuốn`);


