import { render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { describe, it, vi } from "vitest";

global.fetch = vi.fn();

describe("Create Account Functionality", ()=>{
  describe("UI", ()=>{
    beforeEach(()=>{
      render(<Login />)
    })
    it("should have a username field", ()=>{
      expect(screen.getByText('Username')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    })
    it("should have a password field", ()=>{
      expect(screen.getByText('Password')).toBeInTheDocument();
      expect(screen.getAllByPlaceholderText('****************').length).toBe(1);
    })
    it("should have a login button", ()=>{
      expect(screen.getByText('Login')).toBeInTheDocument();
    })
    it("should have a cancel button", ()=>{
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    })
  })
  describe("Functionality", ()=> {
    it("", ()=>{})
  })
})