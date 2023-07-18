var display = document.getElementById('display');
var start;
var end;
var str = '';
var str2 = '';
var obj = {};
function clearscreen(form) {
    form.display.value = "";
    form.display1.value = '';
    str = '';
    str2 = '';
}
function charAdd(input, character) {
    append1(character);
    str += character;
}
function evalcos(form) {
    str += 'Math.cos(';
    append1('cos(');
}
function evalsin(form) {
    str += 'Math.sin(';
    append1('sin(');
}
function evaltan(form) {
    str += 'Math.tan(';
    append1('tan(');
}
function evalsqrt(form) {
    str += 'Math.sqrt(';
    append1('sqrt(');
}
function evalln(form) {
    str += 'Math.log(';
    append1('ln(');
}
function evalpi(form) {
    str += '3.1415';
    append1('pi');
}
function evale(form) {
    str += '2.718281828459045';
    append1('e');
}
function evalSquare(form) {
    form.display1.value = Math.pow(parseFloat(form.display.value), 2);
}
function evalpercentage(form) {
    form.display1.value = parseFloat(form.display.value) * 0.01;
}
function evalpow(form) {
    str += 'Math.pow(';
    append1('pow(');
}
function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1);
}
function result(form) {
    str = form.display.value;
    str = replaceAllOccurrences(str, 'sin', 'Math.sin');
    str = replaceAllOccurrences(str, 'cos', 'Math.cos');
    str = replaceAllOccurrences(str, 'tan', 'Math.tan');
    str = replaceAllOccurrences(str, 'ln', 'Math.log');
    str = replaceAllOccurrences(str, 'sqrt', 'Math.sqrt');
    str = replaceAllOccurrences(str, 'pow', 'Math.pow');
    str = replaceAllOccurrences(str, 'pi', '3.1415');
    str = replaceAllOccurrences(str, 'e', '2.718281828459045');
    for (var a in obj) {
        var temp = String(obj[a]);
        str = replaceAllOccurrences(str, a, temp);
    }
    try {
        form.display1.value = parseFloat(eval(str)).toFixed(4);
    }
    catch (error) {
        form.display1.value = error.message;
    }
}
function replaceAllOccurrences(inputString, wordToReplace, newWord) {
    var regex = new RegExp('\\b' + wordToReplace + '\\b', 'gi');
    return inputString.replace(regex, newWord);
}
function setVariable() {
    var temp1 = document.getElementById('variableName');
    var variableName = temp1.value;
    var temp2 = document.getElementById('variableValue');
    var variableValue = temp2.value;
    if (variableName === '' || variableValue === '') {
        alert('Please enter both a variable name and value.');
    }
    else {
        addNewButton(variableName, variableValue);
    }
}
function addNewButton(variableName, variableValue) {
    if (exists(variableName)) {
        alert("Variable name already exists. Please choose a different name.");
    }
    else {
        var newButton = document.createElement('button');
        var newButton1 = document.createElement('button');
        newButton.className = 'stylecss';
        newButton.textContent = 'Name: ' + variableName;
        newButton1.textContent = 'Value: ' + variableValue;
        obj[variableName] = parseFloat(variableValue);
        var buttonContainer = document.getElementById('buttonContainer');
        newButton.addEventListener('click', function () {
            displayVariableName(variableName, variableValue);
        });
        newButton1.addEventListener('click', function () {
            displayVariableValue(variableName, variableValue);
        });
        buttonContainer.appendChild(newButton);
        buttonContainer.appendChild(newButton1);
    }
}
function exists(key) {
    console.log(obj);
    console.log(key);
    var exist = false;
    for (var a in obj) {
        if (a === key) {
            exist = true;
            break;
        }
    }
    return exist;
}
function displayVariableName(variableName, variableValue) {
    var display = document.getElementById('display');
    str += variableName;
    append1(variableName);
    // display.value = str;
}
function displayVariableValue(variableName, variableValue) {
    var display = document.getElementById('display');
    str += variableName;
    append1(variableName);
    // display.value = str;
}
function append1(val) {
    if (display != null) {
        display.focus();
        start = display.selectionStart;
        end = display.selectionEnd;
        display.setSelectionRange(start, end);
        var curvalue = display.value;
        display.value += val;
        var inserted = curvalue.substring(0, Number(start)) + val + curvalue.substring(Number(end));
        display.value = inserted;
        // Move the cursor to the end of the inserted value
        display.selectionStart = start + val.length;
        display.selectionEnd = start + val.length;
        end = display.selectionStart;
        str2 = inserted;
    }
}
