let nameBook = prompt("Tên sách:");
let category = prompt("Thể loại:");
let statusBook = prompt("Tình trạng( sẵn || mượn):");

// thể loại khoa học và lịch sử

if (category == "khoa học"){
    if (statusBook == "sẵn"){
        console.log("Sách này có sẵn trong thư viện");
    } else if (statusBook == "mượn") {
        console.log("Sách đã được mượn");
    }
} else if (category == "lịch sử" ) {
    if (statusBook == "sẵn"){
        console.log("Sách này có sẵn trong thư viện");
    } else if (statusBook == "mượn") {
        console.log("Sách đã được mượn");
    } 
} else {
    console.log("Sách này có thể đọc giải trí");
}