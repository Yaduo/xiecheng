import React from 'react';
import logo from '../assets/logo.svg';
import { DatePicker } from 'antd';

export const Home: React.FC = () => {
  return (
   <div className="home-page">
      
      <DatePicker />
      
      <header>
        header
      </header>

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

      <footer>
        footer
      </footer>
    </div>
  )
}
