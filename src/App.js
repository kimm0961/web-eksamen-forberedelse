import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Header & Footer
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";

// Pages
import Forside from "./components/pages/forside/Forside";
import Events from "./components/pages/events/Events";
import Event from "./components/pages/events/Event";
import OmOs from "./components/pages/om-os/OmOs";
import Kontakt from "./components/pages/kontakt/Kontakt";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Forside} />
          <Route path="/events" component={Events} />
          <Route path="/om-os" component={OmOs} />
          <Route path="/kontakt" component={Kontakt} />
          <Route exact path="/:event_id" component={Event} />
          {/* <Route excat path="/opret" component={Cartoonopret} />
          <Route exact path="/ret/:cartoonData_id" component={Cartoonret} />
          <Route exact path="/slet/:cartoonData_id" component={Cartoonslet} />
          <Route exact path="/soeg/:soegeord" component={JokeSoeg} /> */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
