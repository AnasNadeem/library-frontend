import React from 'react';
import './App.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Application from "./Components/ApplicationCard";
import MainNavbar from "./Components/MainNavbar";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <MainNavbar />
      <Application />
    </>
  );
}

export default App;