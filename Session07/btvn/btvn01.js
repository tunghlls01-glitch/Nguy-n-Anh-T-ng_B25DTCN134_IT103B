let playerlds = []; // mảng lưu mã cầu thủ
let playerPositions = []; // mảng lưu vị trí 
let id;

let size = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");

if (size > 0) {
    for (let i = 0; i < size; i++) {
        alert(`Nhập cầu thủ ${i + 1} :`);

        while (true) {
            id = prompt(`Mã cầu thủ: `);
            if (!id) {
                alert("Mã không được để trống!");
                continue;
            }
            let floot = false;
            for (let i = 0; i < playerlds.length; i++) {
                if (playerlds[i] === id) {
                    floot = true;
                    break;
                }
            }
            if (floot) {
                alert("Mã đã tồn tại");
            } else {
                break;
            }
        }
        let index = +prompt(`Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo): `);
        let position;
        if (index === 1) {
            position = "Thủ môn";
        } else if (index == 2) {
            position = "Hậu vệ";
        } else if (index == 3) {
            position = "Tiền vệ";
        } else if (index == 4) {
            position = "Tiền đạo";
        } else {
            position = "Không có vị trí";
        }
        addPlayer(id, position);
    }
} else {
    alert("Không hợp lệ");
}
printTeamRoster();

let choice = +prompt("Nhập vị trí muốn đếm (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):");
let target;
if (choice === 1) {
    target = "Thủ môn";
} else if (choice == 2) {
    target = "Hậu vệ";
} else if (choice == 3) {
    target = "Tiền vệ";
} else if (choice == 4) {
    target = "Tiền đạo";
} else {
    target = "";
}
let count = 0;
let array = [];
for (let i = 0; i < playerPositions.length; i++) {
    if (playerPositions[i] === target) {
        count++;
        array.push(i);
    }
}
console.log(`Số cầu thủ ở vị trí ${target}: ${count} `);
console.log(`Các chỉ số cầu thủ ở vị trí ${target}: ${array.join(", ")} `);


//Hàm thêm  cầu thủ 
function addPlayer(id, position) {
    playerlds.push(id);
    playerPositions.push(position);
}
//hàm hiển thị
function printTeamRoster() {
    console.log(`Đội bóng hiện tại (${size} cầu thủ)`);
    for (let i = 0; i < size; i++) {
        console.log(`${i + 1}. ${playerlds[i]} - ${playerPositions[i]}`);
    }
}