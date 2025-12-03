import React, {useState} from "react";
import Heading from "./components/Heading";
import ScreenCalc from "./components/ScreenCalc";
import Buttons from "./components/Buttons";

function App() {
  
  const [inpNum, chgInpNum] = useState(0);
  const [strdNum, chgStrdNum] = useState("");
  const [opr, chgOpr] = useState("");


  let chgInpNumFunc = (enterdVal) => {
    chgInpNum(enterdVal);
  }
  let chgStrdNumFunc = (enterdVal) => {
    chgStrdNum(enterdVal);
  }

  const chgInpOprFunc = (enterdVal) => {
    chgOpr(enterdVal);
  }


  return (
    <div className="containerCalc">
      <Heading className="heading"/>
      <ScreenCalc className="calcScreen" inpNum={inpNum} chgInpNumFunc={chgInpNumFunc}/>
      <Buttons className="buttons" inpNum={inpNum} chgInpNumFunc={chgInpNumFunc} strdNum={strdNum} chgStrdNumFunc={chgStrdNumFunc} opr={opr} chgInpOprFunc={chgInpOprFunc} />
    </div>
  );
}

export default App;
