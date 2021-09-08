import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import AnnoncesTest from "./pages/Annonces";
import { Route } from "react-router-dom";
import AnnonceDetails from "./pages/AnnonceDetails";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={"/annonces"} exact>
        <AnnoncesTest />
      </Route>
      <Route path={"/annonces/:id"}>
        <AnnonceDetails />
      </Route>
    </div>
  );
}

export default App;
