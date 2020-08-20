import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store/index';

const App = (
    //將store 提供給Provider後，在Provider裡面的組件，將都可以使用connet與store連接
    <Provider store={store}> 
        <TodoList/>
    </Provider>
);

ReactDOM.render(App,document.getElementById('root'));
