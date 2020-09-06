import React, {useEffect, useState} from 'react';
import { Row, Col, DatePicker, Anchor, Menu, Typography, Divider, Spin } from 'antd';
import { useParams } from "react-router-dom";
import { ProductIntro, ProductComments } from '../../components'
import { MainLayout } from '../../layouts'
import { commentMockData } from './mockup'
import image0 from '../../assets/images/louvre-102840_640.jpg'
import image1 from '../../assets/images/japan-2014618_640.jpg'
import image2 from '../../assets/images/ocean-829715_640.jpg'
import image3 from '../../assets/images/osaka-2159435_640.jpg'

const { RangePicker } = DatePicker;
const { Link } = Anchor;
const { Title } = Typography;

export const Detail: React.FC = () => {

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({} as any);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(`https://localhost:3001/api/touristRoutes/${id}`);
      const result = await response.text()
      setProduct(JSON. parse(result))
      setLoading(false);
    };

    fetchData();
  }, []);


  if(loading) {
    return <Spin />
  }

  return (
    <MainLayout
      breadcrumbItems={['首页', "旅游", "详情"]}
    >
      {/* 产品简介 与 日期选择 */}
      <div style={{marginTop: 20, background: 'white'}}>
        <Row>
          <Col span={13}>
            <ProductIntro
              title={product.title}
              shortDescription={product.description}
              price={product.originalPrice}
              coupons={product.coupons}
              points={product.points}
              discount={product.price}
              rating={product.rating}
              pictures={[image0, image1, image2, image3]}
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
          dangerouslySetInnerHTML={{ __html: product.features }}
          style={{margin: 50}}
        />
      </div>

      {/* 费用 */}
      <div id="product-fees" style={{background: "white", marginTop: 20, paddingTop: 20}}>
        <Divider orientation="center">
          <Title level={3} >费用</Title>
        </Divider>
        <div 
          dangerouslySetInnerHTML={{ __html: product.fees }} 
          style={{margin: 50}}
        />
      </div>

      {/* 预订须知 */}
      <div id="product-notes" style={{background: "white", marginTop: 20, paddingTop: 20}}>
        <Divider orientation="center">
          <Title level={3} >预订须知</Title>
        </Divider>
        <div 
          dangerouslySetInnerHTML={{ __html: product.notes }} 
          style={{margin: 50}}
        />
      </div>

      {/* 商品评价*/}
      <div id='product-comments' style={{background: "white", marginTop: 20, paddingTop: 20, paddingBottom: 20}}>
        <Divider orientation="center">
          <Title level={3} >用户评价</Title>
        </Divider>
        <div style={{margin: 40}}>
          <ProductComments data={commentMockData}/>
        </div>
      </div>

    </MainLayout>
  )
}
