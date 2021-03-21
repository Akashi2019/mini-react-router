import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';
import _404Page from './pages/_404Page';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from './react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">商品</Link>
        <Switch>
          <Route
            path="/"
            exact
            // children={() => {
            //   return <div>children</div>;
            // }}
            component={HomePage}
          />
          <Route path="/product/:xx" exact component={ProductPage} />
          <Route path="/user" exact component={UserPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
