import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import HeaderInfo from '../components/header';
import AboutMe from '../components/about';

class ConnectMe extends Component {

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
               <div className='detail col-md-9'>
        <h3 className="text-center" >聯絡我</h3>
        <div>
            <a href = "https://www.facebook.com/profile.php?id=100000308183995">FB</a>
        </div>
        <div>信箱:pp362886@yahoo.com.tw</div>
      </div>
            </div>


        );
    }
}
export default ConnectMe;