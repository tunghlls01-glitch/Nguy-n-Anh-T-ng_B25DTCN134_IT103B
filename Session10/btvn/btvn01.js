const players = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
};

function showPlayerInfo (players) {
    console.log(`
        Tên: ${players.name}
        VỊ trí: ${players.position}
        Tuổi: ${players.age}
        Bàn thắng mùa này: ${players.goals}
        Kiến tạo mùa này: ${players.assists}
        Tổng đóng góp: ${players.goals + players.assists}
    `);
};

showPlayerInfo(players);