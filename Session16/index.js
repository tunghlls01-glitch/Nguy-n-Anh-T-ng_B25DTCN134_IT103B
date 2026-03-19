let employees = [];
let table = document.getElementById("employeeTable");
function formatDate(date) {

    let parts = date.split("-");

    let year = parts[0];
    let month = parts[1];
    let day = parts[2];

    return `${day}/${month}/${year}`;

}
function renderEmployees() {

    let html = "";

    employees.forEach(emp => {

        html += `
            <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${formatDate(emp.birth)}</td>
            <td>${emp.email}</td>
            <td>${emp.address}</td>
            <td>
            <button onclick="editEmployee(${emp.id})">Sửa</button>
            <button onclick="deleteEmployee(${emp.id})">Xóa</button>
            </td>
            </tr>
            `;

    });

    table.innerHTML = html;

}

renderEmployees();