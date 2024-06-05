
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
const btnPost = document.querySelector('#btnPost');
const postContainer = document.querySelector('#post-container'); 

btnPost.addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            postContainer.innerHTML = '';

            data.forEach(post => {
                const postTitle = document.createElement('h2');
                postTitle.textContent = post.title;

                const postBody = document.createElement('p');
                postBody.textContent = post.body.substring(0, 50) + '...'; 
                postContainer.appendChild(postTitle);
                postContainer.appendChild(postBody);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
