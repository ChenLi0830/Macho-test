import React, {PropTypes} from 'react';
import {Button, Icon, Col} from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import BannerAnim, {Element} from 'rc-banner-anim';
import {Link} from 'rc-scroll-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  render() {
    const childrenData = [
      {
        children: {
          title: {children: "Sem Tortor Mollis Aenean"}, content: {
            children: 'Donec' +
            ' id elit mi non porta gravida et eget metus. Vivamus sagittis lacus vel augue laoreet' +
            ' rutrum'
          }, button: {children: 'EXPLORE'}
        }
      },
      {
        children: {
          title: {children: 'Hoy es un buen dia'}, content: {
            children: 'Donec' +
            ' id elit mi non porta gravida et eget metus. Vivamus sagittis lacus vel augue laoreet' +
            ' rutrum'
          }, button: {children: 'Learn More'}
        }
      },
    ];
    const defaultImg = [
      'https://s3-us-west-2.amazonaws.com/macho.test/images/photo-1440439307159-c3afc8a8e4ff.jpeg',
      'https://s3-us-west-2.amazonaws.com/macho.test/images/photo-1427104227401-94b390b378b0.jpeg',
    ];
    const childrenToRender = childrenData.map((item, i) => {
      const children = item.children;
      const isImg = children.title.children
          .match(/\.(gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/);
      return (<Element
          key={i}
          prefixCls="banner-user-elem"
      >
        <BgElement
            className="bg"
            key="bg"
            style={children.bg && children.bg.style || {
              backgroundImage: `url(${defaultImg[i]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
        </BgElement>
        
        <QueueAnim
            type={['bottom', 'top']} delay={200}
            className={`banner1-title`} key="text"
            style={children.wrapper && children.wrapper.style}
        >
          <Col xs={{span: 24}} sm={{span: 20, offset: 2}} md={{span: 16, offset: 4}}>
            <p className="title">
              {children.title.children}
            </p>
            
            <Col xs={{span: 24}} sm={{span: 20, offset: 2}} md={{span: 16, offset: 4}}>
              <p className="content"
                 style={children.content.style}>
                {children.content.children}
              </p>
              
              <Link to={"Content1"} toHash={false}>
                <Button
                    type="ghost"
                    key="button"
                    className="capitalize"
                    style={children.button.style}
                >
                  {children.button.children}
                </Button>
              </Link>
            </Col>
          </Col>
        </QueueAnim>
      
      </Element>);
    });
    return (
        <TweenOne animation={{opacity: 0, type: 'from'}}>
          <OverPack
              {...this.props}
              hideProps={{icon: {reverse: true}}}
          >
            <BannerAnim
                key="banner"
            >
              {childrenToRender}
            </BannerAnim>
            <TweenOne
                animation={{y: '-=20', yoyo: true, repeat: -1, duration: 1000}}
                className={`banner1-icon`}
                style={{bottom: 40}}
                key="icon"
            >
              <Icon type="down"/>
            </TweenOne>
          </OverPack>
        </TweenOne>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
};

Banner.defaultProps = {
  className: 'banner1',
};

export default Banner;
