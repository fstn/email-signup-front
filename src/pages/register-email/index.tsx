import React from "react"
import styled from "styled-components";
import {Welcome} from "../../components/welcome";
import {RegisterForm} from "../../forms/register";
import {ImageOnSide} from "../../components/image-on-side";
import {RegisterEmail} from "../../forms/register-email";

const Style = styled.div`
 background: #F8F8F8;
 max-width: 1200px;
 margin: auto;
 height: 100%;
 text-align: center;
 display: flex;
 align-items: center;
`
export function RegisterPage(props:{image?: JSX.Element}){
    return <Style>
        <ImageOnSide image={props.image || <Welcome/>}>
            <RegisterEmail/>
        </ImageOnSide>
    </Style>
}

export default RegisterPage
