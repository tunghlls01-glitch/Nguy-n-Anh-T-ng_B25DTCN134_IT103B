const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];
displayPlayer(players);

function displayPlayer(players) {
    players.forEach((value) => {
        console.log(`${value}`);
    });
}