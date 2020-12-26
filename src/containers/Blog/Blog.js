import React, { Component, Suspense } from 'react';
import { NavLink, Route, Switch } from "react-router-dom";

import './Blog.css';
import Posts from "./Posts/Posts";
// import asynchComponent from "../../hoc/asynchComponent";

const AsynchNewPost = React.lazy(() => import("../../components/NewPost/NewPost")); // only works on default export
class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" 
                        render={() => (
                            <Suspense fallback={<div>Loading...</div>}>
                                AsynchNewPost
                            </Suspense>
                        )} 
                    />
                    
                </Switch>
            </div>
        );
    }
}

export default Blog;