import { useContext, useEffect, useState } from "react";
import Item from "../components/Item";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";
import { fetch_Items } from "../utils/forms";

export default function Inventory(){
  const {user, name} = useContext(AppContext);
  const navigation = useNavigate()
  const [items, setItems] = useState([]);

  useEffect(()=>{
    if( user == null ){
      navigation('/')
    } else {
      fetch_Items(setItems,user);
    }
  },[])

  return (
    <div className="component inventory">
      <h3 className="header">{name.first} Inventory</h3>
      {items.map(item=><Item key={item.item_id} item={item} />)}
    </div>
  )
}