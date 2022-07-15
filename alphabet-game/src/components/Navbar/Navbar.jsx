import { useContext, useState } from "react";
import { gameContext } from "../Context/GameContext";
import "./navbar.css";

export const Navbar = () => {

    const [seeScore, setSeeScore] = useState(false);
    const [instr, setInstr] = useState(false);
    const { setTypedKeys, setReset, isStart, setIsStart, theme, setTheme, timeArr, msg } = useContext(gameContext)
    

    const handleTimer = () => {
        if (isStart) {
            setIsStart(false)

        } else {
            setIsStart(true)

        }
    }

    const handleReset = () => {
        //if(isStart === false){
        setReset(true)
        setTypedKeys("")
        // }
        handleTimer()

    }

    const handleInstr = () => {
            setInstr(true)
    }

    return (
        <nav>
            <h1>AlphKing</h1>
            <div>
                <button onClick={isStart ? handleReset : handleTimer} className={theme === "light" ? "light_btn" : "dark_btn"}>{isStart ? "Reset" : "Start"}</button>
                <button onClick={() => { seeScore ? setSeeScore(false) : setSeeScore(true) }} className={theme === "light" ? "light_btn" : "dark_btn"}>ScoreBoard</button>



                <div className={seeScore ? "scoreBoard" : "display_none"}>

                    <div>
                        <span onClick={()=> setSeeScore(false)}>✖</span>
                        <h3>Score Board</h3>

                        {
                            timeArr.length > 0 ?
                                timeArr.map((el) => {
                                    return <p key={el}>{el} </p>
                                }) : <p>No Score</p>
                        }
                    </div>

                </div>

                
                <div className={instr ? "scoreBoard" : "display_none"}>

                    <div>
                        <span onClick={()=> setInstr(false)}>✖</span>
                        <h3>How to Play</h3>

                       <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    </div>

                </div>


                <button onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}
                    className={theme === "light" ? "light_btn" : "dark_btn"}>
                    Change Theme
                </button>
                <button onClick={handleInstr} className={theme === "light" ? "light_btn" : "dark_btn"}>How to Play</button>
            </div>
        </nav>
    )
}