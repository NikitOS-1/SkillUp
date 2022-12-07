let tabTitleItem = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");
let tabWrap = document.querySelector(".tab-table-wrap");

function hideTabContent() {
  tabContent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show");
  });
  tabTitleItem.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}

function showTabContent(i = 0) {
  tabContent[i].classList.add("show");
  tabContent[i].classList.remove("hide");
  tabTitleItem[i].classList.add("active");
}

hideTabContent();
showTabContent();

tabWrap.addEventListener("click", function (e) {
  if (e.target.classList.contains("tab-title-item")) {
    tabTitleItem.forEach((item, i) => {
      if (e.target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});


// -------------------- try catch

// let test = "test"
// try{
//   console.log(test)
// } catch (error){
//   console.log(error)
// } finally {
//   console.log("TEST")
// }


// let a = 10;
// console.log(a)
// console.log("first")


// ------------------------ animation

