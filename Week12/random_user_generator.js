function fetchUser() {
    fetch('https://randomuser.me/api')
        .then( res => res.json())
        .then(data => displayUser(data.results[0]))
}

//fetchUser();

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
    `      
}
document.querySelector('#js-generate').addEventListener('click', fetchUser);