import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./assets/GlobalStyle";
import { UserStorage } from "./UserContext";
import fontAwesome from "./assets/fontAwesome";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  fontAwesome();
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <UserStorage>
          <Header />
          <Routes />
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
export default App;
