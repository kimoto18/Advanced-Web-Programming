function Submit(){
    const Name = display('Name');
    const BD = display('BP');

    alert(`Welcome ${Name}, born on ${BD}!`);
}

function reset(){

}

function display (id) {
    return parseFloat(document.getElementById(id).value);
}

