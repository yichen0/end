import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import HeaderInfo from '../components/header';
import AboutMe from '../components/about';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  
  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <div>
            <Link to={"posts/" + post.id}>
              <span className="pull-xs-right">{post.categories}</span>
              <strong>{post.title}</strong>
            </Link>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
  <div>
                    <HeaderInfo />
                </div>
                <ul>
                    <Link to="/">
                        <button type="button" className="firstb" >關於我</button>
                    </Link>
                    <Link to="/connect">
                    <button type="button" className="firstb ">聯絡我</button>
                    </Link>
                    <Link to="/posts/new">
                        <button type="button" className="firstb ">留言板</button>
                    </Link>
                </ul>
        <div>
          <AboutMe />
        </div>
        <p>留言內容</p>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
