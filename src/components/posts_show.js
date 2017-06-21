import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';
import HeaderInfo from '../components/header';


class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    const { post } = this.props;
    // const post = this.props.post;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
       <div>
        <h3>{post.title}</h3>
        <h6>暱稱: {post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/"><button  className="btn btn-primary">回上頁</button></Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          刪除
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
