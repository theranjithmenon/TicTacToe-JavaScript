var whichPlayer = true;
var count = 0;

function Game(num) {

    var one = document.getElementById(1).value;
    var two = document.getElementById(2).value;
    var three = document.getElementById(3).value;
    var four = document.getElementById(4).value;
    var five = document.getElementById(5).value;
    var six = document.getElementById(6).value;
    var seven = document.getElementById(7).value;
    var eight = document.getElementById(8).value;
    var nine = document.getElementById(9).value;

    var tile = document.getElementById(num);

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
    if (document.getElementById("resetBtn").style.visibility != "visible") {
        count++;
    }
    if (one == two && one == three && one != "") {
        Over(one);
    } else if (four == five && four == six && four != "") {
        Over(four);
    } else if (seven == eight && seven == nine && seven != "") {
        Over(seven);
    } else if (one == four && one == seven && one != "") {
        Over(one);
    } else if (two == five && two == eight && two != "") {
        Over(two);
    } else if (three == six && three == nine && three != "") {
        Over(three);
    } else if (one == five && one == nine && one != "") {
        Over(one);
    } else if (three == five && three == seven && three != "") {
        Over(three);
    }
}


function Over(won) {
    document.getElementById("turn").innerHTML = won + "\t Won the Game";
    document.getElementById("resetBtn").style.visibility = "visible";
}
function reset() {
    window.location.reload();
}