import { createContext, useState } from "react"
export const UserContext = createContext();
export const UserProvider =(props) =>{
    const[userinfo,setUserInfo] = useState('');
    return(
        <UserContext.Provider value={[userinfo,setUserInfo]}>
            {props.children}
        </UserContext.Provider>
    );
}