const URL = 'http://localhost:5050'

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
 * @returns a GET request with a jsonified payload
 */
export function build_Get (payload){
  return {method: "GET",
    headers: {
      "content-type": "application/json",
      "access-control-allow-credentials": true
    },
    credentials: "include"
  }
}

/**
 * Takes a request and POSTs to the /users endpoint
 * @param {Object} request request parameters
 */
export function fetch_CreateUser(request){
  fetch(`${URL}/users`,request)
  .then(res => {
    if(res.status != 201){ throw new Error(res.statusText)}
  })
  .catch(err => console.error(err));
}


/**
 * Takes a request and POSTs to the /login endpoint
 * @param {Object} request request parameters
 */
export async function fetch_Login(request){
  return fetch(`${URL}/login`,request)
  .then(res => {
    console.log(res.status);
    if(res.status != 200){ throw new Error(res.statusText)}
    res.headers.getSetCookie()
    return true;
  })
  .catch(err => false);
}