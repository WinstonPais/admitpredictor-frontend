import React, { Component } from 'react';
import Home from './Pages/Home/Home';
import GradHatLoader from './components/Loader/GradHatLoader';
import FormPage from './Pages/FormPage/Formpage';
import Contact from './Pages/Contact/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <>
        <Router history={history}>
            <Switch>
              <Route exact path="/admitpredictor-frontend" component={() => <GradHatLoader pageComponent={<Home/>}/>} />
              <Route exact path="/admitpredictor-frontend/formpage" component={() => <GradHatLoader pageComponent={<FormPage/>}/>} />
              <Route exact path="/admitpredictor-frontend/contact" component={() => <GradHatLoader pageComponent={<Contact/>}/> } />
            </Switch>
        </Router>
        </>
    )
  }
}

export default App;
