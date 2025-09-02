import { describe, expect, it } from "vitest";
import { payload_CreateUser, build_Post } from "../utils/forms";

describe("Utility: Forms Functions", ()=>{
  describe("Function: payload_CreateUser", ()=>{
    const data = [{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}];
    const result = payload_CreateUser(data);

    it("should return a correctly formatted payload object", ()=>{
      expect(typeof result == "object").toBe(true);
      expect(Object.keys(result).length).toBe(4);
    })
  })

  describe("Function: build_Post", ()=>{
    it("should return a correctly build request object")
    expect(typeof build_Post() == "object").toBe(true);
    expect(Object.keys(build_Post()).length).toBe(3);
  })
})