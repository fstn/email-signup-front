import {Form, Input} from "antd";
import React from "react"

export function ForgotPasswordForm(){
    return <>
        <Form>
            <Form.Item name={"email"} label={"email"}>
                <Input/>
            </Form.Item>
            <Form.Item name={"code"} label={"code"}>
                <Input/>
            </Form.Item>
        </Form>
    </>
}
export default ForgotPasswordForm
