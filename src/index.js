import React, {Component} from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Pmain from './Pmain/Pmain';
import { store } from './store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Pmain></Pmain>
                </div>
            </Provider>
        )
    };
};

ReactDOM.render(<App/>, document.getElementById('root'));