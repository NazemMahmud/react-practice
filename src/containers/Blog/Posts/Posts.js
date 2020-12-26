import React, { Component } from 'react';
import axios from '../../../axios';
import {Route} from "react-router-dom";

import Post from '../../../components/Post/Post';
import  './Posts.css';
import FullPost from "../../../components/FullPost/FullPost";

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log( this.props );
        console.log( this.props.match.url );
		/**
         * this lifecycle hook works asynchronously. so after executing 1st line, it will automatic run 2ndd line
         * therefore, it won't get the chance to store all the post data before next action
         * Therefore, we will use then(), i.e. axios uses ES6's Promise
         */
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice( 0, 4 );
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                } );
                this.setState( { posts: updatedPosts } );
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

    postSelected = ( id ) => {
        // this.props.history.push({pathname: '/posts/' + id});
        console.log('this.props.match', this.props.match);
        this.props.history.push( '/posts/' + id );
        console.log('this.props', this.props.history);
    }

    render () {
        console.log( this.props );
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if ( !this.state.error ) {
            posts = this.state.posts.map( post => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelected( post.id )} />
                    // </Link>
                );
            } );
        }

        return (
            <div>
                <p>{this.props.match.url}</p>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:postId'}  component={FullPost} />
                
            </div>
        );
    }
}

export default Posts;