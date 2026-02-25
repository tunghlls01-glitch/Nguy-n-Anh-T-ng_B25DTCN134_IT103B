const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37",
];
//split để tách dữ liệu
let arr_new_players = players.map((index) => {
    let arr = index.split(" - ");
    return [
        arr[0],
        arr[1],
        Number(arr[2]),
        Number(arr[3]),
        Number(arr[4]),
    ];
});
//reduce để gom nhóm + cộng dồn
let arr_reduce = arr_new_players.reduce((acc, cur) => {
    let position = cur[1];
    let goals = cur[2];
    let assists = cur[3];
    let matches = cur[4];

    let index = acc.findIndex((s) =>{
        return s[0] === position;
    });

    if (index === -1) {
        acc.push([position, 1, goals, assists, matches]);
    } else {
        acc[index][1]++;
        acc[index][2] += goals;
        acc[index][3] += assists;
        acc[index][4] += matches;
    }
    return acc;
}, []);

console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ\n");
//tính trung bình
//forEach để in ra
let sum = 0;

arr_reduce.forEach((s) => {
    let position = s[0];
    let count = s[1];
    let goals = s[2];
    let assists = s[3];
    let matches = s[4];

    let avg = ((goals + assists) / matches).toFixed(2);

    sum += goals;

    console.log(position + ":\n");
    console.log("Số cầu thủ:", count);
    console.log("Tổng bàn thắng:", goals);
    console.log("Tổng kiến tạo:", assists);
    console.log("Tổng số trận:", matches);
    console.log("Trung bình hiệu suất/trận:", avg, "\n");
});
console.log("Tổng bàn thắng toàn đội:", sum);