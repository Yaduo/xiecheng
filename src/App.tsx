import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Search, Detail, SignIn, Register } from './pages'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:keywords?" component={Search} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Register" component={Register} />
        {/* <Route path="/" component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
