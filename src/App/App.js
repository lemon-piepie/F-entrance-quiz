import React, { Component } from 'react';
import './App.scss';
import '../style/App.css';
import Group from '../Components/Group';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showGroup:false,
      students:[
        {id:1,name:"廖浚斌"},
        {id:2,name:"沈乐棋"},
        {id:3,name:"徐慧慧"},
        {id:5,name:"王江林"},
        {id:6,name:"王登宇"},
        {id:7,name:"杨思雨"},
        {id:8,name:"江雨舟"},
        {id:9,name:"廖燊"},
        {id:10,name:"胡晓"},
        {id:11,name:"但杰"},
        {id:12,name:"盖迈达"},
        {id:13,name:"肖美琦"},
        {id:14,name:"黄云洁"},
        {id:15,name:"齐瑾浩"},
        {id:16,name:"刘亮亮"},
        {id:17,name:"肖逸凡"},
        {id:18,name:"王作文"},
        {id:19,name:"郭瑞凌"},
        {id:20,name:"李明豪"},
        {id:21,name:"党泽"},
        {id:22,name:"肖伊佐"},
        {id:23,name:"贠晨曦"},
        {id:24,name:"李康宁"},
        {id:25,name:"童世祁"},
        {id:26,name:"马庆"},
        {id:27,name:"商婕"},
        {id:28,name:"余榕"},
        {id:29,name:"谌哲"},
        {id:30,name:"董翔锐"},
        {id:31,name:"陈泰宇"},
        {id:32,name:"赵允齐"},
        {id:33,name:"张柯"},
        {id:34,name:"廖文强"},
        {id:35,name:"刘轲"},
        {id:36,name:"岳港"},
        {id:37,name:"凌凤仪"}               
      ],
      groupOne:[],
      groupTwo:[],
      groupThree:[],
      groupFour:[],
      groupFive:[],
      groupSix:[],
    }
  }
  
  componentDidMount(){
    const url = 'http://localhost:8080/student';
    this.fetchStudents(url)
      .then((result) => {
        console.log(result);
        this.setState({
          students: JSON.parse(result),
        });
      })
      .catch((error) => console.error(error));
  }

  fetchStudents = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange =  () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  };

  showGroupList = () => {
    this.setState({
      showGroup:true,
    })
    this.divideGroup();
  }
  
  divideGroup = () => {
    const studentNumber = this.state.students.length;
    const each = studentNumber/6;
    const more = studentNumber%6;
    const memberEach = [each,each,each,each,each,each];
    for(let i = 0; i <= more ; i++){
      memberEach[i] = each+1;
    }
    for(let j=0; j<studentNumber; j++){
      const randomId = Math.floor(Math.random()*(studentNumber)+1);
      const usedId = [];
      
      if(!usedId.find(randomId)){
        usedId.push(randomId);
      }
    }

    console.log(randomId);
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
            <Group num="Team 1" groupMember={this.state.groupOne}/>
            <Group num="Team 2" groupMember={this.state.groupTwo}/>
            <Group num="Team 3" groupMember={this.state.groupThree}/>
            <Group num="Team 4" groupMember={this.state.groupFour}/>
            <Group num="Team 5" groupMember={this.state.groupFive}/>
            <Group num="Team 6" groupMember={this.state.groupSix}/>
          </div>          
        </section>
        <section>
          <h1>学员列表</h1>
          <div className="all-student">
            <ul>
                {this.state.students.map((student) => (
                  <li>{student.id}. {student.name}</li>
                ))}             
                <input type="text" placeholder="+添加学员" />
              </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
