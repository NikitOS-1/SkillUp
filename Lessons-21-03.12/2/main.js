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

function animationSquare() {
  let item = document.querySelector(".item");
  console.log(item)
  let position = 0;

  let timerId = setInterval(frame, 2);

  function frame() {
    if (position === 250) {
      clearInterval(timerId);
    } else {
      position++;
      item.style.left = position + "px";
    }
  }
}
document.querySelector("button").addEventListener("click", animationSquare);
