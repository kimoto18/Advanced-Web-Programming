const message = {
    id: 1,
    text: 'Hello World'
};

module.epxorts = message;

function changeToLowerCase(str) {
    return str.toLowerCase();
}

module.exports = {
    message, 
    changeToLowerCase
}