const players = [
    "Messi - Forward - 25",
    "Ronaldo - Forward - 30",
    "Neymar - Forward - 18",
    "De Bruyne - Midfielder - 8",
    "Kante - Midfielder - 2",
    "Van Dijk - Defender - 5",
    "Alisson - Goalkeeper - 0",
];

function getReversedNames(players) {
    return players.map((value) => {
        return value.split("-")[0].trim();     
    });
}

let arr_name = getReversedNames(players);

let arr_new = arr_name.reverse();

console.log(arr_new);


