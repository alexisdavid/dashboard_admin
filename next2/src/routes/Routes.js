import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalContext } from "../context";
import PrivateRoute from './PrivateRoute'
import PageIndex from '../pages/PageIndex'
import HomeComponent from '../pages/Home'
import UsersPage from '../pages/Users'
const Routes = () => 
  
        <GlobalContext> 
            <BrowserRouter >
            <Switch>
                <Route path = "/" exact component = { PageIndex } />
                <PrivateRoute path = "/home" exact component = { HomeComponent } />
                <PrivateRoute path = "/users" exact component = { UsersPage } />
            </Switch>
            </BrowserRouter>
        </GlobalContext>
    


export default Routes;