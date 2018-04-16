
export default [
  { path: '/', component: () => import('pages/Home') },
  { path: '/About', component: () => import('pages/About') },
  { path: '/Gallery', component: () => import('pages/Gallery') },
  { path: '/Contact', component: () => import('pages/Contact') },
  { path: '*', component: () => import('pages/404') }
]
