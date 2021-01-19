import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Design, Photography, Writing, Speaking, About, Contact } from './containers';
import './App.css';

class App extends Component {
  render() {
    console.log('app render');
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/photography' component={Photography} />
          <Route exact path='/writing' component={Writing} />
          <Route exact path='/speaking' component={Speaking} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/design' component={Design} />
          <Route path='/' component={Design} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
