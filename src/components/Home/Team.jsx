import React, {PropTypes} from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
import {Col, Row} from 'antd';

const Team = (props) => {
  let children = [];
  for (let i = 0; i < 6; i++) {
    children.push(
        <Col xs={12} sm={4} key={i} style={{lineHeight: 0}}>
          <img width="100%"
               src={`https://s3-us-west-2.amazonaws.com/macho.test/images/team${i + 1}.png`}/>
        </Col>
    );
  }
  
  
  return (
      <div
          id={props.id}
          className="content-template-wrapper"
      >
        <OverPack
            className={`content-template content3`}
            hideProps={{h1: {reverse: true}, p: {reverse: true}}}
            location={props.id}
            style={{maxWidth: "none", overflowY: "hidden"}}
        >
          <TweenOne
              key="h1"
              animation={{y: '+=0', opacity: 0, type: 'from'}}
              component="div"
          >
            <Row className="titleRow">
              <Col xs={{span: 24}} sm={{span: 8, offset: 8}} style={{fontSize: 38}}>
                <p>
                  Our Team
                </p>
              </Col>
            </Row>
            
            {children}
            
            <div className="square">
              <div className="contact">
                <div className="title">
                  About Us
                </div>
                
                <Col xs={24} sm={{span: 16, offset: 4}}>
                  <div className="content">
                    "Sin embargo, sabiendo cómo camino conduce a la manera,
                    Dudaba si alguna vez regresaría.
                    Voy a decir esto con un suspiro."
                  </div>
                </Col>
                
                <Col xs={24} sm={{span: 8, offset: 8}} md={{span: 6, offset: 9}}
                     lg={{span: 4, offset: 10}}>
                  <div className="capitalize ghost-btn">
                    contact us
                  </div>
                </Col>
              </div>
            </div>
            
            {/* It's not safe to put the API key in the source code, it is only here for the test*/}
            <div className="square">
              <iframe
                  className="google-map"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDIeri-z8T7XUyNxl6i0jkQVdUlHtNhzY4&q=Vancouver+Public+Library,Vancouver+BC">
              </iframe>
            </div>
          
          </TweenOne>
        
        </OverPack>
      </div>
  )
};

Team.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
};

Team.defaultProps = {
  className: 'content3',
};

export default Team;