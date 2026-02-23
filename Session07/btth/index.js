/* 
Tạo 2 mảng
1, chứa tên cầu thủ
2, chứa số bàn thắng tương ứng
*/

let playerList = [];
let goalList = [];
let choose;

do {
    choose = +prompt(`
        --- QUẢN LÝ ĐỘI BÓNG ---
        1. Nhập cầu thủ mới
        2. Xem danh sách đội hình
        3. Xem thành tích toàn đội
        4. Tìm Vua phá lưới
        0. Thoát
        `);
        switch (choose) {
            case 0:{
                console.log("Thoat");
                
                break;
            }
            case 1:{
                let name = prompt("Mời bạn nhập tên cầu thủ");
                let goal = +prompt("Nhập số bàn thắng");
                addPlayer(name, goal);
                
                break;
            }
            case 2:{
                // console.log("Xem danh sách đội hình");
                showSquad();
                break;
            }
            case 3:{
                console.log(`Tổng số bàn thắng của toàn đội`, getTotalGoals());
                
                break;
            }
            case 4:{
                for (let i = 0; i < goalList.length; i++) {
                   if(goalList[i] == findMostGoals(goalList)) {
                        console.log(`Cầu thủ ${playerList[i]} ghi nhiều bàn nhất: ${goalList[i]} bàn ! ` );
                   }
                }
                
                break;
            }

                
        
            default:
                console.log("Lựa chọn không hợp lệ!");
                break;
        }
} while (choose !== 0);

//1. Hàm thêm cầu thủ 
function addPlayer(name, goal) {
    playerList.push(name);
    goalList.push(goal);
    console.log(`Thêm cầu thủ ${name} thành công! `);

    
}

//2. Hiển thị danh sách cầu thủ
function showSquad() {
    for (let i = 0; i < playerList.length; i++) {
        console.log(`${i+1}. ${playerList[i]} - ${goalList[i]} bàn`);
    }
}
//3. Xem thành tích toàn đội
function getTotalGoals() {
    let sum = 0;
    for (let i = 0; i < goalList.length; i++) {
        sum+=goalList[i];
    }
    return sum;
}
//4. Tìm vua phá lưới
function findMostGoals(goalArray){
    let max = goalArray[0];
    for (let i = 0; i < goalArray.length; i++) {
        if (goalArray[i] > max) {
            max = goalArray[i];
        }
    }
    return max; 
}
