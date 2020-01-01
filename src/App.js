import React from "react";
import { Container } from "react-bootstrap";
import HeaderNavbar from "./containers/HeaderNavbar";
import FilterableFontTable from "./containers/FilterableFontTable";
import Footer from "./containers/Footer";

function App() {
  return (
    <div>
      <Container>
        <HeaderNavbar />
        <FilterableFontTable />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
