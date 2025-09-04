import { payload_CreateUser, build_Post, fetch_CreateUser} from "../utils/forms";
import { validate } from "../utils/validation";

export default function CreateAccount(){
  /**
   * Takes an event triggered by the form, converts it into JSON, and sends a submit request
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    if(event.target[2].value != event.target[3].value){
      alert("Passwords do not match!");
      return;
    }

    const payload = payload_CreateUser(event.target);
    const request = build_Post(payload);
    fetch_CreateUser(request);
  }

  return (
    <form className="form component" onSubmit={(event)=>{handleSubmit(event)}}>
      <h3 className="header">Account Creation</h3>
      <label htmlFor="username">Username
        <span className="tooltip">help?</span>
        <span className="tooltip-text">a-z,A-Z,_ 0-9 only</span>
      </label><br/>
      <input type="text" id="username" name="username" placeholder="username" maxLength={16} onKeyUp={(e)=>{validate(e,0)}} autoComplete="off" /><br/>

      <label htmlFor="first-name">First Name
        <span className="tooltip">help?</span>
        <span className="tooltip-text">a-z,A-Z,' only; 16 characters max</span>
      </label><br/>
      <input
        type="text"
        id="first-name"
        name="first name"
        placeholder="First name..."
        maxLength={40}
        onKeyUp={(e)=>{validate(e,1)}}
        autoComplete="off"/><br/>

      <label htmlFor="last-name">Last Name
        <span className="tooltip">help?</span>
        <span className="tooltip-text">a-z,A-Z,' only; 16 characters max</span>
      </label><br/>
      <input
        type="text"
        id="last-name"
        name="last name"
        placeholder="Last name..."
        maxLength={40}
        onKeyUp={(e)=>{validate(e,2)}}
        autoComplete="off"/><br/>

      <label htmlFor="password">Password
        <span className="tooltip">help?</span>
        <span className="tooltip-text">a-z,A-Z,0-9,!,@,#,$ only; 8-16 characters</span>
      </label><br/>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="****************"
        maxLength={16}
        onKeyUp={(e)=>{validate(e,3)}}/><br/>

      <label htmlFor="confirm-password">Confirm password
        <span className="tooltip">help?</span>
        <span className="tooltip-text">a-z,A-Z,0-9,!,@,#,$ only; 8-16 characters</span>
      </label><br/>
      <input
        type="password"
        id="confirm-password"
        name="confirm password"
        placeholder="****************"
        maxLength={16}
        onKeyUp={(e)=>{validate(e,4)}}/><br/>

      <div>
        <button type="submit">Create Account</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  )
}