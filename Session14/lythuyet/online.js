// // DOM - DOCUMENT OBJECT MODEL

// // console.dir(document); // toàn bộ html con document 

// // document.getElementById();// lấy phần tử bằng ID


// let div = document.getElementById("demo-id"); //div#demo-id
// console.log(div);

// // document.getElementsByClassName()
// let elementlist =  document.getElementsByClassName("demo-class"); // []
// let div1 = elementlist[0]; //div đầu tiên


// let b = elementlist[2]; //thẻ b cuối cùng trong danh sách HTMLCollection

// console.log(div1);

// console.log(b);

// console.log(elementlist);

// for (let i = 0; i <= elementlist.length - 1; i = i + 1) {
//     console.log(elementlist[i]);
// }

// // elementlist.forEach(function (e, i) {
// //     console.log(e); 
// // });

// // document.getElementsByTagName()

// let divs = document.getElementsByTagName("div") // HTMLCollection
// console.log(divs);

// // document.querySelector()

// let divss = document.querySelector("div#demo-id.demo-class"); //
// console.log(divss);


// // document.querySelectorAll()

// let elements = document.querySelectorAll("div.demo-class"); //[]
// console.log(elements);

//.innerHTML, innerText, textContent

// let p = document.getElementById("paragraph");

// console.log(p.innerHTML);

// console.log(p.innerText);

// console.log(p.textContent);

// p.textContent = "Hello word";
// p.innerText = "Nội dung được cập nhật bởi innerText";
// p.innerHTML = "<b><i>Hello word</i></b>"


// let img = document.getElementsByTagName("img")[0];

// console.log(img);

// let link = img.getAttribute("src"); // 
// console.log(link);

// let a = document.getElementById("anchor");
// console.log(a);
// let url = a.getAttribute("herf");
// console.log(url);

// a.setAttribute("href", "http://rikkei.edu.vn");

// let div = document.getElementById("demo-style-property")
// console.log(div.style);

// div.style.backgroundColor = "pink" ;
// div.style.fontSize = "30px";
// div.style.color = "white";
// div.style.width = "300px";
// div.style.height = "300px";
// div.style.borderRadius = "50%";
// div.style.textAlign = "center";
// div.style.lineHeight = "300px";

// console.log(dispatchEvent.classList);

// div.classList.add("c4");

// div.classList.remove("c2");
// //["c1", "c2", "c4"]
// let check = div.classList.contains("c4"); //true

// console.log(check);

// div.classList.toggle("demo-toggle");
// div.classList.add("demo-class-list");


// let ul = document.getElementById("unordered-list");

// let lastLi = ul.children[2];

// console.log(lastLi.parentElement.parentElement.parentElement);


// document.createElement()

// let li = document.createElement("li");
// li.innerHTML = "<b>Hello word</b>"

// let a = document.createElement("a");

// let div = document.createElement("div");

// let ul = document.getElementById("unordered-list");

// ul.appendChild(li);

// li.remove();
// ul.remove();