export function getlink () {
  if (process.env.DEV) {
    return 'localhost:8090/'
  } else {
    return 'restaurantdag.herokuapp.com/'
  }
}
