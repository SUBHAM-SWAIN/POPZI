import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";



export default function App() {
  return (
    <AuthProvider>
      <Router>
       
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
