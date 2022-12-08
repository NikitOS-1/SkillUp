// ----------------fetch-rest-api

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) =>
    json.map((item) => {
      let title = item.title;
      console.log(title);
    })
  );
