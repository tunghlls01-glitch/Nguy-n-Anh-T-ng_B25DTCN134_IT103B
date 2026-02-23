let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng văn G-Thủ môn",
];
console.log(getShortestPlayerName());
console.log(countPlayersWithPositionLengthGreaterThan(6));


function getShortestPlayerName() {
    let short_name = players[0].split("-")[1];
    for (let i = 0; i < players.length; i++) {
        let name = players[i].split("-")[1];

        if(name.length < short_name.length) {
            short_name = name;
        } 
    }

    return short_name;
}

function countPlayersWithPositionLengthGreaterThan(length) {
    let count = 0;
    for (let i = 0; i < players.length; i++) {
        let position = players[i].split("-")[2];

        if (position.length > length) {
            count++;
        }
    }

    return count;
}