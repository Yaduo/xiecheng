import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { Home, Search, Detail, SignIn, Register  } from './pages'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/SignIn" component={Detail} />
        <Route path="/Register" component={Detail} />
        {/* <Route path="/" component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
