class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.currentOperandTextElement = previousOperandTextElement
      this.currentOperandElement = currentOperandElement 
      this.clear()  
    }
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
    
    delete() {
     this.currentOperand = currentOperand.tostring().slice(0, -1)   
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.include('.')) return
       this.currentOperand = this.currentOperand.tostring() + number.tostring()
    }
     chooseOperation(operation) {
        if (this.currentOperand ==='')return
        if (this.previousOperand !== '') {
            this.computer()
        }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand =''
     }

     compute() {
      let computation
      const prev = persfloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
         computation = prev + current
         break
        case '-':
            computation = prev - current
         break
         case '*':
            computation = prev * current
         break
        case '÷':
        computation = prev / current
         break
        default:
            return 
      }
       this.currentOperand = computation
       this.operation = undefined
       this.previousOperand = ''
     }

     getDisplayNumber(number) {
      const stringNumber = number.tostring()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay 
      const floatNumber = parseFloat(number)
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      }else {
        integerDisplay = integerDigits.toLocaleString('en', {maximumSignificantDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      }else {
        return integerDisplay
      }
     }

     updateDisplay() {
      this.currentOperandTextElement.innerText = 
      this.getDisplayNumber(this.currentOperand)
      if(this.operation != null){
        this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      }else {
        this.previousOperandTextElement.innerText = ''
      }
      this.previousOperandTextElement.innerText = this.previousOperand
     }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deletButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
   calculator.compute()
   calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

