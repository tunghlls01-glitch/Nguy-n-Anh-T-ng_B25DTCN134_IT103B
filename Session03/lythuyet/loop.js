/* 
    đoạn code logic được lặp di lặp lại và tuân theo 1 quy luật chung!
    
    trong js có 3 vòng lặp chính:

    1.for
        - biết trước số lần lặp
        - for(giá trị khởi tạo; điều kiện; bước nhảy) {
        }
        - Luồng hoạt động 
        FOR LỒNG


    2.while 
    
    3. do-while

    I- khi nào dung 

    II - cú pháp

    III - luồng hoạt động

*/

// for (let i = 1; i < 100; i++) {
//     console.log(`Số tờ báo còn lại ${100 - i} `);
// }

// for (let i = 1; i < 3; i++) {
//     for(let j = 1; j < 4; j++ ) {
//     }
// }

for (let i = 1; i < 10; i++) {
    document.writeln(`Bảng cửu chương ${i} `); 

    for (let j = 1; j <= 10; j++) {
        
        document.writeln( `${i} x ${j} = ${i * j} `);
    }

}
