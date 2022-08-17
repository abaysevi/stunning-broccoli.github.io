
function yea() {

    a = document.getElementById("file")
    console.log(a.value)
    if (a.value == 20) {
        document.getElementById("demo").innerHTML = "reached limit";
    }
    else {
        a.value = a.value + 1

    }

    // console.log("sdfsdf")
}

