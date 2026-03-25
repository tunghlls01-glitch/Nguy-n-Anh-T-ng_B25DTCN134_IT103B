let musicList = JSON.parse(localStorage.getItem("musicList")) || [];
let searchList = [];
//Thêm
function handleSubmit() {
        let title = document.getElementById("title").value.trim();
        let artist = document.getElementById("artist").value.trim();
        if(title == ""){
            alert("Không được để trống tên bài hát");
            return;
        }
        if(artist == ""){
            alert("Không được để trống Ca sĩ");
            return;
        }
    let obj = {
        id: Math.floor(Math.random()*99999),
        title: title,
        artist: artist
    }
    musicList.push(obj);
    localStorage.setItem("musicList", JSON.stringify(musicList));
    renderListMusic();
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
}
// hiển thị danh sách
function renderListMusic() {
    let list = searchList.length ? searchList : musicList
    let html = "";
    for (let i = 0; i < list.length; i++) {
        html += `
            <tr>
                <td>${list[i].id}</td>
                <td>${list[i].title}</td>
                <td>${list[i].artist}</td>
                <td><button onclick="editMusic(${list[i].id})">Sửa</button>
                <button onclick="deleteMusic(${list[i].id})">Xóa</button></td>
             </tr>
        `
    }
    document.getElementById("songTable").innerHTML = html;
}
renderListMusic();
//Xóa 
function deleteMusic(id) {
    let index = musicList.findIndex((value) => value.id === id)
    let check = confirm(`Bạn có muốn xóa bài "${musicList[index].title}" không ? `);
    if (check) {
        musicList.splice(index, 1);
        localStorage.setItem("musicList", JSON.stringify(musicList));
        renderListMusic();
    }
}
// sửa
let checkIndex = -1
function editMusic(id) {
    let index = musicList.findIndex((value) => value.id === id  )
    //thay đổi giao diện
    document.getElementById("formTitle").style.display = "none";
    document.getElementById("formTitle_two").style.display = "block";
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("submitBtn02").style.display = "block";
    checkIndex = index;
    document.getElementById("title").value = musicList[index].title;
    document.getElementById("artist").value = musicList[index].artist;
}

// cập nhật
function updateMusic() {
    let title = document.getElementById("title").value.trim();
    let artist = document.getElementById("artist").value.trim();
    if (title === "" || artist === "") {
        alert("Không được để trống");
        return;
    }
    musicList[checkIndex].title = title;
    musicList[checkIndex].artist = artist;
    localStorage.setItem("musicList", JSON.stringify(musicList));
    //hiện lại
    document.getElementById("formTitle").style.display = "block";
    document.getElementById("formTitle_two").style.display = "none";
    document.getElementById("submitBtn").style.display = "block";
    document.getElementById("submitBtn02").style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    checkIndex = -1;
    renderListMusic();
}
//tìm kiếm theo tên
function searchSong() {
    let keyword = document.getElementById("search").value.toLowerCase().trim();
    if (keyword == "") {
        searchList = [];
    } else {
        searchList = musicList.filter((value)=> value.title.toLowerCase().includes(keyword));
    }
    renderListMusic();  
}