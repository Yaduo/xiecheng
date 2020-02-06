import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, DatePicker } from 'antd';
import { MainLayout, ProductIntro } from '../../components'
import { basicInfoMockData } from './mockup'
const { RangePicker } = DatePicker;

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

      <div>
        日期选择
      </div>

      <div>
        商品详情
      </div>

      <div>
        商品评价
      </div>

      <div>
        商品评论
      </div>
    </MainLayout>
    
  )
}
