import React from "react";
import styled from "styled-components";
// @ts-ignore
import useMobileDetect from 'use-mobile-detect-hook';

const Style = styled.div`
svg{
    width: 70%;
}
.container{
    display: flex;
    align-items: center;
    background: white;
    border-radius: 1em;
    margin-left: 10%;
    margin-right: 10%;
    -webkit-box-shadow: 4px 4px 15px 0 rgba(50, 50, 50, 0.4);
    -moz-box-shadow:    4px 4px 15px 0 rgba(50, 50, 50, 0.4);
    box-shadow:         4px 4px 15px 0 rgba(50, 50, 50, 0.4);
}
`

export function ImageOnSide(props: { image: JSX.Element, children: any }) {
    const detectMobile = useMobileDetect();
    return (
        <Style>
            <div className={"container"}>
                <div style={{maxWidth: "50%", flex: "2 0 200px", padding: "1em"}}>
                    {props.children}
                </div>
                {!detectMobile.isMobile() &&
                <div style={{maxWidth: "50%", flex: "1 1"}}>
                    {props.image}
                </div>
                }
            </div>
        </Style>
    )
}
