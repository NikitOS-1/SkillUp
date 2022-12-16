// ----------------fetch-rest-api

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) =>
//     json.map((item) => {
//       let title = item.title;
//       console.log(title);
//     })
//   );
// http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((response) => response.json())
  .then((json) => console.log(json));
  .then((json) => console.log(json));
  
