import { useContext, useState } from "react"
import { UserContext } from './UserContext'

export const User = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        userContext.setUser({
            name: "Naren",
            email: "naren@gmail.com"
        })
    }
    const handleLogout = () => {
        userContext.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>
            <div>
            {
                (userContext.user) ? <div>
                    Name is : {userContext.user.name} <br/>
                    Email is : {userContext.user.email}
                </div> : 'Logged out'
            }
            </div>
        </div>
    )
}