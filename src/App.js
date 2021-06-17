import React, { Component } from 'react';
import Home from './Pages/Home/Home';
import GradHatLoader from './components/Loader/GradHatLoader';
import FormPage from './Pages/FormPage/Formpage';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <>
        <Router history={history}>
            <Switch>
              <Route path="/admitpredictor-frontend" render={() => <GradHatLoader pageComponent={<Home/>}/>} exact />
              <Route path="/admitpredictor-frontend/formpage" render={() => <GradHatLoader pageComponent={<FormPage/>}/>} exact />
            </Switch>
        </Router>
        </>
    )
  }
}

export default App;
