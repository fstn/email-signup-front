import React from "react"
import styled from "styled-components";
import {ImageOnSide} from "../../components/image-on-side";
import RegisterCodeForm from "../../forms/register-code-form";
import SecurityImage from "../../images/security-image";

const Style = styled.div`
 background: #F8F8F8;
 max-width: 1200px;
 margin: auto;
 height: 100%;
 text-align: center;
 display: flex;
 align-items: center;
`

export function RegisterCodePage(props: { email: string, code?:string, image?: JSX.Element }) {
    return <Style>
        <ImageOnSide image={props.image || <SecurityImage/>}>
            <RegisterCodeForm email={props.email} code={props.code}/>
        </ImageOnSide>
    </Style>
}

export default RegisterCodePage
