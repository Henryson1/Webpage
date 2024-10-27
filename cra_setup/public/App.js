import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";
import Charles from "./components/Charles";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";


const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "product":
        return <Product />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Charles setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
