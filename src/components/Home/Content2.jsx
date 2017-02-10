import React from 'react';
import {Col, Row} from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

// const Content = (props) => {
//   return (
//       <div
//           {...props}
//           className="content-template-wrapper content-half-wrapper"
//       >
//         <OverPack
//             className={`content-template content1`}
//             hideProps={{img: {reverse: true}}}
//             location={props.id}
//         >
//           <QueueAnim
//               type="left"
//               className={`content1-text`}
//               key="text"
//               leaveReverse
//               ease={['easeOutCubic', 'easeInCubic']}
//           >
//             <Col xs={{span: 10}}>
//               <h1>
//                 The Macho App
//               </h1>
//               <p>
//                 Qué es la mente de principiante? Está dejando atrás nuestras expectativas y
//                 ideas
//                 preconcebidas acerca de algo, y ver cosas con una mente abierta, ojos frescos,
//                 como un principiante. </p>  <p> Si alguna vez has aprendido algo nuevo, puedes
//               recordar lo que
//               es eso: probablemente estás confundido, porque no sabes cómo hacer lo que estás
//               aprendiendo </p>
//             </Col> </QueueAnim> <TweenOne key="img"
//                                           animation={{x: '+=30', opacity: 0, type: 'from'}}
//                                           className={`content1-img`}> <Col
//             xs={{span: 14, offset: 10}}>
//           <span>
//             <img width="100%"
//                  src="https://s3-us-west-2.amazonaws.com/macho.test/images/iPhone_6.png"/>
//           </span>
//         </Col>
//         </TweenOne> </OverPack></div> );
// };


const Content = (props) => {
  console.log("props", props);
  return (
      <div
          {...props}
          className="content-template-wrapper content-half-wrapper2"
      >
        
      <OverPack location={props.id}
                hideProps={{ img: { reverse: true } }}
                className={`content-template`}>
        {/*<Row style={{display:"flex", alignItems:"center"}}>*/}
          <Col xs={{span: 10, offset: 2}}>
            <TweenOne
                key="img"
                animation={{ x: '-=30', opacity: 0, type: 'from' }}
            >
            <h1>
              The Macho App
            </h1>
            <p>
              Qué es la mente de principiante? Está dejando atrás nuestras expectativas y ideas
              preconcebidas acerca de algo, y ver cosas con una mente abierta, ojos frescos, como
              un
              principiante.
            </p>
        
            <p>
              Si alguna vez has aprendido algo nuevo, puedes recordar lo que es eso:
              probablemente estás confundido, porque no sabes cómo hacer lo que estás aprendiendo
            </p>
            </TweenOne>
          </Col>
        
          <Col xs={{span: 10}}>
            <TweenOne
                key="text"
                animation={{ x: '+=30', opacity: 0, type: 'from', delay:'100'}}
            >
            <span>
              <img width="100%"
                 src="https://s3-us-west-2.amazonaws.com/macho.test/images/iPhone_6.png"/>
            </span>
            </TweenOne>
          </Col>
        {/*</Row>*/}
      </OverPack>
      </div>
  );
};

Content.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
};

Content.defaultProps = {
  className: 'content1',
};

export default Content;
