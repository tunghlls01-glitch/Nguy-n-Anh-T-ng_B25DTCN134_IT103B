const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37",
];

function reportByPosition(players, minGoals = 5) {
    const n = players.map((value) => {
        const arr = value.split(" - ");
        return {
            name: arr[0],
            position: arr[1],
            goals: +arr[2],
            assists: +arr[3],
            matches: +arr[4]
        };
    });

    const copy_filter = n.filter((value) => {
        return value.goals >= minGoals;
    });

    const copy_reduce = copy_filter.reduce((acc, cur) => {
        if (!acc[cur.position]) {
            acc[cur.position] = [];
        }
        acc[cur.position].push(cur);
        return acc;
    }, {});

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ\n");
     
}

reportByPosition(players);