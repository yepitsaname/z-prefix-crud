import { useState, useEffect } from "react";

export default function ItemViewNoAuth(){
  const [item, setItem] = useState({item_id: 'Loading...', name: 'Loading...', description: 'Loading...', quantity: 0});

  useEffect(()=>{
    let params = JSON.parse(decodeURI(window.location.search.replace('?','')));
    setItem(params);
  },[])

  return (
    <div className='form component'>
      <div className='content'>
        <p className='id'>Item ID: {item.item_id}</p>
        <p className='name'>Name <br/>{item.name}</p>
        <p className="description">Description <br/> {item.description}</p>
        <p className='quantity'>Quantitiy: {item.quantity}</p>
      </div>
    </div>
  )
}