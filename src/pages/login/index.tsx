import React from "react"
import styled from "styled-components";
import {LoginImage} from "../../components/login-image";
import {Welcome} from "../../components/welcome";
import {LoginForm} from "../../forms/login";
import {ImageOnSide} from "../../components/image-on-side";

const Style = styled.div`
 background: #F8F8F8;
 max-width: 1200px;
 margin: auto;
 height: 100%;
 text-align: center;
 display: flex;
 align-items: center;
`
export function LoginPage(props:{image?: JSX.Element}){
    return <Style>
        <ImageOnSide image={props.image || <LoginImage/>}>
            <LoginForm/>
        </ImageOnSide>
    </Style>
}

export default LoginPage
