import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Header & Footer
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";

// Pages 
import Forside from "./components/pages/forside/Forside";
import Kontakt from "./components/pages/kontakt/Kontakt";
import OmOs from "./components/pages/om-os/OmOs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Forside} />
          <Route path="/om-os" component={OmOs} />
          <Route path="/kontakt" component={Kontakt} />
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
