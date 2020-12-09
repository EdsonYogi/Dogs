import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./UserContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserAlt,
  faSignInAlt,
  faSignOutAlt,
  faPaw,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Acoount";

function App() {
  library.add(faUserAlt, faSignInAlt, faSignOutAlt, faPaw, faSpinner);
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
