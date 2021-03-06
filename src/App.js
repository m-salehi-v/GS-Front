import React, { useEffect } from 'react';
import { Switch, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from './store/actions';
import Home from './containers/Home/Home';
import AdminLogin from './containers/AdminLogin/AdminLogin';
import SuperAdminPanel from './containers/SuperAdminPanel/SuperAdminPanel';
import UserAdminList from './containers/SuperAdminPanel/UserAdminList/UserAdminList';
import QAdminPanel from './containers/QAdminPanel/QAdminPanel';
import Questions from './containers/Questions/Questions';
import CreateQuestion from './containers/Questions/CreateQuestion';
import EditQuestion from './containers/Questions/EditQuestion';
import ScoreBoard from './containers/ScoreBoard/ScoreBoard';
import About from './containers/About/About';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('theme') === 'DARK'){
      dispatch(actions.switchTheme());  
    }
    dispatch(actions.autoLogin());
  }, [])

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login/admin" component={AdminLogin} />
      <Route path="/panel/superadmin" component={SuperAdminPanel} />
      <Route path="/panel/questionadmin" component={QAdminPanel} />
      <Route path="/list/questions" component={Questions} />
      <Route path="/question/create" component={CreateQuestion} />
      <Route path="/question/edit" component={EditQuestion} />
      <Route path="/list/superadmin/:dataType?" component ={UserAdminList} />
      <Route path="/scoreboard" component={ScoreBoard} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;
