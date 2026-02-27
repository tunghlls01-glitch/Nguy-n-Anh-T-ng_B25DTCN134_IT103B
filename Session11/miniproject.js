let students = [
    { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
    { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
    { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
    { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" },
];
let copy_id = students.length + 1;
//hàm case1: thêm
function create() {
    let name = prompt("mời bạn nhập tên: ");
    if (name.trim() === "") {
        return alert("tên không được để trống");
    }
    let age = +prompt("mời bạn nhập tuổi: ");
    if (age <= 0 || isNaN(age)) {
        return alert("nhập sai tuổi");
    }
    let gpa = +prompt("MỜi bạn nhập GPA (0-10): ");
    if (gpa < 0 || gpa > 10 || isNaN(gpa)) {
        return ("Nhập sai GPA");
    }
    let statusNew = prompt("Mời bạn nhập trạng thái (active / inactive):");
    if (statusNew.trim() === "" || statusNew.toLowerCase() != "active" && statusNew.toLowerCase() != "inactive") {
        return alert("trạng thái bạn nhập sai");
    }
    let newArrStudents = {
        id: copy_id++,
        name: name.trim(),
        age: age,
        gpa: gpa,
        status: statusNew
    };
    students.push(newArrStudents);
    alert(`Thêm sinh viên thành công!\n ID: ${newArrStudents.id} | Name: ${newArrStudents.name} | Age: ${newArrStudents.age} | GPA: ${newArrStudents.gpa} | Status: ${newArrStudents.status}`);
};
//case 2: hiển thị
function read(students) {
    let arr = students.map((value) => {
        return `ID: ${value.id} | Name: ${value.name} | Age: ${value.age} | GPA: ${value.gpa} | Status: ${value.status}`
    });
    alert(arr.join("\n"));
}
//case 3: tìm gpa > 8.0
function filter(students) {
    let arrFilter = students.filter((value) => {
        return value.gpa > 8.0;
    });
    let arrNewFilter = arrFilter.map((value) => {
        return `ID: ${value.id} | Name: ${value.name} | Age: ${value.age} | GPA: ${value.gpa} | Status: ${value.status}`
    });
    alert(arrNewFilter.join("\n"));
}
//case 4: cập nhật
function update(students) {
    let id = +prompt("Mời bạn nhập id muốn update: ");
    let ArrStudents = students.find((value) => {
        return value.id === id;
    });
    if (!ArrStudents) {
        return alert(`Không tìm thấy ${id} `);
    }
    let newName = prompt("Mời bạn nhập tên mới: ");
    if (newName && newName.trim() !== "") {
        ArrStudents.name = newName.trim();
    }
    let newGpa = +prompt("Mời bạn nhập GPA mới (0-10):");
    if (!Number.isNaN(newGpa) && newGpa >= 0 && newGpa <= 10) {
        ArrStudents.gpa = newGpa;
    }
    alert(`cập nhật thành công!`);
}
//case 5: delete
function deleteStudent(students) {
    let id = +prompt("Nhập id học sinh cần xóa: ");
    if (Number.isNaN(id)) {
        return alert(`Không tìm thấy id `);
    }
    let arrDelete = students.findIndex((value) => {
        return value.id === id;
    });
    if (arrDelete === -1) {
        alert("Không tìm thấy sinh viên");
        return;
    }
    students.splice(arrDelete, 1);

    alert("Xóa sinh viên thành công!");
}
// case 6: 
function compliance(students) {
    let copy_some = students.some((value) => {
        return value.age < 18;
    });
    let copy_every = students.every((value) => {
        return value.status === "active";
    });
    alert(`
        ít nhất 1 sinh viên trên 18: ${copy_some ? "có" : "Không"}
        tính đồng nhất của trạng thái active: ${copy_every ? "có" : "Không"}
        `)
}
// case 7:
function academic(students) {
    // tổng GPA
    let arrTotalGpa = Object.values(students)
    let totalGpa = arrTotalGpa.reduce((acc, cur) => {
        return acc += Number(cur.gpa);
    }, 0);
    //Tổng student
    let totalStudent = students.length;
    //trung bình gpa
    let averageGpa = totalGpa / totalStudent;
    // tìm min,max
    let maxStudent = students.reduce((max, cur) =>
        cur.gpa > max.gpa ? cur : max
    );
   
    let minStudent = students.reduce((min, cur) =>
        cur.gpa < min.gpa ? cur : min
    );
    alert(`
        Total student: ${totalStudent}
        Total GPA sum: ${totalGpa.toFixed(2)}
        Average GPA: ${averageGpa.toFixed(2)}

        Highest GPA: ${maxStudent.name} (${maxStudent.gpa})
        Lowest GPA: ${minStudent.name} (${minStudent.gpa})
        `);
}
//case 8: 
function arrData(students) {
    students.forEach((value) => {
        value.name = value.name.toUpperCase();
    });
    let arrNewToUpperCase = students.map((value) => {
        return `ID: ${value.id} | Name: ${value.name} | Age: ${value.age} | GPA: ${value.gpa} | Status: ${value.status}`
    });
    alert(arrNewToUpperCase.join("\n"));
}
let choice;
do {
    choice = +prompt(`
        1. Create Student
        2. Read All Students
        3. Filter Scholarship Candidates
        4. Update Student Profile
        5. Delete Record
        6. Compliance Verification
        7. Academic Statistics
        8. Data Normalization
        0. Exit
        Mời bạn nhập lệnh(0-8):
        `);
    switch (choice) {
        case 1:
            create();
            break;
        case 2:
            read(students);
            break;
        case 3:
            filter(students);
            break;
        case 4:
            update(students);
            break;
        case 5:
            deleteStudent(students);
            break;
        case 6:
            compliance(students);
            break;
        case 7:
            academic(students);
            break;
        case 8:
            arrData(students)
            break;
        case 0:
            alert("Tạm biệt");
            break;
        default:
            alert("lựa chọn không hợp lệ");
            break;
    }
} while (choice !== 0);