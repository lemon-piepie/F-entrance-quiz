import React, { Component } from 'react';
import './App.scss';
import '../style/App.css';
import Group from '../Components/Group';

class App extends Component {
  
  render() {
    return (
      <div data-testid="app" className="App">
        <section>
          <div className="first-line">
            <h1>分组列表</h1>
            <button>分组学员</button>
          </div>
          <Group num="1"/>
          <Group num="2"/>
          <Group num="3"/>
          <Group num="4"/>
          <Group num="5"/>
          <Group num="6"/>
        </section>
        <section>
          <h1>学员列表</h1>
          <div className="all-student">
            <ul>
                <li>1.liaojunbin</li>
                <li>2.shenleqi</li>
                <li>3.xuhuihui</li>
                <li>4.wangjianglin</li>
                <li>5.wangdengyu</li>
                <li>6.chensicong</li>
                <li>1.liaojunbin</li>
                <li>2.shenleqi</li>
                <li>3.xuhuihui</li>
                <li>4.wangjianglin</li>
                <li>5.wangdengyu</li>
                <li>6.chensicong</li>
                <li>1.liaojunbin</li>
                <li>2.shenleqi</li>
                <li>3.xuhuihui</li>
                <li>4.wangjianglin</li>
                <li>5.wangdengyu</li>
                <li>6.chensicong</li>
                <li>1.liaojunbin</li>
                <li>2.shenleqi</li>
                <li>3.xuhuihui</li>
                <li>4.wangjianglin</li>
                <li>5.wangdengyu</li>
                <li>6.chensicong</li>
                <li>1.liaojunbin</li>
                <li>2.shenleqi</li>
                <li>3.xuhuihui</li>
                <li>4.wangjianglin</li>
                <li>5.wangdengyu</li>
                <li>6.chensicong</li>
              </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
