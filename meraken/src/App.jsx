import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <header>
        <h1>Product Catalog</h1>
      </header>
      <main>
        <AppRoutes />
      </main>
    </Router>
  );
};

export default App;
