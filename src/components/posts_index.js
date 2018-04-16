import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';
// import { bindActionCreators } from 'redux';


class PostsIndex extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { posts: [] };
    // }
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li 
                    key={post.id}
                    className="list-group-item">
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return(  
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>                         
        );
    }

    // componentDidMount() {
    //     fetch('http://localhost:5000/api/values')
    //     .then((resp) => {
    //         if(!resp.ok) {
    //            throw Error(resp.statusText); 
    //         }                       
    //         return resp.json();
    //     })
    //     .then((respAsJson) => 
    //         this.setState({ posts: respAsJson })
    //     )
    //     .catch(error => console.log(error))
    // }

    // renderPosts() {
    //     const { posts } = this.state;

    //     return posts.map(post => {
    //         return (
    //             <li key={post.title} className="list-group-item">
    //                 {post.title}
    //             </li>
    //         );
    //     });
    // }


}

function mapStateToProps(state) {
    return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);