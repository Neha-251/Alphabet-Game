import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { useState, useEffect, useContext } from "react";
import { gameContext } from "../Context/GameContext";
import "./body.css"


export const Body = () => {

    const { setTypedKeys, setTimeArr, timeArr, typedKeys, setTimeRecord, currStr, msg, setMsg, setCurrStr, timeRecord, reset, setReset, isStart, setIsStart, timeMiliSecond, setTimeMiliSecond } = useContext(gameContext);

    const [miliSec, setMiliSec] = useState(0);
    const [second, setSecond] = useState(0);
    const [min, setMin] = useState(0);

    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    useEffect(() => {

        if (isStart) {

            let interval_sec = null;
            let interval_Min = null;
            let interval_miliSec = null;

            interval_miliSec = setInterval(() => {

                setMiliSec(prev => prev + 1)
                setTimeMiliSecond(prev => prev + 1)
            }, 10)

            interval_sec = setInterval(() => {

                setSecond(prev => prev + 1)

            }, 1000)


            interval_Min = setInterval(() => {
                setMin(prev => prev + 1)
            }, 60000)


            return (() => {
                clearInterval(interval_Min);
                clearInterval(interval_miliSec);
                clearInterval(interval_sec);
            })


        } else {
            setMiliSec(0)
            setSecond(0)
            setMin(0)
            setTimeMiliSecond(0)

        }

    }, [isStart])

    useEffect(() => {
        if (miliSec === 1000) {
            setMiliSec(0)
        }
        if (second === 60) {
            setSecond(0)
        }

    }, [miliSec])




    const researchTitles = [
        "A B E H U K O D Y W N M S X P F C T L Q ",
        "Q B T H U K Y D O W N S M X P F C E L A ",
        "B A E H U D O K Y W N M S P X F T C L Q ",
        "A B E H U K O D Y W N M S X P F C T L Q ",
        "A B E H U K O D Y W N M S X P F C T L Q ",
    ];

    const getRandomResearchTitle = () => {
        return researchTitles[Math.floor(Math.random() * researchTitles.length)];
    };

    const [researchTitle, setResearchTitle] = useState(getRandomResearchTitle());

    const handleClick = () => {
        const randomResearchTitle = getRandomResearchTitle();
        setResearchTitle(randomResearchTitle);
        setCurrStr(randomResearchTitle);
    };

    useEffect(() => {


        if (typedKeys.length === researchTitle.length) {

            let count = 0;
            for (let i = 0; i < typedKeys.length; i++) {
                for (let j = 0; j < researchTitle.length; j++) {
                    if (typedKeys[i] === researchTitle[j]) {
                        count++;
                    }
                }
            }

            if (count >= typedKeys.length) {
                setTimeRecord([...timeRecord, timeMiliSecond])
                setTimeMiliSecond(0)
                setTimeArr([...timeArr, `${miliSec}:${second}:${min}`])

                let lastTime = timeRecord[timeRecord.length - 1];

                let c_time = 0;


                for (let i = 0; i < timeRecord.length - 1; i++) {
                    if (lastTime > timeRecord[i]) {
                        c_time++;
                    }
                }

                if (c_time >= timeRecord.length - 2) {

                    setSuccess(true);
                    // console.log("won")
                    setTypedKeys("");
                    setIsStart(false)
                }

                setTimeout(() => {
                    setSuccess(false)
                }, 50000)

            } else{
                setMsg("Alas! You have lost")
                
            }
        }


    }, [typedKeys])

    console.log("fail", fail)
    useEffect(()=> {

        if(msg === "You Typed Wrong Alphabet"){
            setFail(true)
            setTimeout(()=> {
                setFail(false)
            }, 5000)
        }
        else if(msg.length > 1){
            
            setFail(true)
            setIsStart(false)

            setTimeout(()=> {
                setFail(false)
            }, 5000)
        }
        
    }, [msg])

    useEffect(() => {
        handleClick()
        setReset(false)
    }, [reset])



    return (
        <div className="body_mainDiv">
            <div className={success ? "success_text" : "display_none"}> <span className="Won_p">Congrats! You have won</span> </div>
            <div className={fail ? "success_text" : "display_none"}> <span className="Won_p">{msg}</span> </div>

            <div className="timerDiv">
                <span>{min}</span>:<span>{second}</span>:<span>{miliSec}</span>
            </div>
            <div className="alph_show_div">
                <h2>{researchTitle}</h2>
            </div>
            <div className="alph_inp_div">
                <span>{typedKeys}</span>
                {/* <input className="alph_inp_div" type="text" onChange={(e)=>handleInpChange(e)} autoFocus /> */}
            </div>
        </div>
    )
}