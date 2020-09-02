import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class AuthenticatedRoute extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if(sessionStorage.getItem('authenticatedUser')!=null){
            return <Route {...this.props} />
                    }
                    else{
                        return <Redirect to="/" />
                    }
    }
}

export default AuthenticatedRoute;