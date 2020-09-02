import Axios from 'axios';
import actionTypes from './actionTypes'

export const getBooksData=()=>{
    console.log("getBooksDataActions");
    return(dispatch)=>{
    Axios('http://localhost:8989/webapp/books')
    .then(res=>dispatch(saveBooksData(res.data)))
    .catch(err=>console.log(err))
}
}

export const deleteBook=(bookId)=>{
    return(dispatch)=>{
    Axios({
        method:'DELETE',
        url:`http://localhost:8989/webapp/deletebook/${bookId}`,
        headers:{'Content-Type':'application/json'}
    }).then(res=> Axios('http://localhost:8989/webapp/books')
    .then(res=>dispatch(saveBooksData(res.data)))
    .catch(err=>console.log(err)))
    .catch(error=>console.log(error))
}
}

export const addBook=(book)=>{
    return(dispatch)=>{
    Axios({
        method:'POST',
        url:'http://localhost:8989/webapp/book',
        headers:{'Content-Type':'application/json'},
        data:book
    }).then(res=> Axios('http://localhost:8989/webapp/books')
    .then(res=>dispatch(saveBooksData(res.data)))
    .catch(err=>console.log(err)))
    .catch(error=>console.log(error))
}
}

export const updateBook=(updatedBook)=>{
    return(dispatch)=>{
    Axios({
        method:'POST',
        url:'http://localhost:8989/webapp/book',
        headers:{'Content-Type':'application/json'},
        data:updatedBook
    }).then(res=> Axios('http://localhost:8989/webapp/books')
    .then(res=>dispatch(saveBooksData(res.data)))
    .catch(err=>console.log(err)))
    .catch(error=>console.log(error))
}
}

const saveBooksData=(books)=>{
    console.log("saveBooksDataActions"+books);
return{
    type:actionTypes.SAVE_BOOKS_DATA,
    payload:books
}

}