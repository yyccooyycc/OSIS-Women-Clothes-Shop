import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import store from './store/store';
import Home from "./components/Home";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { logout } from "./store/authSlice";
import Navbar from "./components/Navbar";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Router>
      <Navbar />
      <div>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home /></ProtectedRoute>}
          />
          <Route
            path="/menu"
            element={<ProtectedRoute isAuthenticated={isAuthenticated}><Menu /></ProtectedRoute>}
          />
          <Route
            path="/cart"
            element={<ProtectedRoute isAuthenticated={isAuthenticated}><Cart /></ProtectedRoute>}
          />
          <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} 
          /> 
        </Routes>
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
