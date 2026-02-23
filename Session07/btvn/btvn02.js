let playerlds = ["P001", "P002", "P003","P004","P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];
printTeamRoster();
let playerId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001): ");
let newName;
let newJerseyNumber
if (playerId) {
    newName = prompt("Nhập tên mới:");
    newJerseyNumber = prompt("Số áo mới: ");
}
let check = updatePlayerNameAndJersey(playerId, newName, newJerseyNumber);
if (check) {
      alert("thay đổi thành công");
      console.log("Danh sách mới");
      printTeamRoster();
} else {
    alert("Không tìm thấy cầu thủ với mã này!");
}
//hàm hiển thị
function printTeamRoster() {
    for (let i = 0; i < playerlds.length; i++) {
        console.log(`${i+1}. ${playerlds[i]} - ${playerNames[i]} - ${playerJerseyNumbers[i]}`);
    }
}
//hàm update
function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    for (let i = 0; i < playerlds.length; i++) {
        if (playerlds[i] === playerId) {
            playerNames[i] = newName;
            playerJerseyNumbers[i] = newJerseyNumber;
            return true;
        }      
    }
    return false;
}