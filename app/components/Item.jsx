import { useNavigate } from "react-router-dom";
import '../css/item.css';

export default function Item({item}){
  const navigator = useNavigate();
  const clickHandler = () => {
    navigator('/inventory/item?' + encodeURI(JSON.stringify(item)))
  }

/**
 * @param {string} description
 */
const trimDescription = (description) => {
  if(description.length <= 100){ return description }
  let stringArray = ['...'];
  for( let i = 97; i >= 0; i-- ){
    stringArray.unshift(description.charAt(i));
  };
  return stringArray.join("")
}

/**
 * @typedef item
 * @property {number} item_id
 * @property {number} user_id
 * @property {string} name
 * @property {string} description
 * @property {number} quantity
 */
  return (
    <div className='item' onClick={()=>{ clickHandler() }}>
      <p className='id'>{item.item_id}</p>
      <p className='name'>{item.name}</p>
      <p className="description">{trimDescription(item.description)}</p>
      <p className='quantity'>{item.quantity}</p>
    </div>
  )
}