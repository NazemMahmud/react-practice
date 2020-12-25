import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount(){
        console.log('[tp[s: ', this.props);
        if(this.props.match.params.postId){
            /**
             * PROBLEM 2:
             * After updating state it will again call componentDidUpdate lifecycle hook
             * which will create infinite call and infinite update on same
             * therefore, putting the below condition to stop the infinite call
             */
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.postId)){
                axios.get('/posts/' + this.props.match.params.postId)
                .then(response => {
                    this.setState({loadedPost: response.data});
                });
            }

        }
    }

    deletePost = () => {
        axios.delete('/posts/' + this.props.match.params.postId)
            .then(response => {
                console.log(response);
        });
    };

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        console.log('here');
        /**
         * PROBLEM 1:
         * As react is working asynchronously, when it will check the props.id
         * it will run both the lifecycle hook and render condition together
         * and before fetching the render will run, There loadedPost will have no data, hence get ERROR
         * that's why there are 2 conditions following.
         */
        if(this.props.match.params.postId){
            post = <p style={{textAlign: 'center'}} >Loading...</p>
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePost}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;