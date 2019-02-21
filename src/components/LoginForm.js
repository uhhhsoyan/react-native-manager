import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text); // we have access to this.props... bc we wired up with the connect helper
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='email'
                        placeholder='user123@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)} // Callback function so we bind the context
                        value={this.props.email} // from reducer... see MapStateToProps
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label='password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
        // 'auth' is the value we assigned our reducer to, reducer is producing 'email'
        // now within our component we have access to this.props.email aka value from reducer
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
