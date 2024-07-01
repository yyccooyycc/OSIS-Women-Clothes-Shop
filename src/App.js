import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import {store} from './store';
import Home from "./components/Home";
import Login from "./components/Login";
// import Menu from "./components/Menu";
// import Cart from "./components/Cart";

import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { logout } from ".authSlice";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Router>
      <div>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute
            path="/home"
            component={Home}
            isAuthenticated={isAuthenticated}
          />
          <Redirect from="/" to={isAuthenticated ? "/home" : "/login"} />
        </Switch>
      </div>
    </Router>
  );
}

function Root(){
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )

    // <div>
    //   <h1>Shopping Cart</h1>
    //   <div className="container">
    //     <div className="menu">
    //       <Menu />
    //     </div>
    //     <div className="cart">
    //       <Cart />
    //     </div>
    //   </div>
    //   <footer></footer>
    // </div>

}

export default Root;
