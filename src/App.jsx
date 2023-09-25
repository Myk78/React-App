import { Component } from "react";
import Navbar from "./NavBar";
import MainContent from "./MainContent";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MainContent />
      </>
    );
  }
}
