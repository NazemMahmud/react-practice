import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount(){
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
                // console.log('sdasdsadsad ', error);
                this.setState({ error: true});
            });
    }

    postSelected = (id) => {
        this.setState({ selectedPostId: id});
    }
    render () {
        let posts = <p style={{textAlign: 'center'}} >Sometig wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={()=> this.postSelected(post.id)}
                        />
            });
        }
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;