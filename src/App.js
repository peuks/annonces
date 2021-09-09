import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import AnnoncesTest from "./pages/Annonces";
import { Route } from "react-router-dom";
import AnnonceDetails from "./pages/AnnonceDetails";
import ValidationCandidature from "./components/ValidationCandidature";
import ConnectionCandidature from "./components/ConnectionCandidature";
import ContactProp from "./components/ContactProp";

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
      <Route path={"/annonces/:id/candidature"}>
        <ValidationCandidature />
      </Route>
      <Route path={"/annonces/:id/connectetoi"}>
        <ConnectionCandidature/>
      </Route>
      <Route path={"/annonces/:id/contact"}>
        <ContactProp/>
      </Route>
    </div>
  );
}

export default App;
