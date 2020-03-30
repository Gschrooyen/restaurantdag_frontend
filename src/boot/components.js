import Gerecht from 'components/Gerecht'
import RestaurantdagBeheer from 'components/RestaurantdagBeheer'
import RestaurantdagDetail from 'components/detail'

export default async ({ Vue }) => {
  Vue.component('GerechtInput', Gerecht)
  Vue.component('Restaurantdag', RestaurantdagBeheer)
  Vue.component('Detail', RestaurantdagDetail)
}
