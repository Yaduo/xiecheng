import React, { useState, useEffect } from 'react';
import "./Home.less"
import { Link } from "react-router-dom";
import { Row, Col, Carousel, Spin } from 'antd';
import { Sider, ProductCollection, BusinessPartners } from '../../components'
import { MainLayout } from '../../layouts'
import { partnerList } from './mockup';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';

export const Home: React.FC = () => {

  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchTouristRoutes = async () => {
      const response = await fetch('https://localhost:3001/api/touristRoutes');
      const result = await response.text()
      setProductList(JSON. parse(result))
      setLoading(false);
    };

    fetchTouristRoutes();
  }, []);

  if(loading) {
    return <Spin />
  }

  return (
    <MainLayout
      breadcrumbItems={['首页', "旅游"]}
    >
      <div className="home-page">
        {/* 幻灯片产品推荐 */}
        <Row style={{marginTop: 20}}>
          <Col span={6}>
            <Sider />
          </Col>
          <Col span={18}>
            <Carousel autoplay>
              <div>
                <Link to={'detail/1'}><h3>1</h3></Link>
              </div>
              <div>
                <Link to={'detail/1'}><h3>2</h3></Link>
              </div>
              <div>
                <Link to={'detail/1'}><h3>3</h3></Link>
              </div>
              <div>
                <Link to={'detail/1'}><h3>4</h3></Link>
              </div>
            </Carousel>
          </Col>
        </Row>

        {/* 幻灯片产品推荐 */}
        <div style={{marginTop: 30}}>
          <ProductCollection 
            title='爆款推荐'
            sideImage={sideImage}
            products={productList}
          />
        </div>
        <div style={{marginTop: 40}}>
          <ProductCollection 
            title='新品上市'
            sideImage={sideImage2}
            products={productList}
          />
        </div>
        <div style={{marginTop: 40}}>
          <ProductCollection 
            title='国内游推荐'
            sideImage={sideImage3}
            products={productList}
          />
        </div>

        {/* 企业合作 */}
        <div style={{marginTop: 40}}>
          <BusinessPartners 
            partners={partnerList}
          />
        </div>
     </div>
    </MainLayout>
  )
}
