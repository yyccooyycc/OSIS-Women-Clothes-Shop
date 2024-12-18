import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import store from './store/store';
import Home from "./components/Home";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Header from "./components/Header";

import "./styles/App.scss";
import './i18n';
import Footer from "./components/Footer";
import ProductGrid from "./components/Products";


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const searchResults = useSelector((state) => state.search.results);

  return (
    <div className="app-container">
      <div>
        <Router>
          <Header />
          <div className="content">
            <Routes>
              <Route
                path="/login"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/best-sellers" element={<ProductGrid selectedCategory="best-sellers" />} />
              <Route path="/tops" element={<ProductGrid selectedCategory="tops" />} />
              <Route path="/t-shirts" element={<ProductGrid selectedCategory="t-shirts" />} />
              <Route path="/skirts" element={<ProductGrid selectedCategory="skirts" />} />
              <Route path="/dresses" element={<ProductGrid selectedCategory="dresses" />} />
              <Route path="/pants" element={<ProductGrid selectedCategory="pants" />} />
              <Route path="/jackets" element={<ProductGrid selectedCategory="jackets" />} />
              <Route path="/coats" element={<ProductGrid selectedCategory="coats" />} />
              <Route path="/search-results" element={<ProductGrid searchResults={searchResults} />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/"
                element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
              />
            </Routes>
          </div>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

function Root(){
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )


}

export default Root;
