import api from '../../config/api';

function login(userName, passWord) {
  let params = {userName, passWord};
  return api._post('/sgdj-sms/comm/login', params, false);
}

function logout() {
  return api._post('/bcars-fresh/loginOut', {})
}

export default {login, logout}
