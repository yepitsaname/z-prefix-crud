export default function CreateAccount(){

  return (
    <form>
      <h2>Account Creation</h2>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" placeholder="username" maxLength={16} />

      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" name="first name" placeholder="First name..." maxLength={40} />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" name="last name" placeholder="Last name..." maxLength={40} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" placeholder="****************" maxLength={16} />

      <label htmlFor="confirm-password">Confirm password</label>
      <input type="password" id="confirm-password" name="confirm password" placeholder="****************" maxLength={16} />

      <button type="submit">Create Account</button>
      <button type="button">Cancel</button>
    </form>
  )
}