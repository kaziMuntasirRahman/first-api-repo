const url = 'https://jsonplaceholder.typicode.com/comments';

function createDiv() {
  fetch(url)
    .then(response => response.json())
    .then(json => makeDiv(json))
}




function makeDiv(datum) {
  const postContainer = document.getElementById('post-container');
  for (const data of datum) {
    const post = document.createElement('div');
    post.innerHTML = `
    <h2>Post Id: ${data.postId}</h2>
    <h2>id: ${data.id}</h2>
    <h3>name: <span class='font-semibold'>${data.name}</span></h3>
    <h3>email: <span class='text-blue-700 cursor-pointer'>${data.email}<span></h3>
    <p class='text-justify'>body: ${data.body}</p>
    `
    postContainer.appendChild(post);
    post.classList.add('bg-amber-200', 'p-4', 'rounded-lg', 'flex', 'flex-col', 'gap-2', 'border', 'border-black');
  }
}
