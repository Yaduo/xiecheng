import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

export const SignIn: React.FC = () => {
  const paramaters = useParams() as any;
  return (
    <div>
      <div>
        sign in form
      </div>
    </div>
  )
}
