import React, { Component } from 'react';
import Comment from './Comment/Comment';
import { Button } from 'react-bootstrap';
import Form from '../Form/Form';


class Comments extends Component {
     static defaultProps = {
          comments: []
     };

     state ={
          isOpen: false
     };

     toggleOpen = () => {
          this.setState( ( prevState ) => {
              return { isOpen: !prevState.isOpen };
          } );
      };

      getBody = () => {
          if (this.state.isOpen) {
               return (
                   <div>
                        {this.props.comments.map(comment =>
                            <div key={comment.id}>
                                <Comment 
                                    comment={comment}/>
                            </div>)}
                        <Form />   
                    </div>  
               )
          }
      };


     render() {

          if (!this.props.comments.length) return null
         
          return (
               <div> 
                    <p><Button bsStyle={ this.state.isOpen ? 'danger' : 'success'}
                              onClick={this.toggleOpen}>{this.state.isOpen ? 'hide comments' : 'show comments'}
                         </Button>
                    </p>
                    {this.getBody()}
                    
               </div>
               )
          }        
};

export default Comments;