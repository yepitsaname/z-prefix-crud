import { payload_LoginUser, build_Post, fetch_Login, build_Get, fetch_Account } from "../utils/forms";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../src/AppContext";

export default function Login(){
  const {login, setName} = useContext(AppContext);
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
    if( result ){
      let user = await fetch_Account(build_Get(),event.target[0].value)
      login(event.target[0].value);
      setName({first: user.first_name, last: user.last_name})
      navigation('/inventory');
    } else { login(null) }
  }

  return (
    <form className="form component" onSubmit={(event)=>{handleSubmit(event)}}>
      <label htmlFor="username">Username</label><br/>
      <input type="text" id="username" name="username" placeholder="username" maxLength={16} /><br/>

      <label htmlFor="password">Password</label><br/>
      <input type="password" id="password" name="password" placeholder="****************" maxLength={16} /><br/>

      <button type="submit">Login</button>
      <button type="button">Cancel</button>
    </form>
  )
}