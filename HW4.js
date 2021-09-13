const firstOperand = +prompt("Enter first operand", ``);
const secondOperand = +prompt("Enter second operand", ``);
const operator = prompt(`Enter operator`,`OMG`);
if ((isNaN(firstOperand)===false && isNaN(secondOperand)===false)) {
    switch(operator) {
        case `+`:
          alert(+firstOperand + +secondOperand);
          break;
        case `-`:
          alert(firstOperand - secondOperand);
          break;
        case `*`:
          alert(firstOperand * secondOperand);
          break;
        case `/`:
          alert(firstOperand / secondOperand);
          break;
        case `**`:
          alert(firstOperand ** secondOperand);
          break;
        case `OMG`:
          const dirt = Math.round(Math.floor(firstOperand)/Math.floor(secondOperand))*Math.floor(secondOperand);
            if (firstOperand < secondOperand && secondOperand >= 1) {
                alert(secondOperand);
            } else if (firstOperand > secondOperand && secondOperand >= 1){
                alert(dirt);
            } else {
                alert('error');
            }
          break;
        default:
          alert(`invalid operator`);
          break;
    }    
} else {
    alert(`invalid value`);
}