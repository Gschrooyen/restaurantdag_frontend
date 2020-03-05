import { getlink } from '../../services/urlService'
import Axios from 'axios'
/*
export function someAction (context) {
}
*/

export function saveRestaurantdag ({ commit }, restaurantdag) {
  Axios.post(getlink() + '/restaurantdag/save', restaurantdag)
}
