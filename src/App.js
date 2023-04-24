import React, { lazy, Suspense } from "react";

import LoadingComponent from "./Component/Loader/LoadingComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./ShareModule/PrivateRoute";
const HomePage = lazy(() => import("./Component/LandingPage/Homepage"));
const ProductPage = lazy(()=> import("./ShareModule/ProductPage"))
const AllProduct = lazy(()=>import("./Component/AllProduct/AllProduct"))
const Cart = lazy(()=>import("./Component/Cart/Cart"))
function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/product_Page"
              element={
                <PrivateRoute>
                  <ProductPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/product_List"
              element={
                <PrivateRoute>
                  <AllProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
