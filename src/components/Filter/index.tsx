import React, { Fragment } from 'react';
import { FilterTag } from '../FilterTag'
import { Typography, Divider } from 'antd';
const { Text } = Typography;

interface PropsType {
  title: string,
  tags: string[]
}

export const Filter: React.FC<PropsType> = (props) => {
  return (
    <div>
      <Text style={{marginRight: 40, fontSize: 14}}>{props.title} : </Text>
      {props.tags.map((t, index) => {
        if(index===props.tags.length-1)
          return (<FilterTag onCheckChange={(c) => {console.log(c)}}>{t}</FilterTag>)
        return (
          <Fragment>
            <FilterTag onCheckChange={(c) => {console.log(c)}}>{t}</FilterTag>
            <Divider type="vertical" />
          </Fragment>
        )
      })}
    </div>
  )
}
