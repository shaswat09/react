import React from 'react';
import Axios from 'axios';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Blog extends React.Component{

    constructor(props){
        super(props);
        this.state={
            books:[],
            addModelIsOpen:false,
            bookName:'',
            authors:'',
            updateModelIsOpen:false,
            bookID:''
        }
    }

    componentDidMount(){
        Axios('http://localhost:8989/webapp/books')
        .then(res=>this.setState({books:res.data}))
        .catch(err=>console.log(err))
    }


    handleDelete=(event)=>{
Axios({
    method:'DELETE',
    url:`http://localhost:8989/webapp/deletebook/${event.target.id}`,
    headers:{'Content-Type':'application/json'}
}).then(res=> Axios('http://localhost:8989/webapp/books')
.then(res=>this.setState({books:res.data}))
.catch(err=>console.log(err)))
.catch(error=>console.log(error))
    }

    handleAddBook=()=>{
this.setState({addModelIsOpen:true})
    }

    handleBookNameChange=(event)=>{
this.setState({bookName:event.target.value});
    }
 handleBookAuthorChange=(event)=>{
    this.setState({authors:event.target.value});
    }

    saveBook=()=>{
        const addObj={
            "name":this.state.bookName,
            "authors":this.state.authors
        }
Axios({
    method:'POST',
    url:'http://localhost:8989/webapp/book',
    headers:{'Content-Type':'application/json'},
    data:addObj
}).then(res=> Axios('http://localhost:8989/webapp/books')
.then(res=>this.setState({books:res.data,addModelIsOpen:false,bookName:'',authors:''}))
.catch(err=>console.log(err)))
.catch(error=>console.log(error))
    }

   handleUpdate=(book)=> (event)=>{
//event.target.id
//alert(book.authors);
//const authorss=event.target;

        this.setState({updateModelIsOpen:true,bookName:book.name,authors:book.authors,bookID:event.target.id});
    }

    handleDetail=(event)=>{
this.props.history.push(`/detail?bookId=${event.target.id}`);
    }

    updateDB=()=>{
        const{bookName,authors,bookID}=this.state;
        const updatedObj={
            "name":bookName,
            "authors":authors,
            "id":bookID
        }
        Axios({
            method:'POST',
            url:'http://localhost:8989/webapp/book',
            headers:{'Content-Type':'application/json'},
            data:updatedObj
        }).then(res=> Axios('http://localhost:8989/webapp/books')
        .then(res=>this.setState({books:res.data,updateModelIsOpen:false,bookName:'',authors:'',bookID:''}))
        .catch(err=>console.log(err)))
        .catch(error=>console.log(error))
    }

    render(){
        const{books,addModelIsOpen}=this.state;
        return(
            <div className="App">
   <table border="1"> 
       <tbody>
       <tr>
                            <td>S.NO</td>
                            <td>Book Name</td>
                            <td>Author</td>
                            <td>Actions</td>
                        </tr>
                        {books.map((book,key)=>{
                            return <tr key={key}>
                                <td>{key+1}</td>
                        <td>{book.name}</td>
                        <td>{book.authors}</td>
                        <td>
                            <button id={book.id} onClick={this.handleUpdate(book)} >Update</button>
                            <button id={book.id} onClick={this.handleDelete}>Delete</button>
                            <button id={book.id} onClick={this.handleDetail}>Detail</button>
                        </td>
                            </tr>
                        })}
       </tbody>
   </table>
   <Modal   isOpen={addModelIsOpen}   style={customStyles} >
  <h3>Add Book</h3>
  <label>Book Name:</label>
 <input type="text" value={this.state.bookName} onChange={this.handleBookNameChange} />
 <br />
 <label>Author: </label>
 <input type="text" value={this.state.authors} onChange={this.handleBookAuthorChange} />
 <br />
 <button onClick={this.saveBook}>Save Book</button>
</Modal>

<Modal   isOpen={this.state.updateModelIsOpen}   style={customStyles} >
  <h3>Update Book</h3>
  <label>Book Name:</label>
 <input type="text" value={this.state.bookName} onChange={this.handleBookNameChange} />
 <br />
 <label>Author: </label>
 <input type="text" value={this.state.authors} onChange={this.handleBookAuthorChange} />
 <br />
 <button onClick={this.updateDB}>Update</button>
</Modal>

 <button onClick={this.handleAddBook}>Add Book</button>
            </div>
        );
    }
}
export default Blog;