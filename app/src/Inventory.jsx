import { useContext, useEffect } from "react";
import Item from "../components/Item";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";

export default function Inventory(){
  const {user} = useContext(AppContext);
  const navigation = useNavigate()

  useEffect(()=>{
    if( user == null ){
      navigation('/')
    } else {
      let jwt = document.cookie.split("; ").find((row) => row.startsWith("jwt_auth="));

      fetch(`http://localhost:5050/users/${user}/items`, {
        headers:{'access-control-allow-origin': 'http://localhost:5173'}, credentials: 'include'})
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
    }
  },[])

  return (
    <></>
  )
}