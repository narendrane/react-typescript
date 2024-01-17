import { useState } from "react"
import { Profile } from "./Profile"
import { Login } from "./Login"
import { ProfileProps } from "./Profile"
type PrivatProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}
export const Private = ({isLoggedIn, component: Component}: PrivatProps) => {
        if(isLoggedIn)
            return <Component name="Naren"/>
        else
        return <Login/>
        
}