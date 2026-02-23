let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng văn G-Thủ môn",
];

console.log(getAllPositions());
console.log(findPlayersWithLongestName());
console.log(countPlayersStartingWithLetter("t"));




function getAllPositions() {
    let positions = [];
    for (let i = 0; i < players.length; i++) {
        let n = players[i].split("-");
        let position = n[2];
        if (!positions.includes(position)) {
            positions.push(position);
        }
    }
    return positions;
}

function findPlayersWithLongestName() {
    let long_name = "";
    for (let i = 0; i < players.length; i++) {
        let name = players[i].split("-")[1];

        if(name.length > long_name.length) {
            long_name = name;
        } 
    }

    return long_name;
}

function countPlayersStartingWithLetter(letter) {
    let count = 0;

    for (let i = 0; i < players.length; i++) {
        let name = players[i].split("-")[1];
        let copy = name[0];
        if (copy.toLowerCase() === letter.toLowerCase()) {
            count++;
        }
        
    }

    return count;
}