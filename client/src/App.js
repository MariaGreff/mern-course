import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import 'materialize-css';
import {useRoutes} from './routes';
import { useAuth } from './hooks/auth.hook';

function App() {
  const {token, login, logout, userId } = useAuth();
  const routes = useRoutes(false);
  return (
    <Router>
      <div className="container">
        {routes}
      </div>
    </Router>
  );
}

export default App;
