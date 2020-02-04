import React from 'react';
import "./Home.less"
import { MainLayout } from '../components'

export const Home: React.FC = () => {
  return (
    <MainLayout
      breadcrumbItems={['首页', "旅游", "国内游"]}
    >
      <div className="home-page">
        <div>
        幻灯片
        </div>
        <div>
          爆款推荐
        </div>
        <div>
          新品上市
        </div>
        <div>
          国内游推荐
        </div>
        <div>
          合作企业
        </div>
     </div>
    </MainLayout>
  )
}
