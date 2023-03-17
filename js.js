function SendText() {
    var x = document.getElementById("text1").value;
    document.getElementById("display1").innerHTML = x;
    document.getElementById('text1').value = '';
    document.getElementById("div1").style.visibility = "visible";
}