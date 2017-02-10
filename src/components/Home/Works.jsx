import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import {Col} from 'antd';

const Works = (props) => {
  
  return (
      <div
          {...props}
          className="content-template-wrapper"
      >
        <OverPack
            className={`content-template`}
            hideProps={{ h1: { reverse: true }, p: { reverse: true } }}
            location={props.id}
        >
          <TweenOne
              key="h1"
              animation={{ y: '+=30', opacity: 0, type: 'from' }}
              component="div"
          >
            <Col xs={{span: 8, offset: 8}}>
              Our Works
            </Col>
            
            <Col xs={{span: 8}}>
              52 works in total
            </Col>
              
          </TweenOne>
        
        </OverPack>
      </div>
  )
};

Works.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
};

// Works.defaultProps = {
//   className: 'content2',
// };

export default Works;