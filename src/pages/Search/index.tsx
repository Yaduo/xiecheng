import React from 'react';
import { useParams } from 'react-router-dom';
import { Divider } from 'antd';
import { MainLayout, Filter, ProductList } from '../../components'
import { mockData } from './mockup'
import { Link } from "react-router-dom";

export const Search: React.FC = () => {

  const paramaters = useParams() as any;
  const { keywords } = paramaters
  
  return (
    <MainLayout
      breadcrumbItems={['首页', "搜索", keywords]}
    >
        {/* 分类 filter*/}
        <div style={{padding: 20, marginTop: 20, background: 'white'}}>
          <Filter title='出发城市' tags={["北京", "上海", "广州", "深圳"]}/>
          <Divider dashed />
          <Filter title='行程天数' tags={["2日", "3日", "4日", "5日", "6日"]}/>
          <Divider dashed />
          <Filter title='旅程类型' tags={["跟团游", "自由行", "自驾游", "高端定制"]}/>
          <Divider dashed />
          <Filter title='出发时间' tags={["春节", "清明", "劳动节"]}/>
        </div>

        {/* 产品列表 */}
        <div style={{padding: 20, marginTop: 20, background: 'white'}}>
          <ProductList data={mockData}/>
        </div>
    </MainLayout>
  )
}
