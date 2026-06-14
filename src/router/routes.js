const routes = [
  {
    path: '/',
    component: () => import('../layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Index.vue') }
    ]
  },
  // Catch-all 404
  { path: '/:pathMatch(.*)*', component: () => import('../pages/Error404.vue') }
]

export default routes
