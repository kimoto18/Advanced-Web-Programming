setTimeout(function() {
    console.log('Timeout');
    console.log('After timeout');
}, 3000);

console.log('Not waiting for timeout');

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},

]

function getPosts(){
    setTimeout(() => {
        posts.forEach(function(post) {
            const div = document.createElement ('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        })
    }, 2000)
}

//getPosts();

function createPost(post, get_posts) {
    setTimeout(() => {
        posts.push(post);
        get_posts();
    }, 3000);
}
createPost({title: 'Post three', body: 'This is post three'}, getPosts);
//getPosts();