import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Row, Col} from 'antd';

const Footer = (props) => {
  const footerContent = ["Product", "Works", "Team", "About", "Contact Us"];
  const children = footerContent.map((content, i) => (
      <Col xs={12} sm={4} key={i}>
        {content}
      </Col>
  ));
  const socials = [
    "https://s3-us-west-2.amazonaws.com/macho.test/images/facebook.png",
    "https://s3-us-west-2.amazonaws.com/macho.test/images/twitter.png",
    "https://s3-us-west-2.amazonaws.com/macho.test/images/google.png",
  ];
  const socialChildren = socials.map((img, i) => (
      <Col xs={12} sm={4} key={i}>
        <img src={img} className="social-img"/>
      </Col>
  ));
  
  return (
      <OverPack
          id={props.id}
          className="footer1"
          playScale={0.2}
          hideProps={{copyright: {reverse: true}}}>
        <Row>
          <Col xs={{span: 24}} sm={{span: 20, offset: 2}} className="logo">
            <div className="capitalize">Macho</div>
          </Col>
        </Row>
        
        <Row>
          <Col xs={{span: 24}} sm={{span: 10, offset: 2}} className="content">
            {children}
          </Col>
          <Col xs={{span: 24}} sm={{span: 6, offset: 6}} md={{span: 4, offset: 8}}
               className="content">
            {socialChildren}
          </Col>
        </Row>
      </OverPack>
  )
};

export default Footer;
