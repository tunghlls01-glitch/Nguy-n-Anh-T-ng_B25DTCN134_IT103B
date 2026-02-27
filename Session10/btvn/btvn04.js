const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 },
];

function analyzeSalary(minYears, teamPlayers) {
    let newArrPlayers = players.filter((value) => {
        return value.years >= minYears;
    });
    let sum = newArrPlayers.reduce((acc, cur) => {
        return acc += cur.salary;
    }, 0);
    let arr_01 = newArrPlayers.map((value) => {
        return value.salary;
    });
    
    let max = arr_01[0];
    for (let i = 0; i < arr_01.length; i++) {
        if (arr_01[i] > max) {
            max = arr_01[i];
        }
    }   
    let arrMax = newArrPlayers.filter((value) => {
        return value.salary == max;
    });
    let min = arr_01[0];
    for (let i = 1; i < arr_01.length; i++) {
        if (arr_01[i] < min) {
            min = arr_01[i];
        }
    }
    let arrMin = newArrPlayers.filter((value) => {
        return value.salary == min;
    });
    console.log(`totalSalary: ${sum},`);
    console.log("highestPaid:", arrMax);
    console.log("lowestPaid:", arrMin);
};
analyzeSalary(10, players);
analyzeSalary(30, players);