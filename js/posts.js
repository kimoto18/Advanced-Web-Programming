function fetchUser() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
}

function displayUser(user) {
    const userDisplay = document.querySelector('#user');
    userDisplay.innerHTML = `
        <div>
            <img src="${user.picture.large}"/>
            <div>
                <p>Name: ${user.name.first} ${user.name.last} </p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Location: ${user.location.city} ${user.location.country}</p>
                <p>Age: ${user.dob.age}</p>
            </div>
        </div>
    `;
}

document.querySelector('#js-generate').addEventListener('click', fetchUser);

async function fetchPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data.slice(0, 5); // Get the first 5 posts
    
}

async function displayPosts() {
    const postsContainer = document.getElementById('posts');
    const posts = await fetchPosts();

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    });
}

displayPosts();