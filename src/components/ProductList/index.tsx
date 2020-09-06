import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { List, Rate, Icon } from 'antd';
import image from '../../assets/images/japan-2014618_640.jpg'

interface PropsType {
  data: {id:string, title:string, shortDescription:string, longDescription:string, imageSrc:string, rating:string|number, comments:string|number, likes:string|number}[]
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} /> 
    {text}
  </span>
);

export const ProductList: React.FC<PropsType> = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {console.log(page);},
        pageSize: 3,
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <Fragment><Rate allowHalf defaultValue={+item.rating} disabled/>{item.rating}</Fragment>,
            <IconText type="like-o" text={item.comments} key="list-vertical-like-o" />,
            <IconText type="message" text={item.likes} key="list-vertical-message" />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src={image}
            />
          }
        >
          <List.Item.Meta
            title={<Link to={'/detail/'+item.id}>{item.title}</Link>}
            description={item.shortDescription}
          />
          {item.longDescription}
        </List.Item>
      )}
    />
  )
}
