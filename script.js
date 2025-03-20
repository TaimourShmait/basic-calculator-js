const addButton = document.querySelector("#plus-button");
const subtractButton = document.querySelector("#minus-button");
const multiplyButton = document.querySelector("#times-button");
const divideButton = document.querySelector("#divide-button");
const displayField = document.querySelector("#display-screen");
const clearButton = document.querySelector("#clear-button");

const buttons = document.querySelectorAll("button");

let a = ""; // first number
let o = ""; // operator
let b = ""; // second number

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // console.log(button.textContent);
        let clickedButton = button.textContent;

        if (button.className === "digits") {
            if (o == "") {
                a = a + clickedButton; // Store multi-digit inputs with a += clickedButton
                displayField.value = a;
            }

            else {
                b = b + clickedButton;
                displayField.value = a + " " + o + " " + b;
            }
        }

        else if (button.className === "operators") {
            o = clickedButton;
            displayField.value = a + " " + o;
            console.log(o);
        }

        else if (button.id == "equals-button") {

            let A = parseInt(a);
            let B = parseInt(b);

            operate(A, B, o);

        }

    });
});

function operate(A, B, o) {   
    console.log(A + o + B);

    let result = 0;

    if (o == "+") {
        result = add(A, B);
    }

    else if (o == "-") {
        result = subtract(A, B);
    }

    else if (o == "×") {
        console.log(o);
        result = multiply(A, B);
    }

    else if (o == "÷") {
        result = divide(A, B);
    }

    console.log(result);

    displayField.value = result;

    a = result.toString();
    o = "";
    b = "";
    
}

function add(A, B) {
    return A + B;
}

function subtract(A, B) {
    return A - B;
}

function multiply(A, B) {
    return A * B;
}

function divide(A, B) {
    if (B == 0)
        return "E";
    return A / B;
}

clearButton.addEventListener("click", () => {
    a = "";
    o = "";
    b = "";
    result = "";
    displayField.value = "";
});



