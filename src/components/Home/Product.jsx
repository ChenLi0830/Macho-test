import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import {Col} from 'antd';

const Product = (props) => {
  return (
      <div
          id={props.id}
          className="content-template-wrapper2"
      >
        <OverPack
            className={`content-template content1`}
            hideProps={{img: {reverse: true}}}
            location={props.id}
        >
          <QueueAnim
              type="left"
              className={`content1-text`}
              key="text"
              leaveReverse
              ease={['easeOutCubic', 'easeInCubic']}
          >
            <h1 key="h1">
              The Macho App
            </h1>
            
            <p key="p">
              Qué es la mente de principiante? Está dejando atrás nuestras expectativas y
              ideas preconcebidas acerca de algo, y ver cosas con una mente abierta, ojos frescos,
              como un principiante. Qué es la mente de principiante? Está dejando atrás nuestras
              expectativas yideas preconcebidas acerca de algo, y ver cosas con una mente abierta,
              ojos frescos,
              como un principiante. </p>
            
            <p key="p2"> Si alguna vez has aprendido algo nuevo, puedes recordar lo que es eso:
              probablemente estás confundido, porque no sabes cómo hacer lo que estás
              aprendiendo. Si alguna vez has aprendido algo nuevo, puedes recordar lo que es eso:
              probablemente estás confundido, porque no sabes cómo hacer lo que estás
              aprendiendo. </p>
            
            <div key="btn" className="content2-div" onClick={() => props.downLoadClicked()}>
              <Col xs={24} sm={{span:16}} md={{span:14}} lg={{span:12}}>
              <div className="capitalize content2-btn">
                download the app
              </div>
              </Col>
            </div>
          </QueueAnim>
          
          <TweenOne key="img"
                    animation={{x: '+=30', opacity: 0, type: 'from'}}
                    className={`content1-img`}>
            <img width="100%"
                 src="https://s3-us-west-2.amazonaws.com/macho.test/images/iPhone_6.png"/>
          </TweenOne>
        </OverPack>
      </div> );
};

Product.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
};

Product.defaultProps = {
  className: 'content1',
};

import {connect} from 'react-redux';
import {productActions} from '../../modules';
const mapDispatchToProps = (dispatch) => {
  return {
    downLoadClicked: () => dispatch(productActions.downloadClicked()),
  }
};

export default connect(null, mapDispatchToProps)(Product);
