import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from './store/store';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div >
      <Provider store={store}>
      <Mainpage />
      </Provider>
    </div>
  );
}

export default App;
