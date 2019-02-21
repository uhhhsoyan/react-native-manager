import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='email'
                        placeholder='user123@gmail.com'
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label='password'
                        placeholder='password'
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;
