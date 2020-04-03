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

export function getRestaurantdagById ({ commit }, id) {
  return Axios.get(getlink() + 'restaurantdag/' + id)
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

export function loadRestaurantdagById ({ commit }, id) {
  Axios.get(getlink() + 'restaurantdag/' + id).then(result => commit('setRequested', result.data)).catch(() => commit('setRequested', {}))
}

export function updateRestaurantdag ({ commit }, restaurantdag) {
  return Axios.put(getlink() + 'restaurantdag/update', restaurantdag)
}

export function del ({ commit }, id) {
  return Axios.delete(getlink() + 'restaurantdag/delete/' + id)
}

export function setupBestelling ({ commit }, id) {
  return Axios.get(getlink() + 'restaurantdag/setupBestelling/' + id)
}

export function inschrijven ({ commit }, { inschrijving, rid }) {
  Axios.post(getlink() + 'restaurantdag/newInschrijving/' + rid, inschrijving)
}
