import React from 'react'
import {Login, Logout} from "./Btn";
import Greeting from "../Greeting";

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isLogin: false};
    }

    handleLoginClick = () => {
        this.setState( {isLogin: true} )
    };

    handleLogoutClick = () => {
        this.setState( {isLogin: false} )
    };

    render() {
        const isLogin = this.state.isLogin;
        let btn = null;

        if (isLogin) {
            btn = <Logout onClick = {this.handleLogoutClick} />;
        } else {
            btn = <Login onClick = {this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLogin={isLogin} />
                { btn }
            </div>
        )
    }
}
