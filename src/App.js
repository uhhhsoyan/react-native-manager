import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component  {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBoG7NjvEVaWo-vf7FNATco8NWLTfeZXUM',
            authDomain: 'manager-f96dc.firebaseapp.com',
            databaseURL: 'https://manager-f96dc.firebaseio.com',
            projectId: 'manager-f96dc',
            storageBucket: 'manager-f96dc.appspot.com',
            messagingSenderId: '12006846567'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App;
