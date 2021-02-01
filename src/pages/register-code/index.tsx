import React from "react"
import styled from "styled-components";
import {Welcome} from "../../components/welcome";
import {ImageOnSide} from "../../components/image-on-side";
import {RegisterCode} from "../../forms/register-code";

const Style = styled.div`
 background: #F8F8F8;
 max-width: 1200px;
 margin: auto;
 height: 100%;
 text-align: center;
 display: flex;
 align-items: center;
`
export function RegisterCodePage(props:{image?: JSX.Element}){
    return <Style>
        <ImageOnSide image={props.image || <Welcome/>}>
            <RegisterCode/>
        </ImageOnSide>
    </Style>
}

export default RegisterCodePage
