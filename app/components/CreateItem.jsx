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

  const handleClick = () => {
    navigation('/inventory');
  }

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
    <form className="form component" onSubmit={(event)=>{handleSubmit(event)}}>
      <h3 className="header">Add An Item</h3>
      <div className="tooltip">
        <label htmlFor="name">Name
          <span className="tooltip">help?</span>
          <span className="tooltip-text">a-z,A-Z,' only; 16 characters max</span>
        </label>
        <input type="text" id="name" name="item name" placeholder="Item name..." maxLength={16} /><br/>
      </div>

      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="item description" placeholder="Description..." maxLength={1024} /><br/>

      <label htmlFor="quantity">Quantity</label>
      <input type="number" id="quantity" name="item quantity" placeholder="Quantity..." /><br/>

      <div>
        <button type="submit">Add Item</button>
        <button type="button" onClick={()=>{handleClick()}}>Cancel</button>
      </div>
    </form>
  )
}