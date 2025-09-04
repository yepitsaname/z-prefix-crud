import { useState, useEffect } from "react";
import '../css/itemview.css';

export default function ItemViewNoAuth(){
  const [item, setItem] = useState({item_id: 'Loading...', name: 'Loading...', description: 'Loading...', quantity: 0});

  useEffect(()=>{
    let params = JSON.parse(decodeURI(window.location.search.replace('?','')));
    setItem(params);
  },[])

  return (
    <div className='form component'>
      <div className='content'>
        <p>Item #{item.item_id} {item.name}</p>
        <p className="description">{item.description}</p>
        <p className='quantity'>In Stock: {item.quantity}</p>
      </div>
    </div>
  )
}