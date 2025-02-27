import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";


const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Main setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;