let students = [
    { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
    { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
    { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
    { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" },
];

//case 1
function create(students) {
    let id;
    while (true) {
        id = prompt("Mời bạn nhập id (vi du: S01):");
        if (students.some(student => student.id == id)) {
            alert("ID bị trùng mời bạn nhập lại");
            continue;
        }
        if (id.trim() === "") {
            alert("Không được đê trống");
            continue;
        }
        break;
    }
    let name;
    while (true) {
        name = prompt("Mời bạn nhập tên: ");
        if (name.trim() === "") {
            alert("Không được đê trống");
            continue;
        }
        break;
    }
    let age;
    while (true) {
        age = +prompt("Mời bạn nhập tuổi(16-60): ");
        if (Number.isNaN(age)) {
            alert("age phải là số");
            continue;
        }
        if (age < 16 || age > 60) {
            alert("nhập sai tuổi");
            continue;
        }
        break;
    }
    let gpa;
    while (true) {
        gpa = +prompt("Mời bạn nhập gpa(0-10): ");
        if (Number.isNaN(gpa)) {
            alert("gpa phải là số");
            continue;
        }
        if (gpa < 0 || gpa > 10) {
            alert("nhập sai gpa");
            continue;
        }
        break;
    }
    let status;
    while (true) {
        status = prompt(`Mời bạn nhập trạng thái("active" hoặc "inactive"):`);
        if (status === "") {
            alert("Không được đê trống");
            continue;
        }
        status = status.trim().toLowerCase();
        if (status !== "active" && status !== "inactive") {
            alert(`Status chỉ được là "active" hoặc "inactive". Vui lòng nhập lại.`);
            continue;
        }
        break;
    }

    let newStudent = {
        id: id,
        name: name,
        age: age,
        gpa: gpa,
        status: status,
        createdAt: new Date()
    };
    students.push(newStudent);
    console.log(students);
    alert("Thêm sinh viên thành công!");


}
//case 2
function update(students) {
    let id;
    let arrStudents;
    while (true) {
        id = prompt("Mời bạn nhập id cần update:");
        if (id.trim() === "") {
            alert("Không được đê trống");
            continue;
        }
        arrStudents = students.find(student => student.id == id);
        if (!arrStudents) {
            alert(`Không tìm thấy ${id} `);
            continue;
        }
        break;
    }

    let newName = prompt("Mời bạn nhập tên mới (bỏ trống lưu giá trị ban đầu)");
    if (newName && newName.trim() !== "") {
        arrStudents.name = newName.trim();
    }

    let newGpa = prompt("Mời bạn nhập GPA mới (0-10)(bỏ trống lưu giá trị ban đầu):");
    if (newGpa.trim() !== "") {
        let gpa = Number(newGpa);
        if (!Number.isNaN(gpa) && gpa >= 0 && gpa <= 10) {
            arrStudents.gpa = gpa;
        }
    }


    let newStatus = prompt("Mời bạn nhập trạng thái mới (bỏ trống lưu giá trị ban đầu)");
    if (newStatus && newStatus.trim() !== "") {
        newStatus = newStatus.trim().toLowerCase();
        if (newStatus === "active" || newStatus === "inactive") {
            arrStudents.status = newStatus;
        }
    }
    console.log(students);

    alert(`Cập nhật thành công id:${id} `);
}
// case 3 
function softDelete(students) {
    let id;
    let arrStudentsDelete;
    while (true) {
        id = prompt("Nhập id cần soft delete: ");
        if (id.trim() === "") {
            alert("Không được đê trống");
            continue;
        }
        arrStudentsDelete = students.find(student => student.id == id);
        if (!arrStudentsDelete) {
            alert(`Không tìm thấy id: ${id} `);
            continue;
        }
        break;
    }
    //điều kiện xóa ch
    if (students.status === "inactive" && arrStudentsDelete.deletedAt) {
        alert("sinh viên này đã bị xóa trước đó!");
        return;
    }
    //xác nhận ok và cancel
    let check = prompt("Nhấn OK để xóa, nhập bất kỳ để hủy");
    if (check !== "") {
        alert("đã hủy");
        return;
    }
    arrStudentsDelete.status = "inactive";
    arrStudentsDelete.deletedAt = new Date();
    console.log(students);
    alert("sort delete thành công");
}
//case 4
function restore(students) {
    let id;
    let arrRestore;
    while (true) {
        id = prompt("Mời bạn nhập id cần restore: ");
        if (id.trim() === "") {
            alert("Không được để trống");
            continue;
        }
        arrRestore = students.find(student => student.id == id);
        if (!arrRestore) {
            alert(`Không tìm thấy ${id}`);
            continue;
        }

        break;

    }

    if (arrRestore.status !== "inactive" || arrRestore.deletedAt === null) {
        alert("Chỉ có thể Restore sinh viên đã soft delete (inactive và có deletedAt).");
        return;
    }

    let check = prompt("Nhấn OK để restore, nhập bất kỳ để hủy");
    if (check != "") {
        alert("đã hủy");
        return;
    }
    arrRestore.status = "active";
    arrRestore.deletedAt = null;
    arrRestore.updateAt = new Date();
    console.log(students);
    alert("Khôi phục thành công");

}
// case 5:
//case 6:
//tính tổng 
function overView(students) {
    let totalAll = students.reduce((acc, cur) => {
        acc.total++;
        if (cur.status == "active") {
            acc.active++;
        } else {
            acc.inactive++;
        }
        return acc;
    }, { total: 0, active: 0, inactive: 0 });

    totalAll.activePercent = ((totalAll.active / totalAll.total) * 100).toFixed(1);
    totalAll.inactivePercent = ((totalAll.inactive / totalAll.total) * 100).toFixed(1);
    console.log("=== DASHBOARD OVERVIEW ===");
    console.log(totalAll);
}
//tính trung bình gpa
function averageAll(students) {
    let totalGpa = students.reduce((acc, cur) => {
        acc + cur.gpa;
    }, 0);
    return (totalGpa / students.length).toFixed(2);
}
//tính trung bình active và inactive
function averageGpaActiveAndInactive(students) {
    let activeStudent = students.filter(student => student.status === "active");
    let inactiveStudent = students.filter(student => student.status === "inactive");
    let activeAge = activeStudent.reduce((acc, cur) => {
        return acc + cur.gpa;
    }, 0);
    let averageActive = activeAge / activeAge.length;
    let inactiveAge = inactiveStudent.reduce((acc, cur) => {
        return acc + cur.gpa;
    }, 0)
    let averageInactive = inactiveAge / inactiveAge.length;
    console.log("GPA active:", averageActive.toFixed(2));
    console.log("GPA inactive:", averageInactive.toFixed(2));
}
//top 5 gpa cao nhất
function topMax(students) {
    return [...students].sort((a, b) => { b.gpa - a.gpa }).slice(0, 5);
}
//top 5 gpa thấp nhất

function topMin(students) {
    return [...students].sort((a, b) => a.age - b.age).slice(0, 5);
}

// Risk & Warning Report
function riskReport(students) {

    let report = students.reduce((acc, s) => {

        if (s.gpa === 0) {
            acc.zeroGPA.push(s);
        }

        if (s.gpa < 3) {
            acc.lowGPA.push(s);
        }

        return acc;

    }, {
        zeroGPA: [],
        lowGPA: []
    });

    console.log("GPA = 0:", report.zeroGPA);
    console.log("GPA < 3:", report.lowGPA);
    console.log("Tổng nguy cơ:", report.lowGPA.length);
}
//phân loại
function academic_Distribution(students) {
    let copy = students.reduce((acc, cur) => {
        if (cur.gpa >= 8) {
            acc.gioi++;
        } else if (cur.gpa >= 6.5) {
            acc.kha++;
        } else if (cur.gpa >= 5) {
            acc.trungBinh++;
        } else {
            acc.yeu++;
        }
        return acc;
    }, { gioi: 0, kha: 0, trungBinh: 0, yeu: 0 });
    console.log("=== Academic Distribution ===");
    console.log(copy);
}

let choice;
do {
    choice = +prompt(`
        1. Create Student
        2. Update Student
        3. Soft Delete Student
        4. Restore Student
        5. View Students (Pipeline Mode)
        6. Analytics Dashboard
        7. Exit
        Mời bạn nhập lựa chọn:
        `);

    switch (choice) {
        case 1:
            create(students);
            break;
        case 2:
            update(students);
            break;
        case 3:
            softDelete(students);
            break;
        case 4:
            restore(students);
            break;
        case 5:

            break;
        case 6:
            overView(students);
            console.log("\nAverage GPA: ", averageAll(students));
            averageGpaActiveAndInactive(students);
            console.log("\nTop GPA:");
            console.log(topMax(students));
            console.log("\nYoungest:");
            console.log(topMin(students));
            riskReport(students);
            academic_Distribution(students);
            break;
        case 7:
            alert("tạm biệt");
            break;
        default:
            alert("Không có lệnh này");
            break;
    }
} while (choice != 7);