import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import App from './App';
import Home from './Home';
import Blog from './Blog';
import Detail from './Detail';
import BookRedux from './BookRedux';
import HookRedux from './HookRedux';
import ContextApi from './contextApi';
import Error from './Error';
import AuthenticatedRoute from './AuthenticatedRoute';
import AuthenticatedComponent from './AuthenticatedComponent';

function Router(){
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/books" component={BookRedux} />
        <Route exact path="/hookredux" component={HookRedux} />
        <Route exact path="/contextapi" component={ContextApi} />
        <AuthenticatedRoute path="/welcome/:name" component={AuthenticatedComponent} />
        <Route component={Error} />
        </Switch>
        </BrowserRouter>
    )
}

export default Router;