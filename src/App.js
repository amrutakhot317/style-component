import React from "react";
import "./App.css";
import Count from "./component/counter-Componet";
import Navbar from "./component/navbar-Component";
import Footer from "./component/footer-Component";
import Styled from "./component/Style-Component";
import ProfileSection from "./component/profileSection";
import CreateUser from "./component/CreateUser";
import { Route, Switch } from "react-router-dom";
import Confirm from "./component/Confirm";
import ActionComponent from "./component/ActionComponent";

const App = () => {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/forms" component={CreateUser} />
            <Route exact path="/counts/" component={Count} />
            <Route exact path="/styles/" component={Styled} />
            <Route exact path="/confirm/" component={Confirm} />
            <Route exact path="/sagas" component={ActionComponent} />
            <ProfileSection />
          </Switch>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
