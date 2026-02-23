let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng văn G-Thủ môn",
];
printTeamRoster();
countPlayerByPostion(players);
let copy = hasGoalkeeper();
console.log(`${copy}`);


function printTeamRoster() {
    for (let i = 0; i < players.length; i++) {
        let array = players[i].split("-");
        console.log(`${i + 1}. ${array[0]} | ${array[1]} | ${array[2]}`);
    }
}

function countPlayerByPostion(players) {
    let count_one = 0;
    let count_two = 0;
    let count_three = 0;
    let count_four = 0;
    for (let i = 0; i < players.length; i++) {
        let n = players[i].split("-");
        if (n[2] === "Tiền đạo") {
            count_one++;
        } else if (n[2] === "Hậu vệ") {
            count_two++;
        } else if (n[2] === "Thủ môn") {
            count_three++;
        } else {
            count_four++;
        }
    }
    console.log(`Tiền Đạo : ${count_one},Hậu vệ: ${count_two},Thủ Môn: ${count_three},Tiền vệ: ${count_four}`);
}

function hasGoalkeeper() {
    let count = 0;
    for (let i = 0; i < players.length; i++) {
        if (players[i].split("-")[2] === "Thủ môn") {
            count++;
        }
    }
    if (count > 0) {
        return true;
    } else {
        return false;
    }
}