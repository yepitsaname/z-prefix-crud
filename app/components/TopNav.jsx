import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../src/AppContext";

export default function TopNav(){
  const context = useContext(AppContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    context.user == null ? setLoggedIn(false) : setLoggedIn(context.user);
  },[context.user])

  return(
    <nav className="top-nav">
      <Link to="/">Home</Link>
      {loggedIn ? (<>
        <Link to={"/inventory"}>Inventory</Link>
        <Link to={"/inventory/add-item"}>Add an Item</Link>
      </>) : (<>
        <Link to="/login">Login</Link>
        <Link to="/create-account">Create Account</Link>
      </>)}
    </nav>
  )

}