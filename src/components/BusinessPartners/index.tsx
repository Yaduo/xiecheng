import React, {Fragment} from 'react';
import { Row, Col, Typography, Divider } from 'antd';

const { Title } = Typography;

interface PropsType {
  partners: {src: string, title: string}[]
}

export const BusinessPartners: React.FC<PropsType> = (props) => {
  return (
    <Fragment>
      <Divider orientation="left">
        <Title level={3}>合作企业</Title>
      </Divider>
      <Row>
        {props.partners.map((p, index) => 
          <Col span={6} key={"bussiness-partner-"+index}>
            <img 
              alt='bussiness-partner'
              src={p.src} 
              style={{ width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
            />
          </Col>
        )}
      </Row>
    </Fragment>
  )
}
