import api from '../../config/api'

// let proxyId = sessionStorage.getItem("proxyId");
const selectData = (content,value1) => {
  let params = {content,value1}
  return api._post('/sgdj-sms/sms/selectSendSms', params)
}

const getData = (sendName) =>{
  let params = {sendName}
  return api._post('/sgdj-sms/sms/selectSendPhone',params)
}

const getCount = () => {
  let params = {'proxyId': proxyId}
  return api._post('/bcars-fresh/analysisReport/businessStatistics', params);
}

const getUserCount = () => {
  let params = {'proxyId': proxyId}
  return api._post('/bcars-fresh/analysisReport/userStatisticsChart', params);
}

export default {
  selectData,
  getCount,
  getUserCount,
  getData
}
