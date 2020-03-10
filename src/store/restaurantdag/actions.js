import { getlink } from '../../services/urlService'
import Axios from 'axios'
/*
export function someAction (context) {
}
*/

export function saveRestaurantdag ({ commit }, restaurantdag) {
  console.log(restaurantdag)
  return Axios.post(getlink() + 'restaurantdag/new', restaurantdag)
}

export function getNextRestaurantDag ({ commit }) {
  return Axios.get(getlink() + 'restaurantdag/next')
}

export function loadNextRestaurantDag ({ commit }) {
  Axios.get(getlink() + 'restaurantdag/next').then(result => commit('setCurrent', result.data))
}

export function loadAllRestaurantdagen ({ commit }) {
  Axios.get(getlink() + 'restaurantdag/all').then(result => commit('setAll', result.data))
}

export function getInschrijvingen ({ commit }, id) {
  return Axios.get(getlink() + 'restaurantdag/inschrijvingen/' + id)
}
