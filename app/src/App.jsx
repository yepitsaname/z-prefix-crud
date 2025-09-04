import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import CreateAccount from "../components/CreateAccount";
import Login from "../components/Login";
import AppContext from "./AppContext";
import TopNav from "../components/TopNav";
import Inventory from "./Inventory";
import CreateItem from "../components/CreateItem";

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <AppContext.Provider value={{user: user, login: setUser}}>
      <TopNav />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/create-account" element={<CreateAccount/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/inventory/add-item" element={<CreateItem />}/>
      </Routes>
    </AppContext.Provider>
  )
}
