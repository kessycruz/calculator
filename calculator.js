//A basic arithmetic calculator without a frontend

//Take the operation input
const operation = prompt('Enter the operation(+, -, * or /);');

//Take the operand input
const num1 = parseFloat(prompt('Enter first number:'));
const num2 = parseFloat(prompt('Enter second number:'));

switch(operation){
    case '+':
        result = num1 + num2;
        alert('The result of your operation is ' +result);
    break;
    
    case '-':
        result = num1 - num2;
        alert('The result of your operation is ' +result);
    break;
    
    case '*':
        result = num1 * num2;
        alert('The result of your operation is ' +result);
    break;
    
    case '/':
        result = num1 / num2;
        alert('The result of your operation is ' +result);
    break;

    default:
        alert('Invalid operation');
    break;
}