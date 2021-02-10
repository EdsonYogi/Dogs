import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import LoginForm from "./pages/Login/LoginForm";
import ForgotPassword from "./pages/Login/ForgotPassword";
import ResetPassword from "./pages/Login/ResetPassword";
import Register from "./pages/Login/Register";
import Account from "./pages/Account";
import MyAccount from "./pages/Account/MyAccount";
import Statistics from "./pages/Account/Statistics";
import PostYourPhoto from "./pages/Account/PostYourPhoto";
import Photo from "./pages/Photo/";
import NotFound from "./components/NotFound";

const PrivateRoute = ({ path, element }) => {
  const { login } = useContext(UserContext);
  if (login === true) {
    return <Route path={path} element={element} />;
  } else if (login === false) {
    return <Navigate to="/login" />;
  }
};

const routes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile/:user" element={<Profile />} />
      <Route path="/login" element={<Login />}>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
      <Route path="/photo/:id" element={<Photo />} />
      <Route path="*" element={<NotFound />} />
      <PrivateRoute path="/account" element={<Account />}>
        <Route path="/" element={<MyAccount />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/postYourPhoto" element={<PostYourPhoto />} />
        <Route path="/*" element={<NotFound />} />
      </PrivateRoute>
    </Routes>
  );
};

export default routes;
