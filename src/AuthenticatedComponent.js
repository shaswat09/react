import React, { Component } from 'react';

class AuthenticatedComponent extends Component{

    constructor(props){
        super(props);
    }

    logout=()=>{
        sessionStorage.removeItem('authenticatedUser');
        this.props.history.push("/");
    }

    back=()=>{
        
        this.props.history.push("/");
    }

    render(){

        return <div>YOU CAN ONLY VIEW THIS COMPONENT IF YOU're LOGGEDIN. You cannot access this component directly from the url. It's better to make this as functional component as no state is required
            Welcome,  {this.props.match.params.name}    <br /><br />
            <button onClick={this.logout} > LOGOUT</button> <br />
            <button onClick={this.back} > Back</button>
        </div>
    }
}

export default AuthenticatedComponent;