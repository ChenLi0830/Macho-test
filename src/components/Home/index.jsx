import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Product from './Product';
import Works from './Works';
import Team from './Team';
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
      <Team id="Content3" key="Content3"/>,
      <Footer id="Content4" key="Content4"/>,
    ];
    return (
        <div className="templates-wrapper">
          {children}
        </div>
    );
  }
}
