import React, { Component } from 'react';
import '../style/group.css';

class Group extends Component {
    render() {
      return (
        <div className="Group">
          <h2>Team {this.props.num}</h2>
          <div className="team-content">
              <ul>
                  <li>1.liaojunbin</li>
                  <li>2.shenleqi</li>
                  <li>3.xuhuihui</li>
                  <li>4.wangjianglin</li>
                  <li>5.wangdengyu</li>
                  <li>6.chensicong</li>
              </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Group;