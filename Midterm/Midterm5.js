function enterValue(){
    const Name = display('Name');
    const BD = display('BP');
}

function reset(){

}

function display (id) {
    return parseFloat(document.getElementById(id).value);
}

function displayValue(id, value) {
    document.getElementById(id).value = value;
}
