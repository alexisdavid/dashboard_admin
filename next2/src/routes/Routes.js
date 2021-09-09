import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalContext } from "../context";
import PrivateRoute from './PrivateRoute'
import PageIndex from '../pages/PageIndex'
import HomeComponent from '../pages/Home'
const Routes = () => 
  
        <GlobalContext> 
            <BrowserRouter >
            <Switch>
                <Route path = "/" exact component = { PageIndex } />
                <PrivateRoute path = "/home" exact component = { HomeComponent } />
            </Switch>
            </BrowserRouter>
        </GlobalContext>
    


export default Routes;