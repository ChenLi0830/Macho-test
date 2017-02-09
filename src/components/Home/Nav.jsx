import React, {PropTypes} from 'react';
import TweenOne from 'rc-tween-one';
import {Menu, Row, Col, Icon} from 'antd';
import {connect} from 'react-redux';
import {navActions} from '../../modules';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Item = Menu.Item;

const Header = (props) => {
  console.log("props", props);
  
  let navData = {menu1: 'PRODUCT', menu2: 'WORKS', menu3: 'TEAM', menu4: 'ABOUT'};
  const navChildren = Object.keys(navData)
      .map((key, i) => (<Item style={{borderWidth: 0}} key={i}>{navData[key]}</Item>));
  navChildren.push(<Item key={4} className={"contact-btn"}>{'CONTACT'}</Item>);
  
  navData = {...navData, menu5: "CONTACT"};
  const dropDownChildren = Object.keys(navData).map((key, i) => (
          <Item key={i}>{navData[key]}</Item>
      )
  );
  
  return (<Row>
    <TweenOne
        component="header"
        animation={{opacity: 0, type: 'from'}}
        id={props.id}
        className={props.className}
        style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}
    >
      <TweenOne
          className={`header0-logo`}
          animation={{x: -30, type: 'from', ease: 'easeOutQuad'}}
      >
        <a href="#">
          <h1>
            MACHO
          </h1>
        </a>
        {/*<img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" />*/}
      </TweenOne>
      <Col xs={{span: 0}} sm={{span: 20, offset: 4}} md={{span: 16, offset: 8}}>
        <TweenOne
            className={`header0-nav`}
            animation={{x: 30, type: 'from', ease: 'easeOutQuad'}}
        >
          <Menu
              mode="horizontal"
              style={{color: '#c1c1c1'}}
              selectedKeys={[String(props.tab)]}
              onClick={({item, key, keyPath}) => {
                props.changeTab(key)
              }}
          >
            {navChildren}
          </Menu>
        </TweenOne>
      </Col>
      
      <Col xs={{span: 6, offset: 18}} sm={{span: 0}}>
        <TweenOne
            className={`header0-nav`}
            animation={{x: 30, type: 'from', ease: 'easeOutQuad'}}
        >
          <Icon type="bars" className="header0-toggle" onClick={() => {
            props.toggle()
          }}/>
        </TweenOne>
      </Col>
      
      {
        props.showDropDown
        &&
        <Menu
            style={{width: "100%"}}
            defaultOpenKeys={['sub1']}
            mode="vertical"
            selectedKeys={[String(props.tab)]}
            onClick={({item, key, keyPath}) => {
              props.changeTab(key)
            }}
        >
          {dropDownChildren}
        </Menu>
      }
    
    </TweenOne>
  </Row>);
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
