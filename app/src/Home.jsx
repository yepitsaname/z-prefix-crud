import { useEffect, useState } from "react";
import Item from "../components/Item";

export default function Home(){
  const [items, setItems] = useState([]);

  useEffect(()=>{

    fetch(`http://localhost:5050/items`)
    .then(res => res.json())
    .then(json => setItems(json))
    .catch(err => console.error(err))

  },[])
  return (
    <div>
      {items.map(item=><Item key={item.item_id} item={item} noAuth={true} />)}
    </div>
  )
}