import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

export const Register: React.FC = () => {
  const paramaters = useParams() as any;
  return (
    <div>
      <div>
        register form
      </div>
    </div>
  )
}
