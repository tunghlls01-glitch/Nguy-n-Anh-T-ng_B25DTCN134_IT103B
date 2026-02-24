const playersNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];


function getUpperNames(playersNames) {
    return playersNames.map((value) => {
        return value.toUpperCase();
    });
}

console.log(getUpperNames(playersNames));
