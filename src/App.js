import React, {Component} from 'react';
import CityFindContainer from "./components/cityFindContainer";
import {Provider} from "react-redux";
import store from "./store";

class App extends Component  {
  render(){
  return (
  <div>
    <Provider store={store}>
    <CityFindContainer/>
    </Provider>
  </div>
  )
  }
}

export default App;
