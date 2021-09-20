import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Comment extends Component {
    
     render() {
          return (
               <div>
                    <Panel>
                         <Panel.Heading>{this.props.comment.user}</Panel.Heading>
                         <Panel.Body>{this.props.comment.text}</Panel.Body>
                    </Panel> 
               </div>
          );
     }
}

export default Comment;