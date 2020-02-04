import React from 'react';
import "./Home.less"
import { Row, Col, Carousel } from 'antd';
import { MainLayout, Sider } from '../components'

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
        <div>
          爆款推荐
        </div>
        <div>
          新品上市
        </div>
        <div>
          国内游推荐
        </div>
        <div>
          合作企业
        </div>
     </div>
    </MainLayout>
  )
}
