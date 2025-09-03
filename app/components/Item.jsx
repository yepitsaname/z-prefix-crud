import '../css/item.css';

export default function Item({item}){
/**
 * @typedef item
 * @property {number} item_id
 * @property {number} user_id
 * @property {string} name
 * @property {string} description
 * @property {number} quantity
 */
  return (
    <div className='item'>
      <p className='id'>{item.item_id}</p>
      <p className='name'>{item.name}</p>
      <p className="description">{item.description}</p>
      <p className='quantity'>{item.quantity}</p>
    </div>
  )
}