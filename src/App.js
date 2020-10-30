import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Context
import AuthDataProvider from "./components/context/AuthDataContext";

// Header & Footer
import Footer from "./components/layout/footer/Footer";
// import Navbar from "./components/layout/header/Navbar";
import Navbar from "./components/layout/header/Navbar2";
// import NavbarScroll from "./components/layout/header/NavbarScroll";

// Pages
import Forside from "./components/pages/forside/ForsidePage";
import EventsPage from "./components/pages/events/EventsPage";
import EventFilter from "./components/pages/events/EventsPageFilter";
import EventsPagePagination from "./components/pages/events/pagination/EventsPagePagination";
import Slider from "./components/shared/Slider";
import Event from "./components/pages/events/Event";
import OmOs from "./components/pages/om-os/OmOsPage";
import SponsorerPage from "./components/pages/sponsorer/SponsorerPage";
import Kontakt from "./components/pages/kontakt/KontaktPage";
import EventSoeg from "./components/pages/events/EventSoeg";
// Not Found
import NotFound from "./components/pages/error/NotFound";

// ADMIN
import Login from "./components/login/Login";
import Admin from "./components/ADMIN/Admin";
import Opret from "./components/ADMIN/Opret";
import Ret from "./components/ADMIN/Ret";
import Slet from "./components/ADMIN/Slet";

import { AuthDataContext } from "./components/context/AuthDataContext";







const PrivateRoute = ({ component, ...options }) => {
  const { loggedIn } = useContext(AuthDataContext);
  console.log("privateroute: loggedIn", loggedIn);

  const finalComponent = loggedIn ? component : Login;
  return <Route {...options} component={finalComponent} />;
};

function App() {
  return (
    <BrowserRouter>
      <AuthDataProvider>
        <div className="App">
          <header>
            {/* <NavbarScroll /> */}
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Forside} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/admin" component={Admin} />
              <Route exact path="/events" component={EventsPage} />
              <Route exact path="/events-filter" component={EventFilter} />
              <Route exact path="/events-pagination" component={EventsPagePagination} />
              <Route exact path="/slider" component={Slider} />
              <Route exact path="/om-os" component={OmOs} />
              <Route exact path="/sponsorer" component={SponsorerPage} />
              <Route exact path="/kontakt" component={Kontakt} />
              <Route exact path="/:event_id" component={Event} />
              <Route exact path="/soeg/:soegeord" component={EventSoeg} />
              <PrivateRoute excat path="/admin/opret" component={Opret} />
              <PrivateRoute path="/admin/ret/:event_id" component={Ret} />
              <PrivateRoute exact path="/slet/:event_id" component={Slet} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </AuthDataProvider>
    </BrowserRouter>
  );
}

export default App;
