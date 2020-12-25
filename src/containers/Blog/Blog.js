import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from '../../components/NewPost/NewPost';
class Blog extends Component {
    

    render () {
        
        return (
            <div className="Blog" >
                <header>
                    <nav>
                        <ul>
                           <li><Link to="/">Home</Link></li> 
                           <li><Link to={{
                               pathname: "/new-post",
                               hash: '#submit',
                               search: '?quick-s=t'
                           }}>New Post</Link></li> 
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" render={()} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;