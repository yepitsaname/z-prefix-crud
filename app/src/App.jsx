import { Routes, Route, Link } from "react-router-dom";

import CreateAccount from "../components/CreateAccount";
import Login from "../components/Login";

export default function App() {

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/create-account">Create Account</Link>

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/create-account" element={<CreateAccount/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}
