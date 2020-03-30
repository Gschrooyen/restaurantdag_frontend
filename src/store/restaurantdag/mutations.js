/*
export function someMutation (state) {
}
*/

export function setCurrent (state, restaurantdag) {
  state.current = restaurantdag
}

export function setAll (state, list) {
  state.all = list
}

export function setRequested (state, restaurantdag) {
  state.requested = restaurantdag
}
