import { payload_LoginUser, build_Post, fetch_Login } from "../utils/forms";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AppContext from "../src/AppContext";

export default function Login(){
  const {user, login} = useContext(AppContext);
  const navigation = useNavigate();

  /**
   * Takes an event triggered by the form, converts it into JSON, and sends a submit request
   * @param {Event} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = payload_LoginUser(event.target);
    const request = build_Post(payload);
    let result = await fetch_Login(request);
    console.log(result);
    if( result ){
      login(event.target[0].value);
      navigation('/inventory');
    } else { login(null) }
  }

  return (
    <form onSubmit={(event)=>{handleSubmit(event)}}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" placeholder="username" maxLength={16} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" placeholder="****************" maxLength={16} />

      <button type="submit">Login</button>
      <button type="button">Cancel</button>
    </form>
  )
}