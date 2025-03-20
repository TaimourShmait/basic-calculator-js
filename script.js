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
let resetDisplay = false;


buttons.forEach(button => {
    button.addEventListener("click", () => {
        // console.log(button.textContent);

        let clickedButton = button.textContent;

        if (button.className === "digits") {
            
            if (a == "E")
                return;

            if (resetDisplay) {

                if (o == "")
                    a = a + clickedButton;
                
                // o = "";
                // b = "";

                else 
                    b = b + clickedButton;

                resetDisplay = false;
            }

            else {
                
                // a = "";
                // o = "";

                if (o == "") {
                    a = a + clickedButton;
                }

                else {
                    b = b + clickedButton;
                }
            }

            displayField.value = a + (o ? " " + o + " " + b : "");

            // if (o == "") {
            //     a = a + clickedButton; // Store multi-digit inputs with a += clickedButton
            //     displayField.value = a;
            // }

            // else {
            //     b = b + clickedButton;
            //     displayField.value = a + " " + o + " " + b;
            // }
        }

        else if (button.className === "operators") {

            if (a == "" || a == "E")
                return;

            if (o != "" && b != "") {
                let A = parseFloat(a);
                let B = parseFloat(b);
                operate(A, B, o);

                a = displayField.value;
                console.log("Hello from " + a);
                a = parseFloat(a);
                b = "";
            }

            o = clickedButton;
            displayField.value = a + " " + o;
            console.log(o);
        }

        else if (button.id == "equals-button") {

            if (a == "" || b == "")
                return;

            let A = parseFloat(a);
            let B = parseFloat(b);

            operate(A, B, o);

        }

        else if (button.id == "point-button") {
            
            if (a == "E")
                return;

            if (o === "") { 

                if (!a.includes(".")) {
                    
                    if (a === "") {
                        a = "0."; 
                    } 
                    
                    else {
                        a = a + ".";
                    }
                }

            } 
            
            else { 

                if (!b.includes(".")) {
                    if (b === "") {
                        b = "0.";
                    } 
                    
                    else {
                        b += ".";
                    }
                }
            }

            displayField.value = a + (o ? " " + o + " " + b : "");

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

    if (result === "E") {
        displayField.value = result;
    } 
    
    else {
        result = parseFloat(result.toFixed(5)); // Round only if it's a number
        displayField.value = result;
    }

    console.log(result);

    a = result.toString();
    o = "";
    b = "";

    resetDisplay = true;
    
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



