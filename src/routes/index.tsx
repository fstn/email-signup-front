import ForgotPasswordPage from "../pages/forgot-email-page";
import LoginPage from "../pages/login-page";
import RegisterCodePage from "../pages/register-code";
import RegisterEmailPage from "../pages/register-email-page";
import {UserContextProvider} from "../user-context";

export const loginRoutesDef = {
    '/login': () => <UserContextProvider><LoginPage/></UserContextProvider>,
    '/register-email': () => <RegisterEmailPage/>,
    '/register-code/:email': ({email}:any) => <RegisterCodePage email={email}/>,
    '/register/:email/:code': ({email, code}:any) => <RegisterEmailPage email={email} code={code}/>,
    '/forgot-password-email': () => <ForgotPasswordPage/>,
}

export default loginRoutesDef
