import React, { Component } from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import  './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        console.log('[tps: ', this.props);
        /**
         * this lifecycle hook works asynchronously. so after executing 1st line, it will automatic run 2ndd line
         * therefore, it won't get the chance to store all the post data before next action
         * Therefore, we will use then(), i.e. axios uses ES6's Promise
         */
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4); // 1st 4 data for pagination
                const updatedPosts = posts.map(post => {
                    return { ...post, author: 'Max'}
                }); 
                this.setState({ posts: updatedPosts });
            }).catch( error => {
                console.log(error);
                // this.setState({ error: true});
            });
    }

    postSelected = (id) => {
        // this.props.history.push('/' + id);
        this.props.history.push({pathname: '/' + id});
    }
    
    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return(
                    // <Link to={'/' + post.id  } key={post.id}>
                        <Post 
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelected(post.id)} 
                        />
                    // </Link>
                );
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;