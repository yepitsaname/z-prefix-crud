import { payload_CreateItem, build_Post, fetch_CreateItem} from "../utils/forms";

export default function CreateAccount(){
  /**
   * Takes an event triggered by the form, converts it into JSON, and sends a submit request
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = payload_CreateItem(event.target);
    const request = build_Post(payload);
    fetch_CreateItem(request);
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