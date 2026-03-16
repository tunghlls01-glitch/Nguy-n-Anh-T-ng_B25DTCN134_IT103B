const todos = [
    {id: 1, task: "Mua bánh chưng", done: false},
    {id: 2, task: "Dọn nhà đón Tết", done: false},
    {id: 3, task: "Gói bánh chưng", done: false},
    {id: 4, task: "Trang trí nhà cửa", done: false},
];

function renderTodosLish() {
    let str = "";
    for(let i = 0; i < todos.length; i++) {
        str += `
            <div class="all">
                <div class="main_div">
                    <span>🌸</span>
                    <p>${todos[i].task}</p>
                </div>
                <p class="p_status"><i>chưa làm</i></p>
            </div>
        `
    }
    document.getElementById("jobList").innerHTML = str;
};
renderTodosLish();

localStorage.setItem("myTodos", JSON.stringify(todos));