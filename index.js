function showResult() {
    G = document.getElementById('td').value;
    T = document.getElementById('a').value;
    U = document.getElementById('b').value;
    if (T == "VietNam" && U == "USD") {
        G=G/23000;
    }
    document.getElementById('4').innerHTML = "Result: " + G;
}