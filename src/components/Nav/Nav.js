import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, NavLink} from 'reactstrap';
  import { Link } from "react-router-dom";
  import './Nav.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="light" light expand="md" className='navabr container-fluid'>
          <NavbarBrand tag={Link}  to="/">Quotes App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar className="d-flex justify-content-end">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link}  to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link}  to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link}  to="/favourite">Favourites</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}