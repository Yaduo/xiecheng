import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { UserLayout } from '../../layouts'

export const SignIn: React.FC = () => {
  return (
    <UserLayout>
      <div>
        sign in form
      </div>
    </UserLayout>
  )
}
