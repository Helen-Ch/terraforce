import React from 'react';
import {Provider} from 'react-redux';
import store from "./store";
import Posts from "./containers/Posts";
import Header from "./containers/Header";

function App() {
  return (
  <Provider store={store}>
    <Header />
    <Posts />
  </Provider>
  );
}

export default App;
