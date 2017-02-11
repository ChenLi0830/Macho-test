import React, {PropTypes} from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
import {Col, Row} from 'antd';

const Works = (props) => {
  let works = [],
      numbers = ["one", "two", "three", "four", "five", "six"];
  
  for (let i = 0; i < 6; i++) {
    works[i] = {
      image: `https://s3-us-west-2.amazonaws.com/macho.test/images/${i+1}.png`,
      number: numbers[i],
    }
  }
  
  const children = works.map((work, i) =>
      <Col xs={24} sm={12} md={8}
           className="image-container" key={i}
           onMouseEnter={()=>{props.onHover(i)}}
           onMouseLeave={()=>{props.onLeave()}}
      >
          <img src={work.image}/>
          <div className="after">
            <div className="title capitalize">
              {`Project ${work.number}`}
            </div>
            <div className="content">
              <p>
                Esto es algo de contenido. Puede ser largo y abarcar varias líneas.
                Esto es algo de contenido. Puede ser largo y abarcar varias líneas.
              </p>
            </div>
          </div>
      </Col>
  );
  
  return (
      <div
          id={props.id}
          className="content-template-wrapper"
      >
        <OverPack
            className={`content-template content2`}
            hideProps={{h1: {reverse: true}, p: {reverse: true}}}
            location={props.id}
            style={{maxWidth: "none"}}
        >
          <TweenOne
              key="h1"
              animation={{opacity: 0, type: 'from'}}
              component="div"
          >
            <Row className="titleRow">
              <Col xs={{span: 24}} sm={{span: 8, offset: 8}} style={{fontSize: 42, color: "#333"}}>
                <p>
                  Our Works
                </p>
              </Col>
              
              <Col xs={{span: 0}} sm={{span: 8}} style={{fontSize: 16}}>
                <p>
                  52 works in total
                </p>
              </Col>
            </Row>
  
            {children}
            
          </TweenOne>
        
        </OverPack>
      </div>
  )
};

Works.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  hoveredWork: PropTypes.number,
  onHover: PropTypes.func,
  onLeave: PropTypes.func,
};

Works.defaultProps = {
  className: 'content2',
};

import {connect} from 'react-redux';
import {workActions} from '../../modules';

const mapStateToProps = (state) => {
  return {
    hoveredWork: state.work.hovered,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHover: (number) => dispatch(workActions.imageHovered(number)),
    onLeave: () => dispatch(workActions.imageUnhovered()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Works);