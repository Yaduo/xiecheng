import React from 'react';
import { Row, Col, Typography, Descriptions, Rate } from 'antd';
const { Title, Text } = Typography;

interface PropsType {
  title: string,
  shortDescription: string,
  price: string | number,
  coupons: string,
  points: string,
  discount: string,
  rating: string | number,
  pictures: string[]
}

export const ProductIntro: React.FC<PropsType> = (props) => {
  
  return (
    <div style={{padding: 20}}>
      <Title level={4}>{props.title}</Title>
      <Text>{props.shortDescription}</Text>
      <Descriptions 
        bordered 
        size='small' 
        style={{ 
          marginTop: 10,
          marginBottom: 10,
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Descriptions.Item label="价格">
          <Text type="danger">¥<span style={{fontSize:24}}>{props.price}</span>/人起</Text>
        </Descriptions.Item>
        <Descriptions.Item label="优惠活动">{props.coupons}</Descriptions.Item>
        <Descriptions.Item label="积分">{props.points}</Descriptions.Item>
        <Descriptions.Item label="折扣">{props.discount}</Descriptions.Item>
        <Descriptions.Item label="评价">
          {/* 字符串->数字的转换可以使用 parseInt 或者 parseFloat, 但是太麻烦了 */}
          {/* Typescript 可以使用 + 或 Number() 来做字符串->数字的转换 */}
          <Rate allowHalf defaultValue={+props.rating} />
          <Text strong>{props.rating}</Text>
        </Descriptions.Item>
      </Descriptions>
      <Row>
        {props.pictures.map(pic =>
          <Col span='6' key={'pic'}>
            <img alt='product' src={pic} style={{ width: '90%', height: 100 }} />
          </Col>
        )}
      </Row>
    </div>
  )
}
