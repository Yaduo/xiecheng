import React from 'react';
import './MainLayout.less'
import { Layout, Breadcrumb } from 'antd';
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const { Content } = Layout

interface PropsType {
  children: React.ReactNode
  breadcrumbItems?: string[]
}

export const MainLayout: React.FC<PropsType> = (props) => {
  return (
     <Layout className='main-layout'>
      <Header />
      <Content>
        <div className="page-content">
          { props.breadcrumbItems 
          ? <Breadcrumb style={{marginTop: 20}}>
              {props.breadcrumbItems.map((item, index) => 
                <Breadcrumb.Item key={`breadcrumb-item-${index}`}>{item}</Breadcrumb.Item>
              )} 
            </Breadcrumb>
          : null
          }
          { props.children }
        </div>
      </Content>
      <Footer />
     </Layout>
  )
}
