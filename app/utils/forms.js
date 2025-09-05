const URL = 'http://127.0.0.1:5050'

/**
 * Takes event target data and transforms it into a useable payload
 * @param {Event.target} data
 * @returns a create user object in JSON
 */
export function payload_CreateUser(data){
  return {
    "first_name": data[1].value,
    "last_name": data[2].value,
    "username": data[0].value,
    "password": data[4].value
  }
}

/**
 * Takes event target data and transforms it into a useable payload
 * @param {Event.target} data
 * @returns a user login object in JSON
 */
export function payload_LoginUser(data){
  return {
    "username": data[0].value,
    "password": data[1].value
  }
}

/**
 * Takes event target data and transforms it into a useable payload
 * @param {Event.target} data
 * @returns a create user object in JSON
 */
export function payload_CreateItem(data){
  return {
    "name": data[0].value,
    "description": data[1].value,
    "quantity": data[2].value
  }
}

/**
 * Takes event target data and transforms it into a useable payload
 * @param {Event.target} data
 * @returns a create user object in JSON
 */
export function payload_UpdateItem(data, id){
  return {
    "item_id": id,
    "name": data[0].value,
    "description": data[1].value,
    "quantity": data[2].value
  }
}

/**
 * Takes event target data and transforms it into a useable payload
 * @param {number} data id of item to be deleted
 * @returns a create user object in JSON
 */
export function payload_DeleteItem(id){
  return {
    "item_id": id
  }
}

/**
 * Builds a get request
 * @returns a GET request with a jsonified payload
 */
export function build_Get (){
  return {method: "GET",
    headers: {
      "content-type": "application/json",
      "access-control-allow-credentials": true
    },
    credentials: "include"
  }
}

/**
 * Takes in a JSON formatted payload
 * @param {JSON} payload
 * @returns a POST request with a jsonified payload
 */
export function build_Post (payload){
  return {method: "POST",
    headers: {
      "content-type": "application/json",
      "access-control-allow-credentials": true
    },
    credentials: "include",
    body: JSON.stringify(payload)
  }
}

/**
 * Takes in a JSON formatted payload
 * @param {JSON} payload
 * @returns a PUT request with a jsonified payload
 */
export function build_Put (payload){
  return {method: "PUT",
    headers: {
      "content-type": "application/json",
      "access-control-allow-credentials": true
    },
    credentials: "include",
    body: JSON.stringify(payload)
  }
}

/**
 * Takes in a JSON formatted payload
 * @param {JSON} payload
 * @returns a DELETE request with a jsonified payload
 */
export function build_Delete (payload){
  return {method: "DELETE",
    headers: {
      "content-type": "application/json",
      "access-control-allow-credentials": true
    },
    credentials: "include",
    body: JSON.stringify(payload)
  }
}

/**
 * Takes a request and POSTs to the /users endpoint
 * @param {Object} request request parameters
 */
export async function fetch_CreateUser(request){
  fetch(`${URL}/users`,request)
  .then(res => {
    if(res.status != 201){ throw new Error(res.statusText)}
    return true;
  })
  .catch(err => err);
}

/**
 * Takes a request and POSTs to the /login endpoint
 * @param {Object} request request parameters
 */
export async function fetch_Login(request){
  return fetch(`${URL}/login`,request)
  .then(res => {
    if(res.status != 200){ throw new Error(res.statusText)}
    res.headers.getSetCookie()
    return true;
  })
  .catch(err => err);
}

/**
 * Takes a request and GETs to the /users/:account endpoint
 * @param {Object} request request parameters
 */
export async function fetch_Account(request, user){
  return fetch(`${URL}/users/${user}`,request)
  .then(res => {
    if(res.status != 200){ throw new Error(res.statusText)}
    return res.json();
  })
  .catch(err => err);
}

/**
 * Takes a request and POSTs to the /users/:user/items endpoint
 * @param {Object} request request parameters
 */
export async function fetch_CreateItem(request, user){
  return fetch(`${URL}/users/${user}/items`,request)
  .then(res => {
    if(res.status != 201){ throw new Error(res.statusText)}
    return true;
  })
  .catch(err => err);
}

/**
 * Takes a request and PUTs to the /users/:user/items endpoint
 * @param {Object} request request parameters
 */
export async function fetch_UpdateItem(request, user){
  return fetch(`${URL}/users/${user}/items`,request)
  .then(res => {
    if(res.status != 204){ throw new Error(res.statusText)}
    return true;
  })
  .catch(err => err);
}

/**
 * Takes a request and DELETEs to the /users/:user/items endpoint
 * @param {Object} request request parameters
 */
export async function fetch_DeleteItem(request, user){
  return fetch(`${URL}/users/${user}/items`,request)
  .then(res => {
    if(res.status != 204){ throw new Error(res.statusText)}
    return true;
  })
  .catch(err => err);
}