import React from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';

import Nav from './Nav';
import Banner from './Banner';
import Content1 from './Content1';
import Product from './Product';
import Works from './Works';
import Content3 from './Content3';
import Footer from './Footer';

import './less/antMotion_style.less';

export default class Home extends React.Component {
  componentDidMount() {
  }

  render() {
    const children = [
      <Nav id="Nav" key="Nav"/>,
      <Banner id="Content0" key="Content0"/>,
      <Product id="Content1" key="Content1"/>,
      <Works id="Content2" key="Content2"/>,
      <Content3 id="Content3" key="Content3"/>,
      <Content3 id="Content4" key="Content4"/>,
      <Footer id="Footer" key="Footer"/>,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
