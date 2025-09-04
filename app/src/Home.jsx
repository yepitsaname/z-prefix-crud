import { useEffect, useState } from "react";
import Item from "../components/Item";

export default function Home(){
  const [items, setItems] = useState([]);

  useEffect(()=>{

    fetch(`http://localhost:5050/items`)
    .then(res => {
      if(res.status != 200){ throw new Error(res.statusText)};
      return res.json();
    })
    .then(json => {
      if(!json || !Array.isArray(json) || json?.length == 0 ){ throw new Error('Bad response or no data') }
      setItems(json);
    })
    .catch(err => console.error(err))

  },[])

  return (
    <div className="component">
      <h3 className="header">All Items</h3>
      {items.map(item=><Item key={item.item_id} item={item} noAuth={true} />)}
    </div>
  )
}