import React, { Component } from 'react';
import Home from './Pages/Home/Home';
import GradHatLoader from './components/Loader/GradHatLoader';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <>
        <Router history={history}>
            <Switch >
              <Route path="/admitpredictor-frontend" render={() => <GradHatLoader pageComponent={<Home/>}/>} exact />
            </Switch>
        </Router>
        </>
       
    // </UserProvider>
    )
  }
}

export default App;
