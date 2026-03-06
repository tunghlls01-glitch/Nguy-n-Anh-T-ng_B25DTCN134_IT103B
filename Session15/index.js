let arrTasks = [];

//thêm công việc
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.onclick = addTask;

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let nameTask = taskInput.value.trim();

    if (nameTask === "") {
        alert("Không để công việc trống");
        taskInput.focus();
        return;
    }

    let newArrTasks = {
        id: Date.now(),
        name: nameTask,
        status: false
    };

    arrTasks.unshift(newArrTasks);
    rederTasks();

    taskInput.value = "";
    taskInput.focus();
}
// hàm hiển thị
function rederTasks() {
    if (arrTasks.length == 0) {
        taskList.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">📋</div>
            <div class="empty-state-text">
                Chưa có công việc nào. Hãy thêm công việc mới!
            </div>
        </div>
        `;
    } else {
        let html = "";
        for (let i = 0; i < arrTasks.length; i++) {
            let textClass = arrTasks[i].status ? "task-text completed" : "task-text";
            let checked = arrTasks[i].status ? "checked" : "";
            html += `
            <div class="task-item" data-id="${arrTasks[i].id}">
                <input type="checkbox"
                class="task-checkbox"
                onclick="toggleTask(${i})"
                ${checked}
                /><span class="${textClass}">
                    ${arrTasks[i].name}
                </span>
                <input type="text"
                class="task-edit-input"
                id="edit-${i}"
                value="${arrTasks[i].name}"
                style="display:none"
                />
                <div class="task-actions">
                    <button class="btn-edit" onclick="editTask(${i})">✏️ Sửa</button>
                    <button class="btn-save" onclick="saveTask(${i})" style="display:none">
                    💾 Lưu
                    </button>
                    <button class="btn-cancel" onclick="cancelEdit(${i})" style="display:none">
                    ❌ Hủy
                    </button>
                    <button class="btn-delete" onclick="deleteTask(${i})">
                    🗑️ Xóa
                    </button>
                </div>
            </div>
            `;
        }
        taskList.innerHTML = html;
    }
    updateFooter();
}
rederTasks();
//thay đổi trạng thái
function toggleTask(index) {
    arrTasks[index].status = !arrTasks[index].status;
    rederTasks();
}
//Sửa 
function editTask(index){
    let taskItem = document.querySelectorAll(".task-item")[index];
    taskItem.querySelector(".task-text").style.display = "none";
    taskItem.querySelector(".task-edit-input").style.display = "block";
    taskItem.querySelector(".btn-edit").style.display = "none";
    taskItem.querySelector(".btn-save").style.display = "inline-block";
    taskItem.querySelector(".btn-cancel").style.display = "inline-block";
}
function saveTask(index){
    let input = document.getElementById(`edit-${index}`);
    let newName = input.value.trim();
    if(newName === ""){
        alert("Không được để trống công việc");
        return;
    }
    arrTasks[index].name = newName;
    rederTasks();
}
function cancelEdit(index){
    rederTasks();
}
// hàm xóa 
function deleteTask(index) {
    let check = confirm(`Bạn có chắc muốn xóa sản phẩm ${arrTasks[index].name} không ?`);
    if (check) {
        arrTasks.splice(index, 1);
        rederTasks();
    }
}

//hàm cộng footer
function updateFooter() {
    let completed = arrTasks.filter(task => task.status === true).length;
    let total = arrTasks.length;
    document.getElementById("completedCount").innerText = completed;
    document.getElementById("totalCount").innerText = total;
}



