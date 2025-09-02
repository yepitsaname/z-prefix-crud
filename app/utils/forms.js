

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
 * Takes in a JSON formatted payload
 * @param {JSON} payload
 * @returns a POST request with a jsonified payload
 */
export function build_Post (payload){
  return {method: "POST",
    headers: {"content-type": "application/json" },
    body: JSON.stringify(payload)
  }
}

/**
 * Takes a request [optional] and either GETs or POSTs to the /users endpoint
 * @param {Object} request request parameters
 */
export function fetch_Users(request={}){
  fetch('http://localhost:5050/users',request)
  .then(res => {
    if(res.status != 201){ throw new Error(res.statusText)}
  })
  .catch(err => console.error(err));
}