import React, { Component } from 'react';
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



class TopbarComponent extends Component {
  
  

  render() {
    return (
        <div>
            {/*<Button onClick={this.handleClick} active={this.state.isToggleOn} bsStyle="warning">
        {this.props.basic.isOpen ? 'Open' : 'Closed'}
      </Button>*/}
         
            <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Cingo</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Requests</NavItem>
      <NavItem eventKey={2} href="#">Companies</NavItem>
        <NavItem eventKey={2} href="#">Settings</NavItem>
    </Nav>
         <Nav pullRight>
        <NavItem eventKey={1} href="#">User Details</NavItem>
        <NavItem eventKey={2} href="#">End Session</NavItem>
      </Nav>
  </Navbar>
           
 
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

export default connect(mapStateToProps, mapDispatchToProps)(TopbarComponent);