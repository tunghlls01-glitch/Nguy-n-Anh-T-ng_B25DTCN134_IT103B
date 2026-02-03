let array = [];
let n = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn? ");
while(true) {
    if(isNaN(n) || n < 0){
        n = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn? ");
    } else {
        break;
    }
}

for (let i = 0; i < n; i++) {
    array[i] = prompt(`Nhập tên cuốn sách bị trả muộn thứ ${i+1}:`);
}
console.log(`Tổng số sách bị trả muộn: ${n}`);
console.log("Danh sách sách bị trả muộn:");

for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}. ${array[i]}`);
}