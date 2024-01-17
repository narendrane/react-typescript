
import { useRef, useEffect } from "react"
export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return <div>
        <input type="text" value="" ref={inputRef} onChange={(e)=>{console.log(e)}}/>
    </div>
}