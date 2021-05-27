function inmultire() {
    let x = document.getElementById("a").value;
    let y = document.getElementById("b").value;
    document.getElementById("result").value = x * y;
}

function scadere() {
    let x = document.getElementById("a").value;
    let y = document.getElementById("b").value;
    document.getElementById("result").value = x - y;
}

function adunare() {
    let x = document.getElementById("a").value;
    let y = document.getElementById("b").value;
    document.getElementById("result").value = parseFloat(x) + parseFloat(y);
}