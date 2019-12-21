import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

export const Detail: React.FC = () => {
  const paramaters = useParams() as any;
  return (
    <div>
      <header>
        header
      </header>

      <footer>
        footer
      </footer>
    </div>
  )
}
