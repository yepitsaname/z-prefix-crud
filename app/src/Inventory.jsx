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
      fetch(`http://localhost:5050/users/${user}/items`,{headers:{withCredentials: true}})
      .then(res => console.log(res))
    }
  },[])

  return (
    <></>
  )
}