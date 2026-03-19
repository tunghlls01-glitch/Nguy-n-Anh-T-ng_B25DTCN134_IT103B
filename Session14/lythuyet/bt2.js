/* 
    RENDER dữ liệu bằng DOM


*/
let students = [
    {id: 1, name:"Lê minh sơn" , class:"CNTT05" , email:"son@gmain.com" },
    {id: 2, name:"Lê minh thu" , class:"CNTT05" , email:"thu@gmain.com" },
    {id: 3, name:"Lê minh huyền" , class:"CNTT05" , email:"huyen@gmain.com" }
];
function renderStuden(students) {
    let html = "";
    for(let i = 0; i < students.lenght; i++) {
        html += `
        <tr>
            <td>1</td>
            <td>${students[i].name}</td>
            <td>CNTT5</td>
            <td>MS01</td>
            <td>son@gmai.com</td>
        </tr>`
    }
    
}