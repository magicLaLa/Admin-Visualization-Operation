import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter, Link } from 'dva/router';
import { config } from '@/routes';
import './index.scss';

const { menuGlobal } = config;
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

interface PageState {
  collapsed: boolean;
}

const menuContent = menuGlobal.map((item) => {
  if (item.childRoutes && item.childRoutes.length > 0) {
    return <SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
      {item.childRoutes.map((subitem) => {
        return <Menu.Item key={subitem.id}>
            <Link to={subitem.path}>{subitem.title}</Link>
          </Menu.Item>;
      })}
    </SubMenu>;
  } else {
    return <Menu.Item key={item.id}>
      <Icon type={item.icon} />
      <Link className='link-box' to={item.path!}>{item.title}</Link>
    </Menu.Item>;
  }
});

class Index extends React.Component<any, PageState> {
  public state = {
    collapsed: false
  }

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  public render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Sider
          className='layout-sider'
          breakpoint='lg'
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['a']}>
            {menuContent}
          </Menu>
        </Sider>
        <Layout className={collapsed ? 'layout-main-apesd' : 'layout-main'}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className='trigger'
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Index);
