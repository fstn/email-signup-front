import React, {useContext}  from "react"
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Card, Input} from "antd";
// noinspection ES6UnusedImports
import Checkbox from 'antd/lib/checkbox';
import Form from "antd/lib/form";
// @ts-ignore
import {navigate, usePath} from 'hookrouter';
import styled from "styled-components";
import {useImmer} from "use-immer";
import {LocaleButton, LocaleLabel, LocalePlaceHolder} from "../../locale";
import {UserContext} from "../../user-context";
import {Translate} from "../../hooks/translation";
import {useUser} from "../../hooks/user";
import {UserContextType} from "../../interfaces";

const Style = styled(Card).attrs({bordered:false})
    `   
    max-width: 500px;
    margin: auto;
    flex: none
`

export function LoginForm() {

    const {login} = useUser(useContext<UserContextType>(UserContext))
    const {t} = Translate()
    const [state, updateState] = useImmer({loading: false})
    const path = usePath()

    const onFinish = async (values:any) => {
        updateState(draft => {
            draft.loading = true
        })
        try {
            await login(values.email, values.password, values.remember)
            setTimeout(() => navigate(path.indexOf("login") === -1 && path.indexOf("welcome-image") === -1 ? path : `/`), 0)
        } finally {
            updateState(draft => {
                draft.loading = false
            })
        }
    };

    // noinspection HtmlUnknownTarget
    return (
        <Style>
            <Form
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[{required: false, message: t('login-form-page.email.error')}]}
                >
                    <Input size="large" prefix={<UserOutlined className="site-form-item-icon"/>}
                           placeholder={LocalePlaceHolder({tkey: "userName"})}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: false, message: t('login-form-page.password.error')}]}
                >
                    <Input size="large"
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder={LocalePlaceHolder({tkey: "password"})}/>
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox ><LocaleLabel tkey={"remember.me"}/></Checkbox>
                    </Form.Item>

                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="login-form-forgot" href="/forgot-password-email">
                        <LocaleButton tkey={"forgot.password"}/>
                    </a>
                </Form.Item>

                <Form.Item>
                    <div style={{display: "flex",flexDirection: "row-reverse"}}>
                        <div style={{textAlign: "center", width: "fit-content"}}>
                            <Button type="primary" htmlType="submit" className="login-form-button"
                                    loading={state.loading}>
                                <LocaleButton tkey={"login"}/>
                            </Button>
                            <div>
                                Or
                            </div>
                            <a href="/register-email">
                                <LocaleButton tkey={"register"}/>
                            </a>
                        </div>
                    </div>
                </Form.Item>
            </Form>
        </Style>
    );
}

export default LoginForm
