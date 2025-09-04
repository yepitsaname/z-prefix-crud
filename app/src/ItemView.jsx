import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { payload_UpdateItem, build_Put, fetch_UpdateItem, payload_DeleteItem, build_Delete, fetch_DeleteItem } from "../utils/forms";
import AppContext from "./AppContext";

export default function ItemView(){
  const [item, setItem] = useState({item_id: 'Loading...', name: 'Loading...', description: 'Loading...', quantity: 0});
  const [edit, setEdit] = useState(false);
  const {user} = useContext(AppContext);
  const navigation = useNavigate()

  useEffect(()=>{
    if( user == null ){
      navigation('/')
    } else {
      setEdit(false);
      let params = JSON.parse(decodeURI(window.location.search.replace('?','')));
      setItem(params);
    }
  },[])

  /**
   * Takes an event triggered by the form, converts it into JSON, and sends a submit request
   * @param {Event} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = payload_UpdateItem(event.target,item.item_id);
    const request = build_Put(payload);
    let result = await fetch_UpdateItem(request,user)
    if( result ){
      let param = {item_id: item.item_id, name: event.target[0].value, description: event.target[1].value, quantity: event.target[2].value}
      navigation('/inventory/item?' + encodeURI(JSON.stringify(param)));
    }
    // Add Failure Case Here
  }

  const handleDelete = async () => {
    const payload = payload_DeleteItem(item.item_id);
    const request = build_Delete(payload);
    let result = fetch_DeleteItem(request, user);
    if( result ){
      navigation('/inventory')
    }
  }

  return (<>
    {edit ?
      <form className='view-item' onSubmit={(event)=>{handleSubmit(event)}}>
        <div className='content'>
          <p className='id'>Item ID: {item.item_id}</p>
          <label htmlFor="name">Name</label><br/>
          <input type="text" id="name" name="name" className='name' defaultValue={item.name}/><br/>
          <label htmlFor="description">Description</label><br/>
          <textarea id="description" name="description" rows="5" cols="40" defaultValue={item.description}/><br/>
          <label htmlFor="quantity">Quantity</label><br/>
          <input type="number" id="quantity" name="quantity" className='quantity' defaultValue={item.quantity}/>
        </div>
        <div className='buttons'>
          <button type='submit'>Save</button>
          <button type='button' onClick={()=>{ setEdit(false) }}>Cancel</button>
        </div>
      </form>
      :
      <div className='view-item'>
        <div className='content'>
          <p className='id'>Item ID: {item.item_id}</p>
          <p className='name'>Name <br/>{item.name}</p>
          <p className="description">Description <br/> {item.description}</p>
          <p className='quantity'>Quantitiy: {item.quantity}</p>
        </div>
        <div className='buttons'>
          <button type='button' onClick={()=>{ setEdit(true) }}>Edit</button>
          <button type='button' onClick={()=>{ handleDelete() }}>Delete Item</button>
        </div>
      </div>
    }
  </>)
}