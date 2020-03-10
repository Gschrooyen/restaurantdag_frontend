
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/new', component: () => import('pages/new.vue') },
      { path: '/current', component: () => import('pages/current.vue') },
      { path: '/overzicht', component: () => import('pages/overzicht.vue') },
      { path: '/bewerken', component: () => import('pages/bewerken.vue') },
      { path: '/:id/inschrijvingen', component: () => import('pages/inschrijvingen.vue'), props: true }
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
