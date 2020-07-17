function calculate(){

    const numButtons = document.querySelectorAll('[data-number]');
    const operationButtons = document.querySelectorAll('[data-operation]');
    const equalButton = document.querySelector('[data-equals]');
    const deleteButton = document.querySelector('[data-delete]');
    const clearButton = document.querySelector('[data-clear]');
    const calcDisplay = document.querySelector('.calculatorDisplay');

    for(let i=0; i<numButtons.length; i++){
        numButtons[i].addEventListener('click', function getDisplay() {
            if(calcDisplay.innerText === '0'){
                calcDisplay.innerText = numButtons[i].innerText
            } else{
                calcDisplay.innerText += numButtons[i].innerText
            }
            //floatNumber = parseFloat(calcDisplay.innerText) //changes a string decimal number to an actual decimal number
        })
    }
    operationButtons.forEach((opButton) => {
        opButton.addEventListener('click', e => {
            //floatNumber = parseFloat(calcDisplay.innerText) //changes a string decimal number to an actual decimal number
            //When we click an operation button, if the button we click has = in its HTML text then the calculations will run or an error
            if(opButton.innerText === "="){
            if(calcDisplay.innerText.slice(-1) === "0" && calcDisplay.innerText.slice(-2,-1) === "/"){
                calcDisplay.innerText = "Error" //cannot divide a number by 0 - if we do 0 will always be the last character in the string and / will always be the second character in the string
                } else {
                    calcDisplay.innerText = eval(calcDisplay.innerHTML)
                }
            } else { //When we click an operation button is not =, then we just want to append the operation to the text
                calcDisplay.innerText += opButton.innerText
            }
        })
    })
    clearButton.addEventListener('click', e => {
        calcDisplay.innerHTML = ""
    })
    deleteButton.addEventListener('click', e => {
        calcDisplay.innerText = calcDisplay.textContent.slice(0,calcDisplay.innerText.length-1)
    })
}

calculate()