import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Link
} from "react-router-dom";

function AllPostsComponent(props) {

    //MARK: state varaibles
    const [state, setState] = React.useState({
        posts : props.posts
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

    return (
      <div className="mt-2">
           <h1>Recent Posts</h1>
            <div className="list-group">
                {postItems}
            </div>
      </div>
    );
  }
  
  export default AllPostsComponent;