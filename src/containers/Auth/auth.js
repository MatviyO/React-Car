import React, {Component} from 'react'
import classes from './auth.css'
import Button from "../../components/UI/Button/Button";
export default class Auth extends Component {

    loginHandler = () => {

    }
    registerHandler = () => {

    }
    submitHandler = (event) => {
event.preventDefault()
    }

    render() {
        return (
            <div className={classes.Auth}>
                    <div>
                        <h1>Authentification</h1>
                        <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                            <input type="text"/>
                            <input type="text"/>
                            <Button type="success" onClick={this.loginHandler}>Login</Button>
                            <Button type="primary" onClick={this.registerHandler} >Registration</Button>
                        </form>
                    </div>

            </div>
        )
    }
}
