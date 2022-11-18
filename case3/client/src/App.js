import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteLogin from "./components/ProtectedRouteLogin";
import RegisterFacility from "./views/RegisterFacility";
import Register from "./views/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            // <ProtectedRouteLogin>
            <Login />
            // </ProtectedRouteLogin>
          }
        />
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            <Dashboard />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            // <ProtectedRoute>
            <RegisterFacility />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            // <ProtectedRoute>
            <Register />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
