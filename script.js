// let string="";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '='){
//             try {string= eval(string);
//             document.querySelector('input').value= string;}
//             catch (error){
//                 document.querySelector('input').value='ERROR: Invalid input !!!';
//             }
//         }
//         else if (e.target.innerHTML == 'C') {
//             string='';
//             document.querySelector('input').value= '0.0';
//         }
//         else{
//             string= string + e.target.innerHTML;
//             document.querySelector('input').value= string;
//             }
//     })
// });
let string = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('input');

// Function to handle calculator-style percentage logic
function calculate(expression) {
    try {
        // Handle % contextually
        if (expression.includes('%')) {
            expression = handlePercentage(expression);
        }

        // Safely evaluate the expression
        return eval(expression);
    } catch (error) {
        return "ERROR: Invalid input !!!";
    }
}

// Function to convert % into calculator-style expressions
// This was the most difficult part. I took a lot of help for this. Need to understand regex more better for such solutions:
function handlePercentage(expr) {
    // 1️⃣ Handle number%number (e.g., 5%10 → (5/100)*10)
    expr = expr.replace(/(\d+(?:\.\d+)?)%\s*(\d+(?:\.\d+)?)/g, "($1/100)*$2");

    // 2️⃣ Handle A op B% (real calculator style: 100 + 10% → 100 + (100*10/100))
    expr = expr.replace(/(\d+(?:\.\d+)?)\s*([\+\-\*\/])\s*(\d+(?:\.\d+)?)%/g, (match, a, op, b) => {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+':
                return `${a} + (${a} * ${b} / 100)`;
            case '-':
                return `${a} - (${a} * ${b} / 100)`;
            case '*':
                return `${a} * (${b} / 100)`;
            case '/':
                return `${a} / (${b} / 100)`;
            default:
                return match;
        }
    });

    // 3️⃣ Handle standalone % (e.g., 5% → 5/100)
    expr = expr.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");

    return expr;
}


Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            let result = calculate(string);
            string = result.toString();
            inputField.value = result;
        } 
        else if (value === 'C') {
            string = "";
            inputField.value = "0.0";
        } 
        else {
            string += value;
            inputField.value = string;
        }
    });
});

