const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - defender - 5 - 3",
    "Alisson - Goalkeeper - 0 - 1",
];

function reportTopPerformers(position, players) {

    const n = players.map((value) => {
        const n = value.split(" - ");
        const name = n[0];
        const goals01 = +n[2];
        const goals02 = +n[3];
        const sum = goals01 + goals02;

        return { name, sum };
    });

    let copy = n.filter((value) => {
        return value.sum >= position;
    });

    copy.forEach((value) => {
        console.log(`${value.name}: ${value.sum}`);
    });

    let sum_performers = copy.reduce((acc, cur) => {
        acc = acc + cur.sum;
        return acc;
    }, 0);

    console.log(`Tổng hiệu suất: ${sum_performers}`);

    return sum_performers;
}

reportTopPerformers(30, players);
reportTopPerformers(20, players);
reportTopPerformers(50, players);