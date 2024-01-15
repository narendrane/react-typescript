import { useState } from "react"
type AuthUser = {
    name: string
    email: string
}
export const User = () => {
    const[isLoggedIn, setIsLoggdIn] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setIsLoggdIn({
            name: "Naren",
            email: "naren@gmail.com"
        })
    }
    const handleLogout = () => {
        setIsLoggdIn({} as AuthUser)
    }
    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>
            <div>
            {
                (isLoggedIn.name) ? <div>
                    Name is : {isLoggedIn.name} <br/>
                    Email is : {isLoggedIn.email}
                </div> : 'Logged out'
            }
            </div>
        </div>
    )
}