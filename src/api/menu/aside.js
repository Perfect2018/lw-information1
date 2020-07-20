import api from '../../config/api'

export function listTree() {
  return api._post('/bcars-fresh/bcars_app/shopstate/getBrandShop');
}
