import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Home.css'
import {
  Link
} from "react-router-dom";

function HomeComponent() {
  return (
    <div className="home-wrapper">
       <h2>My Blog</h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">  
        <div className="carousel-inner">		
            <div className="carousel-item active">
                <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                <p className="overview"><b>FoodZy Inc.</b>Made with Love in <a href="#">Ghana.</a></p>
                <div className="star-rating">
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center"><button className="btn btn-default"><Link to="/login">LOGIN</Link></button> <button className="btn btn-default"><Link to="/register">NEW ACCOUNT</Link></button></div>
        </div>
    </div>
  );
}
export default HomeComponent;
