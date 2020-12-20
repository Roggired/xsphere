import React from 'react'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

function App() {
    return(
        <React.Fragment>
            <BrowserRouter>
                <Route exact path="/xsphere/" component={Home}/>
                <Route path="/xsphere/login" component={SignIn}/>
                <Route path="/xsphere/register" component={SignUp}/>
                <Route path="/xsphere/forgot_password" component={ForgotPassword}/>
                {/*<Switch>*/}
                {/*    <Route path="/xsphere/" component={Home}/>*/}
                {/*    <Route path="/xsphere/login" component={SignIn}/>*/}
                {/*    <Route path="/xsphere/register" component={SignUp}/>*/}
                {/*    <Route path="/xsphere/forgot_password" component={ForgotPassword}/>*/}
                {/*    <Redirect to='/xsphere/'/>*/}
                {/*</Switch>*/}
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;