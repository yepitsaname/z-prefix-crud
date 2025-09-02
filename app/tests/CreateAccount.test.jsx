import { render, screen } from "@testing-library/react";
import CreateAccount from "../components/CreateAccount";

describe("Create Account Functionality", ()=>{
  describe("UI", ()=>{
    beforeEach(()=>{
      render(<CreateAccount />)
    })
    it("should have a title", ()=>{
      expect(screen.getByText('Account Creation')).toBeInTheDocument();
    })
    it("should have a username field", ()=>{
      expect(screen.getByText('Username')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    })
    it("should have a first name field", ()=>{
      expect(screen.getByText('First Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('First name...')).toBeInTheDocument();
    })
    it("should have a last name field", ()=>{
      expect(screen.getByText('Last Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Last name...')).toBeInTheDocument();
    })
    it("should have two password fields", ()=>{
      expect(screen.getByText('Password')).toBeInTheDocument();
      expect(screen.getByText('Confirm password')).toBeInTheDocument();
      expect(screen.getAllByPlaceholderText('****************').length).toBe(2);
    })
    it("should have a create account button", ()=>{
      expect(screen.getByText('Create Account')).toBeInTheDocument();
    })
    it("should have a cancel button", ()=>{
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    })
  })
})