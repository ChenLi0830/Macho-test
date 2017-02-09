import React, {PropTypes} from 'react';
import TweenOne from 'rc-tween-one';
import {Menu, Col, Icon} from 'antd';
import {connect} from 'react-redux';
import {navActions} from '../../modules';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Collapse } from 'antd';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const Item = Menu.Item;

const Header = (props) => {
  console.log("props", props);
  
  let navData = {menu1: 'PRODUCT', menu2: 'WORKS', menu3: 'TEAM', menu4: 'ABOUT'};
  const navChildren = Object.keys(navData)
      .map((key, i) => (<Item key={i}>{navData[key]}</Item>));
  navChildren.push(<Item key={4} className={"contact-btn"}>{'CONTACT'}</Item>);
  
  navData = {...navData, menu5: "CONTACT"};
  const dropDownChildren = Object.keys(navData).map((key, i) => (
      <Item key={i}>{navData[key]}</Item>
      )
  );
  
  return   <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
  
  // return (<TweenOne
  //     component="header"
  //     animation={{opacity: 0, type: 'from'}}
  //     id={props.id}
  //     className={props.className}
  //     style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}
  // >
  //   <TweenOne
  //       className={`header0-logo`}
  //       animation={{x: -30, type: 'from', ease: 'easeOutQuad'}}
  //   >
  //     <h1>
  //       MACHO
  //     </h1>
  //     {/*<img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" />*/}
  //   </TweenOne>
  //   <Col xs={0} sm={20} md={16}>
  //     <TweenOne
  //         className={`header0-nav`}
  //         animation={{x: 30, type: 'from', ease: 'easeOutQuad'}}
  //     >
  //       <Menu
  //           mode="horizontal"
  //           style={{color: '#c1c1c1'}}
  //           selectedKeys={[String(props.tab)]}
  //           onClick = {({item, key, keyPath})=>{props.changeTab(key)}}
  //       >
  //         {navChildren}
  //       </Menu>
  //     </TweenOne>
  //   </Col>
  //
  //   <Col xs={{span: 6, offset: 18}} sm={{span: 0}}>
  //     <TweenOne
  //         className={`header0-nav`}
  //         animation={{x: 30, type: 'from', ease: 'easeOutQuad'}}
  //     >
  //       <Icon type="bars" style={{fontSize: 20, cursor: "pointer"}} onClick={() => {
  //         props.toggle()
  //       }}/>
  //     </TweenOne>
  //   </Col>
  //
  //   {
  //     props.showDropDown
  //     &&
  //     <div>
  //       <Menu
  //           style={{width: "100%", display: "block"}}
  //           defaultOpenKeys={['sub1']}
  //           mode="vertical"
  //           selectedKeys={[String(props.tab)]}
  //           onClick = {({item, key, keyPath})=>{props.changeTab(key)}}
  //       >
  //         {dropDownChildren}
  //       </Menu>
  //     </div>
  //   }
  //
  // </TweenOne>);
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

// Container
const mapStateToProps = (state) => {
  // console.log("state", state);
  return {
    tab: state.nav.tab,
    showDropDown: state.nav.showDropDown,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => {
      dispatch(navActions.navToggleMenu())
    },
    changeTab: (tab) => {
      dispatch(navActions.navChangeTab(tab))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
