let players = [];
let size;
let id;
let user_name;
let position_team;
let position;

while (true) {
    size = +prompt("Có bao nhiêu cầu thủ cần nhập vào dội bóng?");
    if (size > 0) {
        break;
    } else {
        alert("nhập số nguyên dương");
    }
}

for (let i = 0; i < size; i++) {
    while (true) {
        id = prompt("Nhập mã cầu thủ:");
        let check = false;
        for (let i = 0; i < players.length; i++) {
            let count = players[i].split("-")[0]
            if (id === count) {
                check = true;
                alert("mã trùng nhập lại");
                break;
            }
        }
        if (!check) {
            break;
        }
    }

    while (true) {
        user_name = prompt("Nhập tên cầu thủ:");
        if (user_name) {
            break;
        } else {
            alert("Tên không để trống")
        }
    }

    while (true) {
        position_team = +prompt("Nhập vị trí(chọn số: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo)");
        if (position_team === 1) {
            position = "Thủ môn"
            break;
        } else if (position_team === 2) {
            position = "Hậu vệ"
            break;
        } else if (position_team === 3) {
            position = "Tiền vệ"
            break;
        } else if (position_team === 4) {
            position = "Tiền đạo"
            break;
        } else {
            alert("chọn sai nhập lại")
        }
    }
    pushPlayer(id, user_name, position);
}
printTeamRoster();

function printTeamRoster() {
    for (let i = 0; i < players.length; i++) {
        let search = players[i].split("-");
        console.log(`${i + 1}. ${search[0]} - ${search[1]} - ${search[2]} `);
    }
}

function pushPlayer(id, user_name, position) {
    players.push(`${id}-${user_name}-${position}`);
}