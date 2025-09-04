import { payload_CreateItem, build_Post, fetch_CreateItem} from "../utils/forms";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AppContext from "../src/AppContext";

export default function CreateAccount(){
  const {user} = useContext(AppContext)
  const navigation = useNavigate()

  useEffect(()=>{
    if( user == null ){
      navigation('/')
    }
  },[])

  /**
   * Takes an event triggered by the form, converts it into JSON, and sends a submit request
   * @param {Event} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = payload_CreateItem(event.target);
    const request = build_Post(payload);
    let result = await fetch_CreateItem(request,user)
    if( result ){ navigation('/inventory') }
    // Add Failure Case Here
  }

  return (
    <form onSubmit={(event)=>{handleSubmit(event)}}>
      <h2>Add An Item</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="item name" placeholder="Item name..." maxLength={16} />

      <label htmlFor="description">First Name</label>
      <input type="text" id="description" name="item description" placeholder="Description..." maxLength={1024} />

      <label htmlFor="quantity">Last Name</label>
      <input type="text" id="quantity" name="item quantity" placeholder="Quantity..." />

      <button type="submit">Add Item</button>
      <button type="button">Cancel</button>
    </form>
  )
}