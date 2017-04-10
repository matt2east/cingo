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

class IncrementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.basic.isOpen) {
      this.props.basicActions.closeButton()
    } else {
      this.props.basicActions.openButton()
    }
  }

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
        <NavItem eventKey={2} href="settings">Settings</NavItem>

        {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>*/}
    </Nav>
         <Nav pullRight>
        <NavItem eventKey={1} href="#">User Details</NavItem>
        <NavItem eventKey={2} href="#">End Session</NavItem>
      </Nav>
  </Navbar>
            <div>
                <div className="infobar">
                    <span className="inforight">some info</span>
                    <span className="infoleft">some info</span>
                </div>
                <Well bsSize="large">
                    <div className="scroll">
                        <div className="message">How may I help you?</div>
                        <div className="message">I have a question about Cingo.</div>
                        <div className="message">Sure. What is your question?</div>
                        <div className="message">Why is Cingo so awesome?</div>
                        <div className="message">This is a chat message.</div>
                        <div className="message">This is a reply.</div>
                        <div className="message">Yes.</div>
                        <div className="message">No.</div>
                    </div>
                    <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Chat with Cingo
      </Col>
      <Col sm={10}>
        <FormControl type="input" placeholder="Input message" />
      </Col>
    </FormGroup>




  </Form>
                    <div className="brand">Powered by Cingo</div>
                </Well>
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
