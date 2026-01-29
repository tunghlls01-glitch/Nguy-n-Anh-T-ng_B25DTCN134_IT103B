let nameBook = prompt("Tên sách");
let userName = prompt("Tên người mượn");
let like = +prompt("Mức độ yêu thích");

switch (like) {
    case 1:
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
        break;
    case 2: 
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
        break;
    case 3:
        console.log("Sách này khá ổn, có thể mượn");
        break;
    case 4:
        console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
        break;
     case 5:
        console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
        break;
    default:
        console.log("Không có mức độ yêu thích này!");
        break;
}
