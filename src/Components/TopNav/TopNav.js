import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import './TopNav.css';
import {Link} from 'react-router-dom';

class TopNav extends Component {
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
      const VehicleSelections = this.props.vehicledata.map((item)=>{
          return <DropdownItem key={item.detailKey}>
             <Link to={{pathname:"/detail/"+item.detailKey}}>
             {item.model}
             </Link>
          </DropdownItem>
      },this)
    //   map will operate agiants right thing
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Flying Car Shop</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/"><i className="fas fa-home"></i>Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <i className="fas fa-space-shuttle"></i>Flying Cars
                </DropdownToggle>
                <DropdownMenu right>
                {VehicleSelections}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/find-a-dealer"><i className="fas fa-map-marker-alt"></i>Find A Dealer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/build-and-price"><i className="fas fa-cog"></i>Build and Price</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;