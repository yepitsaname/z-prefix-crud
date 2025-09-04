const REG_username = new RegExp("^[a-z0-9\_]+$","i");
const REG_name = new RegExp(/^[a-z0-9\']+$/i);
const REG_password = new RegExp(/^[a-z0-9]+[\!\@\#\$]+$/i);

function test_Username(string){
  let result = REG_username.test(string) * !(string.length <=0) * !(string.length > 16);
  return result;
}

function test_Name(string){
  let result = REG_name.test(string) * !(string.length <=0) * !(string.length > 40);
  return result;
}

export function validate(event,test){
  if(test == 0){
    let result = test_Username(event.currentTarget.value);
    document.querySelector('#username').classList.add(result ? 'valid' : 'error');
    document.querySelector('#username').classList.remove(result ? 'error' : 'valid');
  } else if(test == 1){
    let result = test_Name(event.currentTarget.value);
    document.querySelector('#first-name').classList.add(result ? 'valid' : 'error');
    document.querySelector('#first-name').classList.remove(result ? 'error' : 'valid');
  } else if(test == 2){
    let result = test_Name(event.currentTarget.value);
    document.querySelector('#last-name').classList.add(result ? 'valid' : 'error');
    document.querySelector('#last-name').classList.remove(result ? 'error' : 'valid');
  } else if(test == 3){
    let result = test_Name(event.currentTarget.value);
    document.querySelector('#password').classList.add(result ? 'valid' : 'error');
    document.querySelector('#password').classList.remove(result ? 'error' : 'valid');
  } else if(test == 4){
    let result = test_Name(event.currentTarget.value);
    document.querySelector('#confirm-password').classList.add(result ? 'valid' : 'error');
    document.querySelector('#confirm-password').classList.remove(result ? 'error' : 'valid');
  }
}