import React from "react";
// import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Context
import AuthDataProvider from "./components/context/AuthDataContext";

// Header & Footer
import Footer from "./components/layout/footer/Footer";
import NavbarScroll from "./components/layout/header/NavbarScroll";

// Pages
import MainPage from "./components/pages/MainPage";
import Product from "./components/pages/products/Product";
import ProductSearch from "./components/pages/products/ProductSearch";
// Not Found
import NotFound from "./components/pages/error/NotFound";

// ADMIN
import Login from "./components/login/Login";
import Admin from "./components/ADMIN/Admin";
// Admin products
import CreateProduct from "./components/ADMIN/products/CreateProduct";
import UpdateProduct from "./components/ADMIN/products/UpdateProduct";
import DeleteProduct from "./components/ADMIN/products/DeleteProduct";


// Admin slider
import CreateSlider from "./components/ADMIN/slider/CreateSlider";

// Admin contact


// import { AuthDataContext } from "./components/context/AuthDataContext";







// const PrivateRoute = ({ component, ...options }) => {
//   const { loggedIn } = useContext(AuthDataContext);
//   console.log("privateroute: loggedIn", loggedIn);

//   const finalComponent = loggedIn ? component : Login;
//   return <Route {...options} component={finalComponent} />;
// };

function App() {
  return (
    <BrowserRouter>
      <AuthDataProvider>
        <div className="App">
          <header>
            <NavbarScroll />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/admin" component={Admin} />
              <Route excat path="/admin/create" component={CreateProduct} />
              <Route component={NotFound} />
              <Route exact path="/search/:searchWord" component={ProductSearch} />
              <Route excat path="/admin/update/:product_id" component={UpdateProduct} />
              <Route exact path="/admin/delete/:product_id" component={DeleteProduct} />
              <Route excat path="/admin/slider/create" component={CreateSlider} />
              <Route exact path="/:product_id" component={Product} />
              {/* <PrivateRoute exact path="/admin" component={Admin} />
              <Route exact path="/events-filter" component={EventFilter} />
              <Route exact path="/events-pagination" component={EventsPagePagination} />
              <Route exact path="/slider" component={Slider} />
              <Route exact path="/sponsorer" component={SponsorerPage} />
              <PrivateRoute excat path="/admin/opret" component={Opret} />
              <PrivateRoute path="/admin/ret/:event_id" component={Ret} />
              <PrivateRoute exact path="/slet/:event_id" component={Slet} />
              <Route component={NotFound} /> */}
            </Switch>
          </main>
          <Footer />
        </div>
      </AuthDataProvider>
    </BrowserRouter>
  );
}

export default App;
