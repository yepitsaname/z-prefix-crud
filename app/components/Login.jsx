import { payload_LoginUser, build_Post, fetch_Login } from "../utils/forms";

export default function Login(){
  /**
   * Takes an event triggered by the form, converts it into JSON, and sends a submit request
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = payload_LoginUser(event.target);
    const request = build_Post(payload);
    fetch_Login(request);
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