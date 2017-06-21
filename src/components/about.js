import React from 'react';
import { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
        <div className='detail col-md-9'>
        <h3 className="text-center" >關於我</h3>
        <img src="https://raw.githubusercontent.com/yichen0/wk14/master/ME.png"/>
        <div>姓名:YC Lin</div>
        <p>目前就讀:國立台北教育大學數位科技設技學系</p>
        <p>專業技能:無 </p>
        <p>興趣:無 </p>
      </div>
    );
  }
}
export default AboutMe;