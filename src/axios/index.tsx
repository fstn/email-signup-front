import {notification} from "antd";
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
// @ts-ignore
import {navigate} from "hookrouter";
import {get} from "lodash";
import React from "react";
import {useImmer} from "use-immer";

export type AxiosContextType = { axios?: AxiosInstance, token: string, updateToken?: (token?: string) => Promise<void> }
export const AxiosContext = React.createContext<AxiosContextType>({axios, token: ""});


function configureAxiosInstance(axiosInstance: AxiosInstance, token: string | undefined, updateToken: Function) {
    axiosInstance.interceptors.request.use(function (config: AxiosRequestConfig) {
        // Do something before request is sent
        config = {
            baseURL: "/api",
            ...config,
        }

        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        return config;
    }, function (error: Error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use(function (response: AxiosResponse) {
        return response;
    }, function (error: AxiosError) {
        if (error.request.responseURL.indexOf("locales") === -1) {
            //TODO handleError("generic", error)
        }
        if ((401 === get(error, 'response.status'))) {
            if (window.location.pathname !== "/login" && error.request.responseURL.indexOf("/me") === -1) {
                navigate("/login")
                return Promise.reject(error);
            }
            updateToken(undefined)
            notification["warning"]({
                message: "Session Expired",
                description: "Your session has expired. Would you like to be redirected to the login page?",
                onClose: () => {
                    localStorage.removeItem('user');
                },
            });
        } else if (404 === get(error, 'response.status')) {
            //ignore 404
        } else {
            notification["error"]({
                message: 'Oups!',
                description:
                    'Hmmmm, an error occured!',
            });
            return Promise.reject(error);
        }
    })
    return axiosInstance
}

export const AxiosContextProvider = (props: { token?: string, children: any }) => {


        const [state, updateState] = useImmer<any>({
            token: props.token,
            axios: configureAxiosInstance(axios.create(), props.token, updateToken)
        });


        async function updateToken(token?: string) {
            return updateState(draft => {
                draft.token = token;
                draft.axios = configureAxiosInstance(axios.create(), token, updateToken)
            })
        }

        return (
            <AxiosContext.Provider value={{axios: state.axios, token: state.token, updateToken}}>
                {props?.children}
            </AxiosContext.Provider>

        );
    }
;
