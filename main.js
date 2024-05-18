function buttoney1() {
    window.location = "sciencefacts.html"
}

function buttoney2() {
    window.location = "ancientindiascience.html"
}

function buttoney4() {
    window.location = "sciencegame.html"
}


function back() {
    window.location = "main.html"
}

function checkMERCURY() {
    weight1 = document.getElementById('mercuryEARTHWEIGHT').value;
    mercury_weight = (weight1 / 9.81) * 3.7
    document.getElementById("mercuryAnswer").innerHTML = mercury_weight + "kg";
}

function checkVENUS() {
    weight2 = document.getElementById('venusEARTHWEIGHT').value;
    venus_weight = (weight2 / 9.81) * 8.87
    document.getElementById("venusAnswer").innerHTML = venus_weight + "kg";
}

function checkMARS() {
    weight3 = document.getElementById('marsEARTHWEIGHT').value;
    mars_weight = (weight3 / 9.81) * 3.71
    document.getElementById("marsAnswer").innerHTML = mars_weight + "kg";
}

function checkJUPITER() {
    weight4 = document.getElementById('jupiterEARTHWEIGHT').value;
    jupiter_weight = (weight4 / 9.81) * 24.79
    document.getElementById("jupiterAnswer").innerHTML = jupiter_weight + "kg";
}

function checkSATURN() {
    weight5 = document.getElementById('saturnEARTHWEIGHT').value;
    saturn_weight = (weight5 / 9.81) * 10.44
    document.getElementById("saturnAnswer").innerHTML = saturn_weight + "kg";
}

function checkURANUS() {
    weight6 = document.getElementById('uranusEARTHWEIGHT').value;
    uranus_weight = (weight6 / 9.81) * 8.87
    document.getElementById("uranusAnswer").innerHTML = uranus_weight + "kg";
}

function checkNEPTUNE() {
    weight7 = document.getElementById('neptuneEARTHWEIGHT').value;
    neptune_weight = (weight7 / 9.81) * 11.15
    document.getElementById("neptuneAnswer").innerHTML = neptune_weight + "kg";
}