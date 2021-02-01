import React, {useEffect} from "react";
import {useImmer} from "use-immer";
import {useUser} from "../hooks/user";
import {UserContextType, UserContextTypeContent} from "../interfaces";

export const UserContext = React.createContext({} as UserContextType);
export const UserContextProvider = (props: { children: any }) => {

    const [userCtx, updateUserCtx] = useImmer<UserContextTypeContent>({})


    const {loadMe} = useUser({userCtx:userCtx, updateUserCtx} as { userCtx?: UserContextTypeContent, updateUserCtx?: any })

    useEffect(()=>{loadMe().then()},[])

    return (
        <UserContext.Provider value={{userCtx: userCtx, updateUserCtx}}>
            {props?.children}
        </UserContext.Provider>
    );

};

export default UserContext
