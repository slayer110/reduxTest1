import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducer from "./store/reducer";
import Root from "./components/Root";

const store = createStore(reducer);


function App() {
  return <Provider store={store}>
    <Root/>
  </Provider>
}


export default App;
