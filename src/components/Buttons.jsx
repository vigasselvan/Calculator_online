import React from "react";

function Buttons({ inpNum, opr, strdNum, chgStrdNumFunc, chgInpNumFunc, chgInpOprFunc }) {
  
    function disp(a) {
    if (a === "clear") {
      chgInpNumFunc("");
    } else {
      var num = inpNum * 10 + a;
      chgInpNumFunc(num);
    }
  }

  function clear() {
    chgInpNumFunc("");
    chgStrdNumFunc("");
    chgInpOprFunc("");
  }
  
  function OprFunc(oprtr){
    calc();
    chgInpOprFunc(oprtr);

    chgInpNumFunc("");    
  }

  async function equalFunc() {
    await calc();
    await chgInpNumFunc(strdNum); //to display the output in the screen
  
    chgInpOprFunc("");
  }

  function LastValRem(){
    var num = parseInt(inpNum / 10);
    chgInpNumFunc(num);
  }

  async function calc() {
      new Promise(resolve => {

        let result;

        if(opr !== ""){                                     
          switch (opr){
            case "+": result = strdNum + inpNum;         
                      break;
            case "-": result = strdNum - inpNum;
                      break;
            case "*": result = strdNum * inpNum;
                      break;
            case "/": result = strdNum / inpNum;
                      break;
            default : console.log("Error!!! (error in selecting the operator)"); 
          }
          resolve(chgStrdNumFunc(result)); //resolve() is used inorder to complete this as important.
        }

        if(opr === ""){
          chgStrdNumFunc(inpNum);
        }
    }); 
    }     
  
  //need to click the equal button twice to get the correct output.

  return (
    <div className="buttonCont">
      <button id="seven" onClick={() => disp(7)}>7</button>
      <button id="eight" onClick={() => disp(8)}>8</button>
      <button id="nine" onClick={() => disp(9)}>9</button>
      <button id="del" onClick={() => LastValRem()}>DEL</button>

      <button id="four" onClick={() => disp(4)}>4</button>
      <button id="five" onClick={() => disp(5)}>5</button>
      <button id="six" onClick={() => disp(6)}>6</button>
      <button id="plus" onClick={() => { OprFunc("+");}}>+</button>

      <button id="one" onClick={() => disp(1)}>1</button>
      <button id="two" onClick={() => disp(2)}>2</button>
      <button id="three" onClick={() => disp(3)}>3</button>
      <button id="minus" onClick={() => { OprFunc("-");}}>-</button>

      <button id="point" onClick={() => disp(".")}>.</button>
      <button id="zero" onClick={() => disp(0)}>0</button>
      <button id="divide" onClick={() => { OprFunc("/");}}>/</button>
      <button id="mulitply" onClick={() => { OprFunc("*"); }}>*</button>

      <button id="reset" onClick={clear}>RESET</button>
      <button id="equal" onClick={() => equalFunc()}>=</button>
    </div>
  );
}

export default Buttons; 