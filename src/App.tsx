import React from 'react';

import './App.css';
import "antd/dist/antd.css"
import ForgotPasswordPage from "./pages/forgot-password-page";
import LoginPage from "./pages/login-page";
import RegisterCodePage from "./pages/register-code";
import { Tabs } from 'antd';
import RegisterEmailPage from "./pages/register-email-page";
import RegisterPage from "./pages/register-page";

const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
        <Tabs>
            <TabPane tab={"RegisterEmail"} key={"1"}>
                <RegisterEmailPage/>
            </TabPane>
            <TabPane tab={"RegisterCode"} key={"2"}>
                <RegisterCodePage email={"stephen.z@gmail.com"}/>
            </TabPane>
            <TabPane tab={"Register"} key={"3"}>
                <RegisterPage/>
            </TabPane>
            <TabPane tab={"Login"} key={"4"}>
                <LoginPage/>
            </TabPane>
            <TabPane tab={"ForgotEmailPage"} key={"5"}>
                <ForgotPasswordPage/>
            </TabPane>
        </Tabs>
    </div>
  );
}




export default App;
