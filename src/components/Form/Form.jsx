import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Jumbotron, Button } from 'react-bootstrap';

class Form extends Component {

     state = {
          user: '',
          text: ''
     }

     limits = {
          user: {
               min: 5,
               max: 15
          },
          text: {
               min: 20,
               max: 50
          }
     }

     
     handleChange = type => ev => {
          const { value } = ev.target
          this.setState({
               [type]: value
          })
     }

     getValidationState = (type) => {
          const length = this.state[type].length;
          if (length > this.limits[type].min && length < this.limits[type].min ) return 'success';
          else if (length < this.limits[type].min) return 'warning';
          else if (length > this.limits[type].max) return 'error';
          return null;
     }
     
     render() {
          return (
               <Jumbotron>
                    <h3>Please leave your comment <span style={{
                         color: '#FF0000',
                         fontSize: '1.5rem'
                    }}>Under Construction</span></h3>
                    <form>
                         <FormGroup
                              controlId="formUser"
                              bsSize="sm"
                              validationState={this.getValidationState('user')}
                         >
                              <ControlLabel>Name</ControlLabel>
                              <FormControl
                                   type="text"
                                   value={this.state.user}
                                   placeholder="Enter your comment"
                                   onChange={this.handleChange('user')}
                              />
                              <FormControl.Feedback />
                         </FormGroup>
                         <FormGroup
                              controlId="formComment"
                              bsSize="lg"
                              validationState={this.getValidationState('text')}
                         >
                              <ControlLabel>Comment</ControlLabel>
                              <FormControl
                                   type="text"
                                   value={this.state.text}
                                   placeholder="Enter your comment"
                                   onChange={this.handleChange('text')}
                              />
                              <FormControl.Feedback />
                         </FormGroup>
                         <Button type="submit">Submit</Button>
                    </form>  
                </Jumbotron>
          );
     }
}



export default Form;