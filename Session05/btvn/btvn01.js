let n;
let array = [];
n = prompt("Nhập số sách cần trả ?");
for (let i = 0; i < n; i++) {
    array[i] = prompt(`Nhập tên cuốn sách thứ ${i+1}:  `);
}
console.log(`Tổng số sách được trả là: ${n}`);
console.log("Danh sách đã trả:");

for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}. ${array[i]}`);
}