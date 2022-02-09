import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  const user = true;
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          exact
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
