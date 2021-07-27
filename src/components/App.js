import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Badges from "../pages/Badges.js";
import BadgeNew from "../pages/BadgeNew.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/badges" component={Badges} />
        <Route path="/badges/new" component={BadgeNew}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
