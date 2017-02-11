import React, {PropTypes} from 'react';
import TweenOne from 'rc-tween-one';
import {Menu, Row, Col, Icon} from 'antd';
import {connect} from 'react-redux';
import {navActions} from '../../modules';
import {Link} from 'rc-scroll-anim';

const Item = Menu.Item;

const Nav = (props) => {
  let navData = {menu1: 'PRODUCT', menu2: 'WORKS', menu3: 'TEAM', menu4: 'ABOUT'};
  const navChildren = Object.keys(navData)
      .map((key, i) => (<Item style={{borderWidth: 0}} key={i}>
        <Link key={i} to={`Content${i + 1}`} toHash={false}>
          {navData[key]}
        </Link>
      </Item>));
  navChildren.push(<Item key={4} className={"contact-btn"}>{'CONTACT'}</Item>);
  
  const dropDownChildren = Object.keys(navData).map((key, i) => (
          <Item key={i}>
            <Link key={i} to={`Content${i + 1}`} toHash={false}>
              {navData[key]}
            </Link>
          </Item>
      )
  );
  dropDownChildren.push(<Item key={4}>{'CONTACT'}</Item>);
  
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

Nav.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  tab: PropTypes.any,
  showDropDown: PropTypes.bool,
  toggle: PropTypes.func,
  changeTab: PropTypes.func,
};

Nav.defaultProps = {
  className: 'header0',
};

// Container
const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
