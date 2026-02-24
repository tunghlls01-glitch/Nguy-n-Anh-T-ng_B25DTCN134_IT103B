const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

function filterPlayersByPosition(position, players) {
    return players.filter((value) => {
        return value.split("-")[1].trim() == position;
    });
}

console.log(filterPlayersByPosition("Midfielder", players));
console.log(filterPlayersByPosition("Forward", players));

