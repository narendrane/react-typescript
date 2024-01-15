import { useState } from "react"

export const LoggedIn = () => {
    const[isLoggedIn, setIsLoggdIn] = useState(false)
    const handleLogin = () => {
        setIsLoggdIn(true)
    }
    const handleLogout = () => {
        setIsLoggdIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>
            <div>
            {
                isLoggedIn ? 'Logged in' : 'Logged out'
            }
            </div>
        </div>
    )
}