var body = document.querySelector('body');
var colorOneInput = document.getElementById('colorOneInput');
var colorTwoInput = document.getElementById('colorTwoInput');
var background = document.getElementById('background');
var copyIcon = document.getElementById('copyIcon');
var tooltip = document.getElementById("tooltip");

function getBackground() {
    return `linear-gradient(to right, ${colorOneInput.value}, ${colorTwoInput.value})`
}

function setBackgroundText() {
    background.textContent = `${getBackground()};`;
}

function setGradient() {
    body.style.background = getBackground();
    setBackgroundText();
}

function copyBackground() {
    var tempInput = document.createElement('input');
    tempInput.value = background.textContent;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tempInput.value);

    tooltip.innerHTML = 'Background copied';
    
    document.body.removeChild(tempInput);
}

function resetTooltip() {
    tooltip.innerHTML = 'Copy to clipboard';
}

setBackgroundText();

colorOneInput.addEventListener('input', setGradient);

colorTwoInput.addEventListener('input', setGradient);

copyIcon.addEventListener('click', copyBackground);

copyIcon.addEventListener('mouseout', resetTooltip);
