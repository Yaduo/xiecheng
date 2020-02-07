import React from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '../../components'

export const Search: React.FC = () => {

  const paramaters = useParams() as any;
  const { keywords } = paramaters
  
  return (
    <MainLayout
      breadcrumbItems={['首页', "搜索", keywords]}
    >
        {/* 分类 filter*/}
        <div>
          分类 filter
        </div>

        {/* 产品列表 */}
        <div>
          产品列表
        </div>
    </MainLayout>
  )
}
