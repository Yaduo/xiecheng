import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Typography, Divider } from 'antd';

import img0 from '../../assets/images/castle-1736779_640.jpg'
import img1 from '../../assets/images/louvre-102840_640.jpg'
import img2 from '../../assets/images/japan-2014618_640.jpg'
import img3 from '../../assets/images/ocean-829715_640.jpg'
import img4 from '../../assets/images/osaka-2159435_640.jpg'
import img5 from '../../assets/images/andromeda-galaxy-755442_640.jpg'
import img6 from '../../assets/images/milky-way-1023340_640.jpg'
import img7 from '../../assets/images/paris-843229_640.jpg'
import img8 from '../../assets/images/osaka-castle-1398116_640.jpg'

const { Title, Text } = Typography;


interface PropsType {
  title: string,
  sideImage: string,
  products: {id, src: string, title: string, price: string}[]
}

export const ProductCollection: React.FC<PropsType> = (props) => {
  return (
    <Fragment>
      <Divider orientation="left">
        <Title level={3}>{props.title}</Title>
      </Divider>
      <Row>
        <Col span={4}>
          <img
            alt='detail' 
            src={props.sideImage} 
            style={{ width: 200, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
          />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <Link to={'detail/'+props.products[0].id}>
                <img
                  alt='detail' 
                  src={img0} 
                  style={{ 
                    width: '90%', 
                    height: 320, 
                    display: 'block', 
                    marginLeft: 'auto', 
                    marginRight: 'auto' 
                  }} 
                />
                <div style={{marginLeft: 25, marginRight: 25}}>
                  <Text type="secondary">{props.products[0].title}</Text>
                  <Text type="danger">$ {props.products[0].price} 起</Text>
                </div>
              </Link>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <Link to={'detail/'+props.products[1].id}>
                    <img
                      alt='detail' 
                      src={img1} 
                      style={{width: 260, height: 150}} 
                    />
                    <div>
                      <Text type="secondary">{props.products[1].title}</Text>
                      <Text type="danger">$ {props.products[1].price} 起</Text>
                    </div>
                  </Link>
                </Col>
                <Col span={12}>
                  <Link to={'detail/'+props.products[2].id}>
                    <img
                      alt='detail' 
                      src={img2} 
                      style={{width: 260, height: 150, marginLeft: 20}} 
                    />
                    <div>
                      <Text type="secondary">{props.products[2].title}</Text>
                      <Text type="danger">$ {props.products[2].price} 起</Text>
                    </div>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Link to={'detail/'+props.products[3].id}>
                    <img 
                      alt='detail'
                      src={img3} 
                      style={{width: 260, height: 150, marginTop: 20}} 
                    />
                    <div>
                      <Text type="secondary">{props.products[3].title}</Text>
                      <Text type="danger">$ {props.products[3].price} 起</Text>
                    </div>
                  </Link>
                </Col>
                <Col span={12}>
                  <Link to={'detail/'+props.products[4].id}>
                    <img 
                      alt='detail'
                      src={img4} 
                      style={{width: 260, height: 150, marginTop: 20, marginLeft: 20}} 
                    />
                    <div>
                      <Text type="secondary">{props.products[4].title}</Text>
                      <Text type="danger">$ {props.products[4].price} 起</Text>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{marginTop: 20}}>
            <Col span={6}>
              <Link to={'detail/'+props.products[5].id}>
                <img
                  alt='detail' 
                  src={img5} 
                  style={{width: 260, height: 150}} 
                />
                <div>
                  <Text type="secondary">{props.products[5].title}</Text>
                  <Text type="danger">$ {props.products[5].price} 起</Text>
                </div>
              </Link>
            </Col>
            <Col span={6}>
              <Link to={'detail/'+props.products[6].id}>
                <img
                  alt='detail' 
                  src={img6} 
                  style={{width: 260, height: 150}} 
                />
                <div>
                  <Text type="secondary">{props.products[6].title}</Text>
                  <Text type="danger">$ {props.products[6].price} 起</Text>
                </div>
              </Link>
            </Col>
            <Col span={6}>
              <Link to={'detail/'+props.products[7].id}>
                <img
                  alt='detail' 
                  src={img7} 
                  style={{width: 260, height: 150}} 
                />
                <div>
                  <Text type="secondary">{props.products[7].title}</Text>
                  <Text type="danger">$ {props.products[7].price} 起</Text>
                </div>
              </Link>
            </Col>
            <Col span={6}>
              <Link to={'detail/'+props.products[8].id}>
                <img 
                  alt='detail'
                  src={img8} 
                  style={{width: 260, height: 150}} 
                />
                <div>
                  <Text type="secondary">{props.products[8].title}</Text>
                  <Text type="danger">$ {props.products[8].price} 起</Text>
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}
