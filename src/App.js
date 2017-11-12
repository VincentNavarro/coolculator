import React, { Component } from 'react';
import './App.css';

class App extends Component {

   state = {
      displayValue: '0',   // Display value on calculator
      operatorValue: '',   // Value being compared to displayValue when an operator is used
      operatorType: '',    // Type of operator (+,-,/,*)
      active: ''         // Adds active class
   }

   setActive(name){
      this.setState({
         active: name
      })
   }

   // Handles the digits that will be inputted after button clicks
   inputDigit(digit){
      const { displayValue } = this.state

      this.setState({
         // If 0 just put that digit, else remove the 0 by adding it to the inputted digit
         displayValue: displayValue === '0' ? String(digit) : String(displayValue + digit)
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
         displayValue: '',
         operatorType: type
      })
   }


   // Show the results
   result(){
      const { displayValue, operatorType, operatorValue, active } = this.state

      if(active !== '=' && displayValue !== ''){
         this.setState({
            // eslint-disable-next-line
            displayValue: String(eval(operatorValue + operatorType + displayValue)),
            operatortype: '',
            operatorValue: ''
         })
      }
   }


  render(){
     const { displayValue, active } = this.state
     console.log(displayValue);
    return (
      <div>
         <div className="wrapper">
            <div className="title">
               <h1><span>COOL</span><span>CULATOR</span></h1>
               <p>Yup, I named it that</p>
            </div>
            <div className="display">{displayValue}</div>
            <div className="digits-grid">
               {/* If clicked then digit/decimal is sent to the method to store
                   Active Method is passed a
               */}
               <button className={(active === '9' ? 'active ' : '') + "digits key-9"} onClick={()=> {this.inputDigit(9);this.setActive('9')}}>9</button>
               <button className={(active === '8' ? 'active ' : '') + "digits key-8"} onClick={()=> {this.inputDigit(8);this.setActive('8')}}>8</button>
               <button className={(active === '7' ? 'active ' : '') + "digits key-7"} onClick={()=> {this.inputDigit(7);this.setActive('7')}}>7</button>
               <button className={(active === '6' ? 'active ' : '') + "digits key-6"} onClick={()=> {this.inputDigit(6);this.setActive('6')}}>6</button>
               <button className={(active === '5' ? 'active ' : '') + "digits key-5"} onClick={()=> {this.inputDigit(5);this.setActive('5')}}>5</button>
               <button className={(active === '4' ? 'active ' : '') + "digits key-4"} onClick={()=> {this.inputDigit(4);this.setActive('4')}}>4</button>
               <button className={(active === '3' ? 'active ' : '') + "digits key-3"} onClick={()=> {this.inputDigit(3);this.setActive('3')}}>3</button>
               <button className={(active === '2' ? 'active ' : '') + "digits key-2"} onClick={()=> {this.inputDigit(2);this.setActive('2')}}>2</button>
               <button className={(active === '1' ? 'active ' : '') + "digits key-1"} onClick={()=> {this.inputDigit(1);this.setActive('1')}}>1</button>
               <button className={(active === '0' ? 'active ' : '') + "digits key-0"} onClick={()=> {this.inputDigit(0);this.setActive('0')}}>0</button>
               <button className={(active === '.' ? 'active ' : '') + "digits key-dec"} onClick={()=> {this.inputDec();this.setActive('.')}}>.</button>
            </div>
            <div className="modifiers-grid">
               <button className={(active === 'ac' ? 'active ' : '') + "modifiers key-ac"} onClick={()=> {this.allClear();this.setActive('ac')}}>AC</button>
               <button className={(active === '+-' ? 'active ' : '') + "modifiers key-up-low"} onClick={()=> {this.setPosNeg();this.setActive('+-')}}>+/-</button>
               <button className={(active === '%' ? 'active ' : '') + "modifiers key-perc"} onClick={()=> {this.getPercent();this.setActive('%')}}>%</button>
            </div>
            <div className="operators-grid">
               <button className={(active === '/' ? 'active ' : '') + "operators key-div"} onClick={()=> {this.operator('/');this.setActive('/')}}>/</button>
               <button className={(active === 'x' ? 'active ' : '') + "operators key-mult"} onClick={()=> {this.operator('*');this.setActive('x')}}>X</button>
               <button className={(active === '-' ? 'active ' : '') + "operators key-sub"} onClick={()=> {this.operator('-');this.setActive('-')}}>-</button>
               <button className={(active === '+' ? 'active ' : '') + "operators key-add"} onClick={()=> {this.operator('+');this.setActive('+')}}>+</button>
               <button className={(active === '=' ? 'active ' : '') + "operators key-equal"} onClick={()=> {this.result();this.setActive('=')}}>=</button>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
