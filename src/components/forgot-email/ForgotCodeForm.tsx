import {Button, Descriptions, Form, Input} from "antd";
import React from "react"
import ReCAPTCHA from "react-google-recaptcha";
import {useImmer} from "use-immer";
import {LocaleButton, LocaleHelp, LocaleLabel, LocaleTitle} from "../../common/LocaleC";
export function ForgotCodeForm(){

    const [state,updateState] = useImmer({captcha:false, loading:false})
    return <>
    <Form>
        <Descriptions title={<LocaleTitle tkey={"forgot-password.email"}/>}>
            <Descriptions.Item label=""><LocaleHelp
                tkey={"forgot-password.email"}/></Descriptions.Item>
        </Descriptions>
        <Form.Item name={"email"} label={"email"}>
            <Input></Input>
        </Form.Item>
        <Form.Item name={"code"} label={"code"}>
            <Input></Input>
        </Form.Item>
        <Form.Item label={<LocaleLabel tkey={`security`}/>}>
            <ReCAPTCHA
                sitekey="6LdxSx0aAAAAAITN1byVT-_x8ihn8spFZT9tbgyF"
                onChange={() => updateState(draft => {
                    draft.captcha = true
                })}
            />
        </Form.Item>
        <Form.Item>
            <Button type="primary" disabled={state.captcha === false} loading={state.loading}
                              htmlType="submit"
                              className="login-form-button">
                <LocaleButton tkey={"code"}/>
            </Button>
        </Form.Item>
    </Form>
    </>
}

export default ForgotCodeForm

