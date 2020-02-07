import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, DatePicker, Anchor, Menu, Typography, Divider } from 'antd';
import { MainLayout, ProductIntro } from '../../components'
import { basicInfoMockData } from './mockup'
const { RangePicker } = DatePicker;
const { SubMenu } = Menu;
const { Link } = Anchor;
const { Title } = Typography;

export const Detail: React.FC = () => {
  
  const paramaters = useParams() as any;

  return (
    <MainLayout
      breadcrumbItems={['首页', "旅游", "详情"]}
    >
      <div style={{marginTop: 20, background: 'white'}}>
        <Row>
          <Col span={13}>
            <ProductIntro
              title={basicInfoMockData.title}
              shortDescription={basicInfoMockData.shortDescription}
              price={basicInfoMockData.price}
              coupons={basicInfoMockData.coupons}
              points={basicInfoMockData.points}
              discount={basicInfoMockData.discount}
              rating={basicInfoMockData.rating}
              pictures={basicInfoMockData.picturesUrl}
            />
          </Col>
          <Col span={11}>
            <RangePicker 
              open 
              style={{
                marginTop: 20
              }}
            />
          </Col>
        </Row>
      </div>

      {/* 锚点菜单 */}
      <Anchor style={{marginTop: 20, marginBottom: 20}}>
        <Menu mode="horizontal">
          <Menu.Item key="1">
            <Link href="#product-feature" title="产品特色"></Link>
          </Menu.Item>
          <Menu.Item key="3"> 
            <Link href="#product-fees" title="费用"></Link>
          </Menu.Item>
          <Menu.Item key="4"> 
            <Link href="#product-notes" title="预订须知"></Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="#product-comments" title="用户评价"></Link>
          </Menu.Item>
        </Menu>
      </Anchor>  

      {/* 产品特色 */}
      <div id="product-feature" style={{background: "white", paddingTop: 20}}>
        <Divider orientation="center">
          <Title level={3} >产品特色</Title>
        </Divider>
        <div 
          dangerouslySetInnerHTML={{ __html: basicInfoMockData.features }}
          style={{margin: 50}}
        />
      </div>

      {/* 费用 */}
      <div id="product-fees" style={{background: "white", marginTop: 20, paddingTop: 20}}>
        <Divider orientation="center">
          <Title level={3} >费用</Title>
        </Divider>
        <div 
          dangerouslySetInnerHTML={{ __html: basicInfoMockData.fees }} 
          style={{margin: 50}}
        />
      </div>

      {/* 预订须知 */}
      <div id="product-notes" style={{background: "white", marginTop: 20, paddingTop: 20}}>
        <Divider orientation="center">
          <Title level={3} >预订须知</Title>
        </Divider>
        <div 
          dangerouslySetInnerHTML={{ __html: basicInfoMockData.notes }} 
          style={{margin: 50}}
        />
      </div>

      {/* 商品评价*/}
      <div id='product-comments' style={{background: "white", marginTop: 20, paddingTop: 20}}>
        <Divider orientation="center">
          <Title level={3} >用户评价</Title>
        </Divider>
      </div>

    </MainLayout>
  )
}
