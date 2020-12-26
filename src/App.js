import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './containers/Home/Home';
import AdminLogin from './containers/AdminLogin/AdminLogin';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login/superadmin" component={AdminLogin} />
    </Switch>
  );
}

export default App;
