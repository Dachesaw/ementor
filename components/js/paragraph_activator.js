

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.click');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleButton(button);
        });
    });
});

function toggleButton(button) {
    if (button.textContent === '+') {
        button.textContent = '-';
    } else {
        button.textContent = '+';
    }
}

var buttons = document.getElementsByClassName("click");
var pInactives = document.getElementsByClassName("p-inactive");
var isMarginAdded = [false, false, false, false, false];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var index = Array.from(buttons).indexOf(this);
        if (!isMarginAdded[index]) {
            this.style.paddingBottom = '10px';
            pInactives[index].style.display = "block";
            isMarginAdded[index] = true;
        } else {
            this.style.paddingBottom = '0';
            pInactives[index].style.display = "none";
            isMarginAdded[index] = false;
        }
    };
}