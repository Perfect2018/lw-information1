import api from '../../config/api';

//搜索列表显示
const searchItemList = (putinShopName, advertType, advertContentType, auditState, state) => {
  let params = {
    'putinShopName': putinShopName,
    'advertType': advertType,
    'advertContentType': advertContentType,
    'auditState': auditState,
    'state': state
  }
  return api._post('/bcars-fresh/advert/getAdvertList', params, true);
};
//保存 修改
const save = (file, sendNo, types, mould) => {
  let params = new FormData();
  params.append('file', file);
  params.append('sendNo', sendNo);
  params.append('types', types);
  params.append('mould', mould);
  return api._upload('/sgdj-sms/sms/sendSms', params);
};
//删除
const deleteAdvert = (id) => {
  let params = new FormData();
  params.append('id', id);
  return api._upload('/bcars-fresh/advert/deleteAdvert', params);
};

export default {
  deleteAdvert,
  searchItemList,
  save
}
