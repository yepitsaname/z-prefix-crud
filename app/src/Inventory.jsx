import { useContext, useEffect, useState } from "react";
import Item from "../components/Item";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";

export default function Inventory(){
  const {user} = useContext(AppContext);
  const navigation = useNavigate()
  const [items, setItems] = useState([]);

  useEffect(()=>{
    if( user == null ){
      navigation('/')
    } else {
      fetch(`http://localhost:5050/users/${user}/items`, {
        headers:{'access-control-allow-origin': 'http://localhost:5173'}, credentials: 'include'})
      .then(res => res.json())
      .then(json => setItems(json))
      .catch(err => console.log(err))
    }
  },[])

  return (
    <>
      {items.map(item=><Item key={item.item_id} item={item} />)}
    </>
  )
}