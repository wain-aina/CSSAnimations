function clearScreen() {
    document.getElementById('math').value = " ";
}

function calculate() {
    var p = document.getElementById("math").value;
    var q = eval(p);
    document.getElementById("math").value = q;
}

function goodbye() {
    document.getElementById("math").value = "IG@_PROGRAMMER'S._HUB"
}