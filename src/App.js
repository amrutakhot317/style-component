import React from "react";
import "./App.css";
import Count from "./component/counter-Componet";
import FormRedux from "./component/formWithRedux";
import Navbar from "./component/navbar-Component";
import Footer from "./component/footer-Component";
import Styled from "./component/Style-Component";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/forms/" component={FormRedux} />
            <Route exact path="/counts/" component={Count} />
            <Route exact path="/styles/" component={Styled} />
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
