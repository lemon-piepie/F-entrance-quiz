import React, { Component } from 'react';
import '../style/group.css';

class Group extends Component {
    
    inputGroupName = (event) => {
        this.setState({
            groupName:event.target.value,
        });
    };
      
    render() {
      return (
        <div className="Group">
            <input type="text" value={this.props.num} onChange={this.inputGroupName}/>
          <div className="team-content">
              <ul>
                {this.props.groupMember.map((student) => (
                  <li>{student.id}. {student.name}</li>
                ))}
              </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Group;