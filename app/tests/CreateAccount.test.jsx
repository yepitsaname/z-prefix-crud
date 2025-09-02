import { render, screen } from "@testing-library/react";
import CreateAccount from "../components/CreateAccount";

describe("Create Account Functionality", ()=>{
  describe("UI", ()=>{
    beforeEach(()=>{
      render(<CreateAccount />)
    })
    it("should have a title", ()=>{
      expect(screen.getByText('Account Creation')).toBeIntheDocument();
    })
    it("should have a username field", ()=>{
      expect(screen.getByText('Username')).toBeIntheDocument();
    })
    it("should have a first name field", ()=>{
      expect(screen.getByText('First Name')).toBeIntheDocument();
    })
    it("should have a last name field", ()=>{
      expect(screen.getByText('Last Name')).toBeIntheDocument();
    })
    it("should have two password fields", ()=>{
      expect(screen.getByText('Password')).toBeIntheDocument();
      expect(screen.getByText('Confirm password')).toBeIntheDocument();
    })
    it("should have a create account button", ()=>{
      expect(screen.getByText('Create Account')).toBeIntheDocument();
    })
    it("should have a cancel button", ()=>{
      expect(screen.getByText('Cancel')).toBeIntheDocument();
    })
  })
})