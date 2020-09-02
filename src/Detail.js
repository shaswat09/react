import React from 'react';
import './App.css';
import Axios from 'axios';
import queryString from 'query-string';

class Detail extends React.Component{

    constructor(props){
super(props);
this.state={
    book:{}
}
    }

    componentDidMount(){
 const queryStrObj=       queryString.parse(this.props.location.search);
        Axios(`http://localhost:8989/webapp/book/id/${queryStrObj.bookId}`)
        .then(res=>this.setState({book:res.data}))
        .catch(err=>console.log(err))
    }

    handleBack=()=>{
        this.props.history.push('/blog');
    }

    handleBackRedux=()=>{
        this.props.history.push('/books');
    }

    handleBackNew=()=>{
        this.props.history.go(-1);
    }

    render(){
        const{book}=this.state;
        return(
         <div>
             <table border="1">
<tr>
        <td>{book.name}</td>
    <td>{book.authors}</td>
    <td>{book.checkedOutBy}</td>
</tr>
</table>
<button onClick={this.handleBack}>Back</button> <br />
<button onClick={this.handleBackRedux}>Back to Books Redux (Data will be fetched from Global store)</button> <br />
<button onClick={this.handleBackNew}>Back New</button> <br />
            </div>
        );
    }
}

export default Detail;