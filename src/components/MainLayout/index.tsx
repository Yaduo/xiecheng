import React from 'react';
import logo from '../../assets/logo.svg';
import './style.less'
import { Layout, Menu, Breadcrumb, Typography, Input, Button, Dropdown, Icon } from 'antd';
const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;
const { Group } = Button;

const menu = (
  <Menu>
    <Menu.Item>中文</Menu.Item>
    <Menu.Item>英语</Menu.Item>
  </Menu>
);

interface PropsType {
  children: React.ReactNode
  breadcrumbItems?: string[]
}

export const MainLayout: React.FC<PropsType> = (props) => {
  return (
     <Layout className='main-layout'>
      <div className="header">
        <div className="menu-header" >
          <Text>让旅行更幸福</Text>
          <Dropdown.Button
            style={{marginLeft: 15}}
            overlay={menu} 
            icon={<Icon type="global" />}
          >
            Language
          </Dropdown.Button>
        </div>
        <Header className="header">
          <img src={logo} className="logo" alt="logo" />
          <Title level={3} style={{lineHeight: '64px', display: "inline"}}>慕课旅游网</Title>
          <Menu
            mode="horizontal"
            style={{ lineHeight: '64px', float:"right", marginLeft: 15 }}
          >
            <Group>
              <Button>注册</Button>
              <Button>登陆</Button>
            </Group>
          </Menu>
          <Search
            placeholder="请输入旅游目的地、主题、或关键字"
            onSearch={value => console.log(value)}
            style={{ width: 400, lineHeight: '64px', float:"right" }}
          />
        </Header>
      </div> 
      <Content>
        <Menu
          mode="horizontal"
          style={{ paddingLeft: '4%', paddingRight: '4%' }}
        >
          <Menu.Item key="1"> 旅游首页 </Menu.Item>
          <Menu.Item key="2"> 周末游 </Menu.Item>
          <Menu.Item key="3"> 跟团游 </Menu.Item>
          <Menu.Item key="4"> 自由行 </Menu.Item>
          <Menu.Item key="5"> 私家团 </Menu.Item>
          <Menu.Item key="6"> 邮轮 </Menu.Item>
          <Menu.Item key="7"> 酒店+景点 </Menu.Item>
          <Menu.Item key="8"> 当地玩乐 </Menu.Item>
          <Menu.Item key="9"> 主题游 </Menu.Item>
          <Menu.Item key="10"> 定制游 </Menu.Item>
          <Menu.Item key="11"> 游学 </Menu.Item>
          <Menu.Item key="12"> 签证 </Menu.Item>
          <Menu.Item key="13"> 企业游 </Menu.Item>
          <Menu.Item key="14"> 高端游 </Menu.Item>
          <Menu.Item key="15"> 爱玩户外 </Menu.Item>
          <Menu.Item key="16"> 保险 </Menu.Item>
        </Menu>
        <div className="page-content">
          { props.breadcrumbItems 
          ? <Breadcrumb style={{marginTop: 20}}>
              {props.breadcrumbItems.map((item, index) => 
                <Breadcrumb.Item key={`breadcrumb-item-${index}`}>{item}</Breadcrumb.Item>
              )} 
            </Breadcrumb>
          : null
          }
          { props.children }
        </div>
      </Content>
      <Footer>
        footer
      </Footer>
     </Layout>
  )
}
