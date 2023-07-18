let display :any= document.getElementById('display')!;
let start;
let end;
let str = '';
let str2 = '';
let obj: { [key: string]: number } = {
  
};

function clearscreen(form: any) {
  form.display.value = "";
  form.display1.value = '';
  str = '';
  str2 = '';
}

function charAdd(input: any, character: string) {
 
    append1(character)
    str += character
  
}

function evalcos(form: any) {
  str += 'Math.cos(';
  append1('cos(');
}

function evalsin(form: any) {
  str += 'Math.sin(';
  append1('sin(');

}

function evaltan(form: any) {
  str += 'Math.tan(';
  append1('tan(');
  
}

function evalsqrt(form: any) {
  str += 'Math.sqrt(';
  append1('sqrt(');
 
}

function evalln(form: any) {
  str += 'Math.log(';
 append1('ln(');
 
}

function evalpi(form: any) {
  str += '3.1415';
 append1('pi');
  
}

function evale(form: any) {
  str += '2.718281828459045';
  append1('e');
}

function evalSquare(form: any) {
  form.display1.value = parseFloat(form.display.value) ** 2;
}

function evalpercentage(form: any) {
  form.display1.value = parseFloat(form.display.value) * 0.01;
}

function evalpow(form: any) {
  str += 'Math.pow(';
 append1('pow(');
}

function deleteChar(input: any) {
  input.value = input.value.substring(0, input.value.length - 1);
}

function result(form: any) {
  str = form.display.value;
  str = replaceAllOccurrences(str, 'sin', 'Math.sin');
  str = replaceAllOccurrences(str, 'cos', 'Math.cos');
  str = replaceAllOccurrences(str, 'tan', 'Math.tan');
  str = replaceAllOccurrences(str, 'ln', 'Math.log');
  str = replaceAllOccurrences(str, 'sqrt', 'Math.sqrt');
  str = replaceAllOccurrences(str, 'pow', 'Math.pow');
  str = replaceAllOccurrences(str, 'pi', '3.1415');
  str = replaceAllOccurrences(str, 'e', '2.718281828459045');

  for (let a in obj) {
    let temp = String(obj[a]);
    str = replaceAllOccurrences(str, a, temp);
  }

  try {
    form.display1.value = parseFloat(eval(str)).toFixed(4);
  } catch (error) {
    form.display1.value = error.message;
  }
}

function replaceAllOccurrences(inputString: string, wordToReplace: string, newWord: string) {
  const regex = new RegExp('\\b' + wordToReplace + '\\b', 'gi');
  return inputString.replace(regex, newWord);
}

function setVariable() {
  let temp1:HTMLElement| any = document.getElementById('variableName')
  let variableName = temp1.value;
  let temp2:HTMLElement| any = document.getElementById('variableValue')
  let variableValue = temp2.value;
  

  if (variableName === '' || variableValue === '') {
    alert('Please enter both a variable name and value.');
  }
  else{
    addNewButton(variableName,variableValue)
  }
}

function addNewButton(variableName: string, variableValue: string) {

  if(exists(variableName))
  {
    alert("Variable name already exists. Please choose a different name.");

  }
  else
  {
    const newButton = document.createElement('button');
  const newButton1 = document.createElement('button');
  newButton.className = 'stylecss';
  newButton.textContent = 'Name: ' + variableName;
  newButton1.textContent = 'Value: ' + variableValue;

  obj[variableName] = parseFloat(variableValue);
  const buttonContainer = document.getElementById('buttonContainer');
  newButton.addEventListener('click', function () {
    displayVariableName(variableName, variableValue);
  });
  newButton1.addEventListener('click', function () {
    displayVariableValue(variableName, variableValue);
  });
  buttonContainer!.appendChild(newButton);
  buttonContainer!.appendChild(newButton1);
  }
  
}
function exists(key:string){
  console.log(obj)
  console.log(key)
  let exist:boolean=false
  for(let a in obj){
    if(a===key){
      exist=true
      break
    }
  }
  return exist
}

function displayVariableName(variableName: string, variableValue: string) {
  const display:any = document.getElementById('display');

  str += variableName;
  append1(variableName);
  // display.value = str;
}

function displayVariableValue(variableName: string, variableValue: string) {
  const display :any= document.getElementById('display');
  
  str += variableName;
 append1(variableName);
  // display.value = str;
}
function append1(val: any){
    if (display != null) {
    display.focus();
      start = display.selectionStart;
      end = display.selectionEnd;
      display.setSelectionRange(start, end);
    const curvalue = display.value;
    display.value += val;
    const inserted =curvalue.substring(0, Number(start)) + val + curvalue.substring(Number(end));
    display.value = inserted;
    // Move the cursor to the end of the inserted value
    display.selectionStart = start + val.length;
    display.selectionEnd = start + val.length;
    end = display.selectionStart!;
    str2 = inserted;
  }
}
