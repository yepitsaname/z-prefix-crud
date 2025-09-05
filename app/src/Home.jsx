import { useEffect, useState } from "react";
import Item from "../components/Item";
import { fetch_Items } from "../utils/forms";

export default function Home(){
  const [items, setItems] = useState([]);

  useEffect(()=>{

    fetch_Items((json)=>{
      if(!json || !Array.isArray(json) || json?.length == 0 ){ throw new Error('Bad response or no data') }
      setItems(json);
    })
  },[])

  return (
    <div className="component inventory">
      <h3 className="header">All Items</h3>
      {items.map(item=><Item key={item.item_id} item={item} noAuth={true} />)}
    </div>
  )
}