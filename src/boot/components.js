import Gerecht from 'components/Gerecht'
import RestaurantdagBeheer from 'components/RestaurantdagBeheer'

export default async ({ Vue }) => {
  Vue.component('GerechtInput', Gerecht)
  Vue.component('Restaurantdag', RestaurantdagBeheer)
}
