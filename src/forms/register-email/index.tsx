import {UserOutlined, PhoneOutlined, MailOutlined, SafetyCertificateOutlined} from "@ant-design/icons";
import {Button, Card, Form, Input, Select} from "antd";
// @ts-ignore
import {navigate} from "hookrouter";
import React, {useContext} from "react"
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import {useImmer} from "use-immer";
import {FormStyle, layout, tailLayout} from "../../components/form-layout";
import {LocaleLabel, LocaleTitle} from "../../locale";
import { AxiosContextType, AxiosContext} from "../../axios";
import {Translate} from "../../hooks/translation";

const Style = styled(Card).attrs({bordered: false})`

h1{
text-align: left;
width: 100%;
margin-bottom: 1em;
font-weight: bold;
}
`


export function RegisterEmail(props: {
    code?: string,
    email?: string,
} = {}) {
    const {axios} = useContext<AxiosContextType>(AxiosContext)
    const {t} = Translate()
    const [state, updateState] = useImmer({captcha: false, loading: false})
    const onFinish = async (values: any) => {
        try {
            updateState(draft => {
                draft.loading = true
            })
            await axios!.post(`/register`, values)
            navigate('/login');
        } catch (e) {
            throw e
        } finally {
            updateState(draft => {
                draft.loading = false
            })
        }
    };

    return <FormStyle>
        <Style>
            <h1><LocaleTitle tkey={"register.email"}/></h1>
            <Form onFinish={onFinish} {...layout}>
                <Form.Item name={"email"} label={<LocaleLabel tkey={"email"}/>} initialValue={props.email}
                           required={true} rules={[{type: "string"}]}>
                    <Input prefix={<MailOutlined className="site-form-item-icon"/>}/>
                </Form.Item>
                <Form.Item labelCol={{span: 0}} wrapperCol={{span: 24}}>
                    <div style={{width: "fit-content", marginRight: 0, marginLeft: "auto"}}>
                        <ReCAPTCHA
                            size={"normal"}
                            sitekey="6LdxSx0aAAAAAITN1byVT-_x8ihn8spFZT9tbgyF"
                            onChange={() => updateState(draft => {
                                draft.captcha = true
                            })}
                        />
                    </div>
                </Form.Item>
                <Form.Item {...tailLayout} className={"right"}>
                    <Button type={"primary"} htmlType={"submit"}><LocaleLabel tkey={"register"}/></Button>
                </Form.Item>
            </Form>
        </Style>
    </FormStyle>
}
