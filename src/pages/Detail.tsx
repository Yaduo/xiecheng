import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

export const Detail: React.FC = () => {
  const paramaters = useParams() as any;
  return (
    <div>
      <header>
        header
      </header>

      <div>
        商品简介
      </div>

      <div>
        日期选择
      </div>

      <div>
        商品详情
      </div>

      <div>
        商品评价
      </div>

      <div>
        商品评论
      </div>

      <footer>
        footer
      </footer>
    </div>
  )
}
