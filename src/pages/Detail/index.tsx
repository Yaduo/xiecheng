import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col  } from 'antd';
import { MainLayout, ProductIntro } from '../../components'
import { basicInfoMockData } from './mockup'

export const Detail: React.FC = () => {
  
  const paramaters = useParams() as any;

  return (
    <MainLayout
      breadcrumbItems={['首页', "旅游", "详情"]}
    >
      <div style={{marginTop: 20, background: 'white'}}>
        <Row>
          <Col span={14}>
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
          <Col span={10}>
            
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
