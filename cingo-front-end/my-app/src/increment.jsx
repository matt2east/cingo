import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as basicActionCreators from './actions/basic';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';




class IncrementComponent extends Component {   

constructor(props) {
    super(props);
    this.state = {message: [],                
                 }; 
    this.handleSubmit = this.handleSubmit.bind(this);
}
    handleSubmit(event) {
       
        var chat = [this.input.value];
        event.preventDefault();
        var testVar = (this.state.message.concat(chat));
        var newArr = this.state.message.push(testVar);
        this.setState({
            message: newArr
        })
         
        var newInput = {};
        var inputValue = ReactDOM.findDOMNode(this.userEntry).value;
        if (inputValue.length > 0){
            ReactDOM.findDOMNode(this.userEntry).value = '';
            newInput.userEntry = inputValue;
            
        }
    };

  render() {
      
      
    return (
        <div>
            <div id="surround">
                <div className="infobar">
            
                </div>
                
                <Well bsSize="large" id="well">
                  
                    <div className="chatbox">
                        
                       
                   
                        <div className="arrow_box">yo</div>
                        <div className="arrow_box">I have a question about Cingo.</div>
                        <div className="arrow_box">Sure. What is your question?</div>
                        <div className="arrow_box">Why is Cingo so awesome?</div>
                        <div className="arrow_box">This is a chat message.</div>
                        <div className="arrow_box">This is a reply.</div>
                        <div className="arrow_box">This is a chat message.</div>
                        <div className="arrow_box">This is a reply.</div>
                        <div className="arrow_box">This is a chat message.</div>
                        <div className="arrow_box">This is a reply.</div>
                        <div className={this.state.addclass}>{this.state.message}</div>
                     
                    </div>
                </Well>
                    
                    
                     <Form horizontal onSubmit={this.handleSubmit}>
                         <FormGroup controlId="formHorizontalEmail">
                             <Col componentClass={ControlLabel} sm={1}>
                                 Chat with Cingo
                             </Col>
                             <Col sm={11}>
                                 <FormControl type="text" ref={ref => this.userEntry = ref} placeholder="Enter Note" inputRef={(ref) => {this.input = ref}}>
                                    
                               
                                </FormControl>
                             </Col>
                        </FormGroup></Form>
                    <div className="brand">Powered by Cingo</div>
               
            </div>
 </div>
    );
  }
}


// This is the redux section of the web app, you can ignore this for now.
const mapStateToProps = (state) => ({
  basic  : state.basic,
});

const mapDispatchToProps = (dispatch) => ({
  basicActions : bindActionCreators(basicActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncrementComponent);
