const players = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};

function addPerformanceScore(players) {
    const n = ((players.goals + players.assists) / players.matchesPlayed).toFixed(2);
    players.performancePerMatch = n;
    if (players.performancePerMatch >= 1.0) {
        players.isKeyPlayer = true;
    } else {
        players.isKeyPlayer = false;
    }
    console.log(players);
}
addPerformanceScore(players);


