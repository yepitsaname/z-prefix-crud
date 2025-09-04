import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import CreateAccount from "../components/CreateAccount";
import Login from "../components/Login";
import AppContext from "./AppContext";
import TopNav from "../components/TopNav";
import Inventory from "./Inventory";
import CreateItem from "../components/CreateItem";
import ItemView from "./ItemView";

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
        <Route path="/inventory/item?" element={<ItemView />}/>
      </Routes>
    </AppContext.Provider>
  )
}
