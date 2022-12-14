var whichPlayer = true;
var count = 0;

function Game(num) {
    var tile = document.getElementById(num);
    count++;
    if (count == 9) {
        document.getElementById("head").innerHTML = "DROW";
        document.getElementById("turn").style.visibility = "hidden";
        document.getElementById("resetBtn").style.visibility = "visible"
    }
    if (tile.value == "") {
        if (whichPlayer == false) {
            document.getElementById("turn").innerHTML = "X's Turn";
        } else {
            document.getElementById("turn").innerHTML = "O's Turn";

        }
        if (whichPlayer == true) {
            tile.style.backgroundColor = "blue";
            tile.value = "X";
        } else {
            tile.style.backgroundColor = "red";
            tile.value = "O";
        }
        whichPlayer = !whichPlayer;
    }
}

function reset() {

}