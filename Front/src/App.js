import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  const token = window.localStorage.getItem("token");
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate replate to="home" />}></Route>
        <Route
          exact
          path="/login"
          element={token ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          exact
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
