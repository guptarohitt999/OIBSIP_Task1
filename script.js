let input = "";

function appendInput(value) {
    input += value;
    updateScreen();
}

function clearScreen() {
    input = "";
    updateScreen();
}

function calculate() {
    try {
        const result = eval(input);
        console.log(result);
        input = input+ " = "+ result.toString();
        console.log(input);
        updateScreen();
    } catch (error) {
        input="";
        input = "Error";
        deleteScreen();
    }
}

function updateScreen() {
    const screen = document.getElementById("screen");
    screen.textContent = input; 
}

function deleteScreen() {
    const screen = document.getElementById("screen");
    screen.textContent = input;
    input="";

}