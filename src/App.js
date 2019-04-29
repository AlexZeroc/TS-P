import React, {Component} from 'react';
import CityFind from "./components/cityFind";
import {Provider} from "react-redux";
import store from "./store";

class App extends Component  {
  render(){
  return (
  <div>
    <Provider store={store}>
    <CityFind/>
    </Provider>
  </div>
  )
  }
}

export default App;
