import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // << ReduxThunk is middleware
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        // 2nd arg for default state, 3rd arg for store enhancers
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
