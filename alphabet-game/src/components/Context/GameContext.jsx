import { createContext, useState } from "react";



export const gameContext = createContext()

export const GameContextProvider = ({children}) => {

    const [theme, setTheme] = useState("light")
    const [reset, setReset] = useState(false)
    const [instruction, setInstruction] = useState(false)
    const [isKeyboard, setIsKeyboard] = useState(false)

    const [isStart, setIsStart] = useState(false)

    const [keyValue, setKeyValue] = useState("");
    const [typedKeys, setTypedKeys] = useState("")

    const [timeArr, setTimeArr] = useState([])

    const [timeMiliSecond, setTimeMiliSecond] = useState(0)
    const [timeRecord, setTimeRecord] = useState([])

    const [currStr, setCurrStr] = useState("")

    const [msg, setMsg] = useState("")


    return  <gameContext.Provider value={{
        isStart, setIsStart, theme, setTheme, reset, setReset, instruction, setInstruction,
        isKeyboard, setIsKeyboard, typedKeys, setTypedKeys, timeRecord, setTimeRecord,
        keyValue, setKeyValue, timeArr, setTimeArr, timeMiliSecond, setTimeMiliSecond, currStr, setCurrStr,
        msg, setMsg
      }} > {children}</gameContext.Provider>
}