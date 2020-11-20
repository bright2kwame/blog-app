import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'
import '../css/NotFound.css'
import {
  Link
} from "react-router-dom";

function PostComponent() {

    //MARK: state varaibles
    const [state, setState] = React.useState({
        title: "",
        content: "",
        posts : []
    })

    //MARK: list of post items
    const postItems = state.posts.map((item, index) =>
         <a key={index.toString()} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.title}</h5>
                <small className="text-muted">{item.date.getFullYear() + '-' + (item.date.getMonth() + 1) + '-' + item.date.getDate()}</small>
                </div>
                <p class="mb-1">{item.content}</p>
                <small className="text-muted">Donec id elit non mi porta.</small>
        </a>
    );

    //MARK: handle input change
    function handleInputChange(event){
      setState({
        ...state,
         [event.target.name]: event.target.value
        });
    }
    

    //MARK: handle post
    function postArticle(event){
          let postContent = state.content
          let postTitle = state.title
          let postDate = new Date()
          let post = {"title": postTitle,"content": postContent, "date": postDate}
          setState({
            ...state,
             "title": "",
             "content": ""
            });
            //MARK: add to list
            state.posts.push(post)
      }

    return (
      <div className="container">
            <div>
                <input type = "text" name="title" required  value={state.title} onChange={handleInputChange} className="form-control" placeholder="Post title"/>
            </div>
            <div>
                <textarea  name="content" required  value={state.content} onChange={handleInputChange} className="form-control" placeholder="Post content"/>
            </div>
            <button onClick={postArticle} className= "btn btn-primary">Post Article</button> 
            <div className="list-group">
                {postItems}
            </div>
            
      </div>
    );
  }
  
  export default PostComponent;