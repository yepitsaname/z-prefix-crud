import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import CreateAccount from "../components/CreateAccount";
import Login from "../components/Login";
import AppContext from "./AppContext";
import Nav from "../components/Nav";
import Inventory from "./Inventory";
import CreateItem from "../components/CreateItem";
import ItemView from "./ItemView";
import ItemViewNoAuth from "./ItemViewNoAuth";
import Home from "./Home";

export default function App() {
  const [user, setUser] = useState(null)
  const [name, setName] = useState({first: null, last: null})

  return (
    <AppContext.Provider value={{user: user, login: setUser, name: name, setName: setName}}>
      <Nav />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/item?" element={<ItemViewNoAuth />} />
        <Route path="/create-account" element={<CreateAccount/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/inventory/add-item" element={<CreateItem />}/>
        <Route path="/inventory/item?" element={<ItemView />}/>
      </Routes>
    </AppContext.Provider>
  )
}
