import { useContext, useEffect, useState } from "react";
import { gameContext } from "../Context/GameContext";
import "./keyboard.css";

export const Keyboard = () => {

    const { setIsStart, isStart, typedKeys, setTypedKeys, currStr, setMsg } = useContext(gameContext);
    const [currKey, setCurrKey] = useState("")


    useEffect(() => {

        if(typedKeys.length > 1){
            console.log('typedKeys',typedKeys.length)
            let count = 0;
            for (let i = 0; i < currStr.length; i++) {
                if (currKey === currStr[i]) {
                    count++;
                }
            }
    
            if (count === 0) {
                setMsg("You Typed Wrong Alphabet")
                // setTypedKeys("")
            }
        }

        

    }, [typedKeys])

    const handleKeyChange = (e) => {

        let smallAlp = "abcdefghijklmnopqrstuvwxyz";
        let bigAlp = "ABCDEFGHIJKLMNOPQRSTUVXYYZ";


       
            for(let j = 0; j < 26; j++) {
                if(e === smallAlp[j]){
                    e = bigAlp[j]
                }
            }
      
            setCurrKey(e)
            setIsStart(true)
        
    }


    useEffect(() => {

        let str = typedKeys;
        str += currKey + " ";
        setTypedKeys(str)


    }, [currKey])

    useEffect(()=> {

      

        document.addEventListener("keypress", (e)=> {
            
            handleKeyChange(e.key)

        })

    }, [isStart])

    return (
        <div className="keyboard_mainDiv">
            <div>
                <span onClick={() => handleKeyChange("Q")}>Q</span>
                <span onClick={() => handleKeyChange("W")}>W</span>
                <span onClick={() => handleKeyChange("E")}>E</span>
                <span onClick={() => handleKeyChange("R")}>R</span>
                <span onClick={() => handleKeyChange("T")}>T</span>
                <span onClick={() => handleKeyChange("Y")}>Y</span>
                <span onClick={() => handleKeyChange("U")}>U</span>
                <span onClick={() => handleKeyChange("I")}>I</span>
                <span onClick={() => handleKeyChange("O")}>O</span>
                <span onClick={() => handleKeyChange("P")}>P</span>
            </div>

            <div>
                <span onClick={() => handleKeyChange("A")}>A</span>
                <span onClick={() => handleKeyChange("S")}>S</span>
                <span onClick={() => handleKeyChange("D")}>D</span>
                <span onClick={() => handleKeyChange("F")}>F</span>
                <span onClick={() => handleKeyChange("G")}>G</span>
                <span onClick={() => handleKeyChange("H")}>H</span>
                <span onClick={() => handleKeyChange("J")}>J</span>
                <span onClick={() => handleKeyChange("K")}>K</span>
                <span onClick={() => handleKeyChange("L")}>L</span>
            </div>

            <div>
                <span onClick={() => handleKeyChange("Z")}>Z</span>
                <span onClick={() => handleKeyChange("X")}>X</span>
                <span onClick={() => handleKeyChange("C")}>C</span>
                <span onClick={() => handleKeyChange("V")}>V</span>
                <span onClick={() => handleKeyChange("B")}>B</span>
                <span onClick={() => handleKeyChange("N")}>N</span>
                <span onClick={() => handleKeyChange("M")}>M</span>
            </div>


        </div>
    )
}