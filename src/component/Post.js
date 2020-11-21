import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'
import '../css/NotFound.css'
import {
  Link
} from "react-router-dom";
import AllPostsComponent from './AllPosts';

function PostComponent() {

    //MARK: state varaibles
    const [state, setState] = React.useState({
        title: "",
        content: "",
        posts : []
    })

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
            <div class="form-group mt-2">
                <label for="title">Post Title</label>
                <input type = "text" name="title" required  value={state.title} onChange={handleInputChange} className="form-control" placeholder="Post title"/>
            </div>
            <div class="form-group mt-2">
                <label for="title">Post Content</label>
                <textarea rows="10" cols="50" name="content"  required  value={state.content} onChange={handleInputChange} className="form-control" placeholder="Post content"/>
            </div>

            <div class="mt-2 pull-right text right">
                <button onClick={postArticle} className= "btn btn-primary">Post Article</button> 
            </div>
           
            
            <AllPostsComponent posts = {state.posts}/>
      </div>
    );
  }
  
  export default PostComponent;