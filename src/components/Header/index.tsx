import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.less'
import { useHistory, Link } from 'react-router-dom';
import { Layout, Menu, Typography, Input, Button, Dropdown, Icon } from 'antd';
const { Title, Text } = Typography;
const { Search } = Input;
const { Group } = Button;

const menu = (
  <Menu>
    <Menu.Item>中文</Menu.Item>
    <Menu.Item>英语</Menu.Item>
  </Menu>
);

export const Header: React.FC = (props) => {

  const history = useHistory();

  const onSearch = (keywords) => {
    history.push('/search/'+keywords);
  }

  return (
    <div className='header'>
      <div className="top-header" >
        <div style={{float: 'right'}}>
          <Text>让旅行更幸福</Text>
          <Dropdown.Button
            style={{marginLeft: 15}}
            overlay={menu} 
            icon={<Icon type="global" />}
          >
            Language
          </Dropdown.Button>
        </div>
      </div>
      <Layout.Header className="main-header">
        <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
        <Link to="/"><Title level={3} style={{lineHeight: '64px', display: "inline"}}>慕课旅游网</Title></Link>
        <Menu
          mode="horizontal"
          style={{ lineHeight: '64px', float:"right", marginLeft: 15 }}
        >
          <Group>
            <Button><Link to="/Register">注册</Link></Button>
            <Button><Link to="/SignIn">登陆</Link></Button>
          </Group>
        </Menu>
        <Search
          placeholder="请输入旅游目的地、主题、或关键字"
          onSearch={(keywords)=>onSearch(keywords)}
          style={{ width: 400, lineHeight: '64px', float:"right" }}
        />
      </Layout.Header>
      <div className='menu-header'>
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
      </div>
    </div>  
  )
}
