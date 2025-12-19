import React, {useState} from "react";

function Buttons({ inpNum, chgInpNumFunc, strdNum, chgStrdNumFunc, opr, chgInpOprFunc }) {
  
  const [isDecimal, setIsDecimal] = useState(false);    //using state as change in state of existing variable will re-render the whole comp, which will replace all the changes made before. 
  const [dec, setDec] = useState(10);    //to update the values in correct place after decimal is used.

    function disp(a) {
      if (a === "clear") {
        chgInpNumFunc("");
      } else{
        let num = 0;
        if(a == '.' && !isDecimal){
          num = inpNum + a + 0;
          setIsDecimal(true);
        }else if(a == '.' && isDecimal){
          num = inpNum;    //when decimal is already placed, restricting adding more decimal.
        }else if (isDecimal){    
          num = (inpNum * 1)+ (a / dec)*1;   
          setDec(dec*10);
        }else{
          num = inpNum * 10 + a;
        }
        chgInpNumFunc(num);
      }
    }

  function updateDecimalState(){
    if(inpNum % 1 != 0){
      setIsDecimal(true);
      let num = inpNum - Math.floor(num);
      let count = 10;

      while(num != 0){
        num*=10;
        count*=10;
      } 

      setDec(count);
    }
  }

  function clear() {
    chgInpNumFunc("");
    chgStrdNumFunc("");
    chgInpOprFunc("");
    setIsDecimal(false);
    setDec(10);
  }
  
  async function OprFunc(oprtr){
    const result = await calc();
    chgStrdNumFunc(result);
    chgInpOprFunc(oprtr);

    chgInpNumFunc("");  
    setIsDecimal(false);
    setDec(10);
    
    console.log("inp: " + inpNum);
    console.log("strd: " + strdNum);
    console.log("opr: " + opr);
  }

async function equalFunc() {
  const result = await calc();

  chgStrdNumFunc(result);
  chgInpNumFunc(result); // display result immediately
  chgInpOprFunc("");
  updateDecimalState();
}

  function floorToPrecision(num, precision) {
   
  }

function LastValRem() {
  let numStr = inpNum.toString();

  numStr = numStr.slice(0, -1);

  // handle empty or just "-"
  if (numStr === "" || numStr === "-") {
    chgInpNumFunc(0);
    return;
  }

  // update decimal flag
  if (!numStr.includes(".")) {
    setIsDecimal(false);
  }

  chgInpNumFunc(Number(numStr));
}


  function calc() {
    return new Promise(resolve => {
      let result;

      if (opr === "") {
        resolve(inpNum);
      } else {
        switch (opr) {
          case "+": result = strdNum + inpNum; break;
          case "-": result = strdNum - inpNum; break;
          case "*": result = strdNum * inpNum; break;
          case "/": result = strdNum / inpNum; break;
        }
        resolve(result);
      }
    });
  }


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