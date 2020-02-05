import React from 'react';
import "./Home.less"
import { Row, Col, Carousel } from 'antd';
import { MainLayout, Sider, ProductCollection } from '../../components'

import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { productList1, productList2, productList3 } from './mockup';

export const Home: React.FC = () => {
  return (
    <MainLayout
      breadcrumbItems={['首页', "旅游", "国内游"]}
    >
      <div className="home-page">

        <Row style={{marginTop: 20}}>
          <Col span={6}>
            <Sider />
          </Col>
          <Col span={18}>
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Col>
        </Row>

        <div style={{marginTop: 30}}>
          <ProductCollection 
            title='爆款推荐'
            sideImage={sideImage}
            products={productList1}
          />
        </div>

        <div style={{marginTop: 40}}>
          <ProductCollection 
            title='新品上市'
            sideImage={sideImage2}
            products={productList2}
          />
        </div>

        <div style={{marginTop: 40}}>
          <ProductCollection 
            title='国内游推荐'
            sideImage={sideImage3}
            products={productList3}
          />
        </div>

        <div>
          合作企业
        </div>
     </div>
    </MainLayout>
  )
}
