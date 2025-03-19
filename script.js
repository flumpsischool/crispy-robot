let blueBattery = 100;
let pinkBattery = 5;

function sendBattery() {
    if (blueBattery >= 20) {
        blueBattery -= 20;
        pinkBattery += 20;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('blueBattery').textContent = blueBattery + '%';
    document.getElementById('pinkBattery').textContent = pinkBattery + '%';
}
