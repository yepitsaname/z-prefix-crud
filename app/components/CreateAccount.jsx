import { payload_CreateUser, build_Post, fetch_CreateUser} from "../utils/forms";

export default function CreateAccount(){
  /**
   * Takes an event triggered by the form, converts it into JSON, and sends a submit request
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = payload_CreateUser(event.target);
    const request = build_Post(payload);
    fetch_CreateUser(request);
  }

  return (
    <form className="component" onSubmit={(event)=>{handleSubmit(event)}}>
      <h3 className="header">Account Creation</h3>
      <label htmlFor="username">Username</label><br/>
      <input type="text" id="username" name="username" placeholder="username" maxLength={16} /><br/>

      <label htmlFor="first-name">First Name</label><br/>
      <input type="text" id="first-name" name="first name" placeholder="First name..." maxLength={40} /><br/>

      <label htmlFor="last-name">Last Name</label><br/>
      <input type="text" id="last-name" name="last name" placeholder="Last name..." maxLength={40} /><br/>

      <label htmlFor="password">Password</label><br/>
      <input type="password" id="password" name="password" placeholder="****************" maxLength={16} /><br/>

      <label htmlFor="confirm-password">Confirm password</label><br/>
      <input type="password" id="confirm-password" name="confirm password" placeholder="****************" maxLength={16} /><br/>

      <button type="submit">Create Account</button>
      <button type="button">Cancel</button>
    </form>
  )
}