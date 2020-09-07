import React, { Component } from 'react';
import './App.scss';
import '../style/App.css';
import Group from '../Components/Group';

class App extends Component {
  state = {
    showGroup:false,
  }

  showGroupList = () => {
    this.setState({
      showGroup:true,
    })
  }
  
  render() {
    return (
      <div data-testid="app" className="App">
        <section>
          <div className="first-line">
            <h1>分组列表</h1>
            <button onClick={this.showGroupList}>分组学员</button>
          </div>
          <div className={this.state.showGroup?'groupListShow':'groupListHide'}>
            <Group num="Team 1"/>
            <Group num="Team 2"/>
            <Group num="Team 3"/>
            <Group num="Team 4"/>
            <Group num="Team 5"/>
            <Group num="Team 6"/>
          </div>          
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
                <input type="text" placeholder="+添加学员" />
              </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
