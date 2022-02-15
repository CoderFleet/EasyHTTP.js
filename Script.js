const http = new easyHTTP();

// Get post
// http.get('https://jsonplaceholder.typicode.com/posts', (err ,posts) => {
//     if (err) {
//         console.log(err);
//     } else {
//     console.log(posts);
//     }
// });

// http.get('https://jsonplaceholder.typicode.com/posts/1', (err ,post) => {
//     if (err) {
//         console.log(err);
//     } else {
//     console.log(post);
//     }
// });

// Create Data
const data =
  {
    title: "Custom Post",
    body: "This is New POST",
  }


// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// http.put(
//     "https://jsonplaceholder.typicode.com/posts/1",
//     data,
//     function (err, post) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
//     }
// );

http.delete('https://jsonplaceholder.typicode.com/posts/3', (err ,response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});