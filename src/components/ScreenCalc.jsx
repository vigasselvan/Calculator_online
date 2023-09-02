import React from "react";

function ScreenCalc ({inpNum, chgInpNumFunc}){
    
    const scrStyle = {
        textAlign: "right"
    };
    
    return (
        <div>
            <input type="text" id="calcScr" name="calcScr" dir="rtl" value={inpNum} onChange={e => {chgInpNumFunc(e.target.value)}} style={scrStyle}></input>
        </div>
    );
}

export default ScreenCalc;