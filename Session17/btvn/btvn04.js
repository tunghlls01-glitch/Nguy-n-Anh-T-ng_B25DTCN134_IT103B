const initialTodos = [
    { id: 1, task: "Mua bánh chưng", done: false },
    { id: 2, task: "Dọn nhà đón Tết", done: false },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
    { id: 5, task: "Mua phong bao lì xì", done: false },
    { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false }
];
let todos = JSON.parse(localStorage.getItem("myTodos")) || initialTodos;
localStorage.setItem("myTodos",  JSON.stringify(todos))

function renderInitialTodos() {
    let str = "";
    for (let i = 0; i < todos.length; i++) {
        str += `
            <div class="all ${todos[i].done ? "done" : ""}" onclick="status_change(${i})">
                <div class="main_div">
                    <input type="checkbox" ${todos[i].done ? "checked" : ""}>
                    <span>${todos[i].task}</span>
                    <button onclick="deleteInitialTodos(${i})">🗑️</button>
                </div>
            </div>
        `
    }
    document.getElementById("jobList").innerHTML = str;
}

function status_change(index) {
    todos[index].done = !todos[index].done;
    localStorage.setItem("myTodos", JSON.stringify(todos));
    renderInitialTodos();
}

renderInitialTodos();

function addInitialTodos() {
    let nameTodos = document.getElementById("newJob").value.trim();
    let newInitialTodos = {
        id: Date.now(),
        task: nameTodos,
        done: false,
    };
    todos.unshift(newInitialTodos);
    localStorage.setItem("myTodos", JSON.stringify(todos))
    renderInitialTodos();
}

function deleteInitialTodos(index) {
    let check = confirm(`Bạn có muốn xóa công việc "${todos[index].task}" không ? `);
    if(check) {
        todos.splice(index, 1);
        renderInitialTodos();
    }
}