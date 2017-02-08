import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data, i) => {
    const links = data.children.contentLink.children.split(/\n/).filter(item => item);
    const content = data.children.content.children.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>);
      });
    return (<li className={data.className} key={i}>
      <h2>{data.children.title.children}</h2>
      <QueueAnim component="ul" type="bottom">
        {content}
      </QueueAnim>
    </li>);
  };

  render() {
    const dataSource = [
      { children: { title: { children: '产品' }, content: { children: '产品更新记录\nAPI文档\n快速入门\n参考指南' }, contentLink: { children: '#\n#\n#\n#' } } },
      { children: { title: { children: '关于' }, content: { children: 'FAQ\n联系我们' }, contentLink: { children: '#\n#' } } },
      { children: { title: { children: '资源' }, content: { children: 'Ant Design\nAnt Design Mobile\nAnt Cool\nAntD Library' }, contentLink: { children: '#\n#\n#\n#' } } },
      { children: { title: { children: '关注' }, content: { children: 'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\n https://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\n https://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg\n https://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg' }, contentLink: { children: '#\n#\n#\n#' } } },
    ];
    const logoContent = { img: { children: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg' }, content: { children: 'A efficient motion design solutions' } };
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    return (<OverPack
      {...this.props}
      playScale={0.2}
      hideProps={{ copyright: { reverse: true } }}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse>
        <li
          key="logo"
        >
          <p className="logo" style={logoContent.img.style} >
            <img src={logoContent.img.children} width="100%" />
          </p>
          <p style={logoContent.content.style}>{logoContent.content.children}</p>
        </li>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
      >
        <span>
          Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
