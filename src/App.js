import React, { Component } from 'react';
import './App.css';

class App extends Component {

   state = {
      displayValue: '0',   // Display value on calculator
      operatorValue: '',   // Value being compared to displayValue when an operator is used
      operatorType: ''     // Type of operator (+,-,/,*)
   }


   // Handles the digits that will be inputted after button clicks
   inputDigit(digit){
      const { displayValue } = this.state

      this.setState({
         // If 0 just put that digit, else remove the 0 by adding it to the inputted digit
         displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
   }

   // Handle decimal operator
   inputDec(){
      const { displayValue } = this.state
         // Appends to the end of the current displayValue
         // Everything after that is a double

         // Do this only while there doesnt exist a decimal
         if(displayValue.indexOf('.') === -1){
            this.setState({
               displayValue: displayValue + '.'
            })
         }
   }


   // MODIFIER AREA

   // Clear out all input by setting the displayValue to 0
   allClear(){
      this.setState({
         displayValue: '0',
         operatorValue: '',
         operatorType: ''
      })
   }

   // make value negative or positive
   setPosNeg(){
      const { displayValue } = this.state

      // If there isnt a negative add it, else remove it
      if(displayValue.indexOf('-') === -1){
         this.setState({
            displayValue: '-' + displayValue
         })
      }
      else{
         this.setState({
            displayValue: displayValue.slice(1)
         })
      }
   }

   // Grabs percent by getting the displayValue and multiplying it by .01
   getPercent(){
      const { displayValue } = this.state

      this.setState({
         displayValue: parseFloat(displayValue) * .01
      })
   }

   // OPERATORS
   operator(type){
      const { displayValue } = this.state

      // Sets the operatorvalue to be compared to the old display value
      // Make the displayValue show nothing on the user screen
      // Set the operator type
      this.setState({
         operatorValue: displayValue,
         displayValue: ' ',
         operatorType: type
      })
   }


   // Show the results
   result(){
      const { displayValue, operatorType, operatorValue } = this.state

      this.setState({
         displayValue: String(eval(operatorValue + operatorType + displayValue)),
         operatortype: '',
         operatorValue: ''
      })

      // Set operatorType to blank if user wants to continue arithmetic on result
   }


  render(){
     const { displayValue } = this.state
console.log(this.state)
    return (
      <div className="wrapper">
         <div className="display">{displayValue}</div>
         <div className="digits-area digits-grid">
            <button className="digits key-9" onClick={()=> this.inputDigit(9)}>9</button>
            <button className="digits key-8" onClick={()=> this.inputDigit(8)}>8</button>
            <button className="digits key-7" onClick={()=> this.inputDigit(7)}>7</button>
            <button className="digits key-6" onClick={()=> this.inputDigit(6)}>6</button>
            <button className="digits key-5" onClick={()=> this.inputDigit(5)}>5</button>
            <button className="digits key-4" onClick={()=> this.inputDigit(4)}>4</button>
            <button className="digits key-3" onClick={()=> this.inputDigit(3)}>3</button>
            <button className="digits key-2" onClick={()=> this.inputDigit(2)}>2</button>
            <button className="digits key-1" onClick={()=> this.inputDigit(1)}>1</button>
            <button className="digits key-0" onClick={()=> this.inputDigit(0)}>0</button>
            <button className="digits key-dec" onClick={()=> this.inputDec()}>.</button>
         </div>
         <div className="modifiers-area modifiers-grid">
            <button className="modifiers key-ac" onClick={()=> this.allClear()}>AC</button>
            <button className="modifiers key-up-low" onClick={()=> this.setPosNeg()}>+/-</button>
            <button className="modifiers key-perc" onClick={()=> this.getPercent()}>%</button>
         </div>
         <div className="operators-area operators-grid">
            <button className="operators key-div" onClick={()=> this.operator('/')}>/</button>
            <button className="operators key-mult" onClick={()=> this.operator('*')}>X</button>
            <button className="operators key-sub" onClick={()=> this.operator('-')}>-</button>
            <button className="operators key-add" onClick={()=> this.operator('+')}>+</button>
            <button className="operators key-equal" onClick={()=> this.result()}>=</button>
         </div>
      </div>
    );
  }
}

export default App;
