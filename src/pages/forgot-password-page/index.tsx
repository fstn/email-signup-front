import React from "react"
import styled from "styled-components";
import {ImageOnSide} from "../../components/image-on-side";
import EmailImage from "../../images/email-image";
import {ForgotPasswordForm} from "../../forms/forgot-password-form"


const Style = styled.div`
 background: #F8F8F8;
 max-width: 1200px;
 margin: auto;
 height: 100%;
 text-align: center;
 display: flex;
 align-items: center;
`

export function ForgotPasswordPage(props: { image?: JSX.Element }) {
    return <Style>
        <ImageOnSide image={props.image || <EmailImage/>}>
            <ForgotPasswordForm/>
        </ImageOnSide>
    </Style>
}

export default ForgotPasswordPage
