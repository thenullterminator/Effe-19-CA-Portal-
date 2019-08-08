import React from 'react';
import RegisterPage from '../components/register';
import LoginPage from '../components/login';
import LandingPage from '../components/landing';
import Dashboard from '../components/dashboard';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const AppRouter=()=>{
      return (

            <Router>
                  <Switch>
                        <Route path='/' component={LandingPage} exact/>
                        <Route path='/register' component={RegisterPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path='/dashboard' component={Dashboard}/>
                        {/* <Route path='/help' component={HelpPage}/>
                        <Route component={PageNotFound}/> */}
                  </Switch>
            </Router>

      );
};

export default AppRouter;