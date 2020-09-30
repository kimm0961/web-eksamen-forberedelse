import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Context
import AuthDataProvider from "./components/context/AuthDataContext";

// Header & Footer
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/header/Navbar";

// Pages
import Forside from "./components/pages/forside/ForsidePage";
import Events from "./components/pages/events/EventsPage";
import EventFilter from "./components/pages/events/EventFilter";
import Event from "./components/pages/events/Event";
import OmOs from "./components/pages/om-os/OmOsPage";
import Kontakt from "./components/pages/kontakt/KontaktPage";
import EventSoeg from "./components/pages/events/EventSoeg";

// Admin
import Login from "./components/login/Login";
import Admin from "./components/ADMIN/Admin";

import { AuthDataContext } from "./components/context/AuthDataContext";
import Opret from "./components/ADMIN/Opret";


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
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Forside} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/admin" component={Admin} />
              <Route path="/events" component={Events} />
              <Route path="/events-filter" component={EventFilter} />
              <Route path="/om-os" component={OmOs} />
              <Route path="/kontakt" component={Kontakt} />
              <Route exact path="/:event_id" component={Event} />
              <Route exact path="/soeg/:soegeord" component={EventSoeg} />
              <PrivateRoute excat path="/admin/opret" component={Opret} />
          {/* <PrivateRoute exact path="/ret/:gaadeData_id" component={GaadeRet} />
          <PrivateRoute exact path="/slet/:gaadeData_id" component={GaadeSlet} /> */}
            </Switch>
          </main>
          <Footer />
        </div>
      </AuthDataProvider>
    </BrowserRouter>
  );
}

export default App;
