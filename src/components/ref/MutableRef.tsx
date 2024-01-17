
import { useRef, useEffect, useState } from "react"
export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const timeRef = useRef<number| null>(null);
    const stopTimer = () => {
        timeRef.current && window.clearInterval(timeRef.current)
    }
    const startTimer = () => {
        timeRef.current = window.setInterval(()=>{
            setTimer((timer) => timer+1)
        }, 100)
    }
    useEffect(() => {
        setTimer(0)
        return () => {
        stopTimer()
        }
    }, [])
    return <div>
        <div>Timer: {timer}</div>
        <button onClick={() => startTimer()}>Start Timer</button>
        <button onClick={() => stopTimer()}>Stop Timer</button>
        <button onClick={() => setTimer(0)}>Reset Timer</button>
    </div>
}