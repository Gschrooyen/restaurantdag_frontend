
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/new', component: () => import('pages/new.vue') },
      { path: '/overzicht', component: () => import('pages/overzicht.vue') },
      { path: '/overzicht/:id', component: () => import('pages/restaurantdagDetail.vue'), props: true },
      { path: '/bewerken/:id', component: () => import('pages/bewerken.vue'), props: true },
      { path: '/:id/inschrijvingen', component: () => import('pages/inschrijvingen.vue'), props: true },
      { path: '/:id/inschrijvingen/new', component: () => import('pages/newInschrijving.vue'), props: true },
      { path: '/:id/inschrijvingen/:inschrID', component: () => import('pages/bewerkInschrijving.vue'), props: true }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
