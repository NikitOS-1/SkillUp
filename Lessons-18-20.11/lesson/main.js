// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.lastElementChild);
// console.log(document.body.lastElementChild.previousElementSibling);

// console.log(document.body.children[2].firstElementChild.nextElementSibling);

// let h1 = document.getElementById("h1");

// console.log(h1);

// let p = document.getElementsByTagName("p");

// console.log(p[2]);

// let test = document.getElementsByClassName("foo");
// console.log(test);
// let classTest = document.querySelectorAll(".foo");
// console.log(classTest);

// let test = document.querySelector("#h1");
// console.log(test);
// console.log(test.getAttribute("id"));
// console.log(test.hasAttribute("id"));
// test.setAttribute("name", "title");
// console.log(test);
// test.removeAttribute("id");
// console.log(test);

// let test = document.querySelector("#h1");
// console.log(test.textContent);
// console.log(test.innerHTML);
// test.textContent = "jjjjjj";
// test.innerHTML = "<a href=''>dsd</a>";

let h1 = document.createElement("h1");
h1.setAttribute("class", "red-text");
h1.textContent = "helloo";
// document.body.append(h1);
document.body.prepend(h1);