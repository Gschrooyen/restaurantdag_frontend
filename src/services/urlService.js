export function getlink () {
  if (process.env.DEV) {
    return 'http://localhost:8070/'
  } else {
    return 'https://restaurantdag.herokuapp.com/'
  }
}
