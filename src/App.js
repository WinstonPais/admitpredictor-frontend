import React, { Component } from 'react';
// import NavBar from './NavBar/NavBar';
// import UserProvider from './contexts/UserProvider';
import Home from './Pages/Home/Home';
import FormPage from './Pages/Home/Formpage';
// import MakeRecipesPage from './MainPages/MakeRecipesPage/MakeRecipesPage';
// import AllRecipesPage from './MainPages/AllRecipes/AllRecipes';
// import PageNotFound from './MainPages/PageNotFound/PageNotFound';
// import ContactPage from './MainPages/ContactPage/ContactPage';
// import RecipeDetailsPage from './MainPages/RecipeDetailsPage/RecipeDetailsPage';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
// import ScrollToTop from './ScrollToTop/ScrollToTop';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
    //   <UserProvider>
        // <>
        // <Router history={history}>
        //     <Switch >
        //       <Route path="*" component={NavBar}/>
        //     </Switch>
        // </Router>
        // </>
        <>
        <Router history={history}>
            {/* <ScrollToTop /> */}
            <Switch >
              <Route path="/admitpredictor-frontend" component={Home} exact />
              <Route path="/admitpredictor-frontend/formpage" component={FormPage} exact />
              {/* <Route path="/itadakimasu/makerecipepage" component={MakeRecipesPage} exact />
              <Route path="/recipe/:id" component={RecipeDetailsPage} />
              <Route path="/allrecipes" component={AllRecipesPage} />
              <Route path="/contact" component={ContactPage} />
              <Route component={PageNotFound} /> */}
            </Switch>
        </Router>
        </>
       
    // </UserProvider>
    )
  }
}

export default App;
