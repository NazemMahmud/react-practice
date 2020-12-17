import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate(){
        if(this.props.id){
            /**
             * PROBLEM 2:
             * After updating state it will again call componentDidUpdate lifecycle hook
             * which will create infinite call and infinite update on same
             * therefore, putting the below condition to stop the infinite call
             */
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    this.setState({loadedPost: response.data});
                });
            }

        }
    }

    deletePost = () => {
        axios.delete('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log(response);
        });
    };

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        /**
         * PROBLEM 1:
         * As react is working asynchronously, when it will check the props.id
         * it will run both the lifecycle hook and render condition together
         * and before fetching the render will run, There loadedPost will have no data, hence get ERROR
         * that's why there are 2 conditions following.
         */
        if(this.props.id){
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