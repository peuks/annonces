import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import AnnoncesTest from "./pages/Annonces";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/annonces/:id", "/annonces"]}>
        <AnnoncesTest />
      </Route>
    </div>
  );
}

export default App;
