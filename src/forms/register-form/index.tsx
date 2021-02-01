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

export type Field = "gender" | "firstName" | "lastName" | "phone";
const Style = styled(Card).attrs({bordered: false})`

h1{
text-align: left;
width: 100%;
margin-bottom: 1em;
font-weight: bold;
}
`

export function RegisterForm(props: {
    code?: string,
    email?: string,
    hiddenFields?: Field[]
} = {hiddenFields: []}) {
    const {axios} = useContext<AxiosContextType>(AxiosContext)
    const {t} = Translate()
    const [state, updateState] = useImmer({captcha: false, loading: false})
    const onFinish = async (values: any) => {
        try {
            updateState(draft => {
                draft.loading = true
            })
            await axios!.post(`/register`, values)
            navigate('/login-form-page');
        } catch (e) {
            throw e
        } finally {
            updateState(draft => {
                draft.loading = false
            })
        }
    };

    function isVisible(fieldName: Field) {
        return !props.hiddenFields?.some(d => d === fieldName)
    }

    return <FormStyle>
        <Style>
            <h1><LocaleTitle tkey={"signup"}/></h1>
            <Form onFinish={onFinish} {...layout}>
                {isVisible("gender") &&
                <Form.Item name={"gender"} label={<LocaleLabel tkey={"gender"}/>} required={true}>
                    <Select options={[
                        {value: "m", label: t("gender.male")},
                        {value: "f", label: t("gender.female")},
                        {value: "o", label: t("gender.other")}]}/>
                </Form.Item>}
                {isVisible("firstName") &&
                <Form.Item  name={"firstName"} label={<LocaleLabel tkey={"firstName"}/>} required={true}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}/>
                </Form.Item>}
                {isVisible("lastName") &&
                <Form.Item name={"lastName"} label={<LocaleLabel tkey={"lastName"}/>} required={true}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}/>
                </Form.Item>}
                {isVisible("phone") && <Form.Item name={"phone"} label={<LocaleLabel tkey={"phone"}/>} required={true}
                                                  rules={[{type: "string"}]}>
                    <Input prefix={<PhoneOutlined className="site-form-item-icon"/>} />
                </Form.Item>}
                <Form.Item name={"code"} label={<LocaleLabel tkey={"code"}/>} initialValue={props.code} required={true}>
                    <Input prefix={<SafetyCertificateOutlined className="site-form-item-icon"/>} type={"number"}/>
                </Form.Item>
                <Form.Item name={"email"} label={<LocaleLabel tkey={"email"}/>} initialValue={props.email}
                           required={true} rules={[{type: "string"}]}>
                    <Input prefix={<MailOutlined className="site-form-item-icon"/>}/>
                </Form.Item>
                <Form.Item name={"password"} label={<LocaleLabel tkey={"password"}/>} required={true}
                           rules={[{min: 10, required: true}]}>
                    <Input prefix={<SafetyCertificateOutlined className="site-form-item-icon"/>}/>
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

export default  RegisterForm
