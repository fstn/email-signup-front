import {notification} from "antd";
import React, {useContext} from "react";
import {LocaleHelp, LocaleTitle} from "../../locale";
import {AxiosContext, AxiosContextType} from "../../axios";
import {UserContextType} from "../../interfaces";

export function useUser(userContext: UserContextType) {
    const {updateToken} = useContext<AxiosContextType>(AxiosContext)
    const {axios} = useContext<AxiosContextType>(AxiosContext)

    const loadMe = async (token?: string) => {
        try {
            let config = {}
            if (token) {
                config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            }
            const res = await axios?.get(`/me`, config)
            if (res?.data) {
                await userContext.updateUserCtx((draft:any) => {
                    draft.user = res.data
                })
            }
        } catch (error) {
            console.log(error)
            userContext.updateUserCtx((draft:any) => {
                draft.token = undefined
            })
            if (window.location.pathname !== "/login") {
                //navigate("/login")s
                return Promise.reject(error);
            }
        }
    }
    const login = async (email: string, password: string, remember: string) => {
        try {
            localStorage.removeItem("SecretaryContext")
            const res = await axios?.post(`/login`, {
                username: email || "candidate@yopmail.com",
                password: password || "test",
                remember
            }, {})
            if (res?.status! < 300) {
                const accessToken = res?.data.access_token;
                await updateToken?.(accessToken)
                await loadMe(accessToken)
                return res?.data.payload
            }
        } catch (e) {
            if (e?.response?.status === 401) {
                await updateToken?.(undefined)
                notification.error({
                    message: <LocaleTitle tkey={"login.invalid"}/>,
                    description: <LocaleHelp tkey={"login.invalid"}/>
                })
            } else {
                notification.warn({
                    message: <LocaleTitle tkey={"server.error"}/>,
                    description: <LocaleHelp tkey={"server.error"}/>
                })
            }
            throw e
        }
    }


    return {
        loadMe,
        login
    }
}
