import React from 'react';
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';

interface PropsType {
  data: {author: string, avatar: string, content: string, createDate: string}[]
}

const dataFormat = (data) => data.map(d => (
    {
      author: d.author,
      avatar: d.avatar,
      content: (d.content),
      createDate: (
        <Tooltip
          title={moment(d.createDate).format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>{moment(d.createDate).fromNow()}</span>
        </Tooltip>
      ),
  }
))

export const ProductComments: React.FC<PropsType> = (props) => {
  
  const data = dataFormat(props.data) as any[]

  return (
    <List
      className="comment-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <li>
          <Comment
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.createDate}
          />
        </li>
      )}
    />
  )
}
