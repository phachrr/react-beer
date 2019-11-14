import React from "react";
import "./App.css";

import Home from "./Home";
import Procedures from "./Procedures";
import ContactUs from "./ContactUs";
import TeethSale from "./TeethSale";

class App extends React.Component {
  state = {
    currentPage: "home"
  };

  navigateTo = (event, page) => {
    event.preventDefault();
    console.log("navigate to :", page);
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;

    let page;
    if (currentPage === "home") {
      page = <Home />;
    } else if (currentPage === "procedures") {
      page = <Procedures />;
    } else if (currentPage === "contact") {
      page = <ContactUs />;
    } else if (currentPage === "teeth") {
      page = <TeethSale />;
    }
    return (
      <div className="App" >
        <h1>Let Me Be Your Dentist . I Insist.</h1>
        <hr width="500" />
        <nav>
          <a href="" onClick={e => this.navigateTo(e, "home")}>
            Home
          </a>
          | &nbsp;
          <a href="" onClick={e => this.navigateTo(e, "procedures")}>
            Procedures
          </a>
          | &nbsp;
          <a href="" onClick={e => this.navigateTo(e, "contact")}>
            ContactUs
          </a>
          | &nbsp;
          <a href="" onClick={e => this.navigateTo(e, "teeth")}>
            TeethSale
          </a>
        </nav>
        <hr width="500" />
        {page}
      </div >
    );
  }
}
export default App;
