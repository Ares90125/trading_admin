const Commodity = () => import('@/views/commodity/index.vue')
const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/commodity',
    component: Layout,
    name: 'commodity',
    children: [
      {
        path: '',
        name: 'commodity',
        component: Commodity,
        meta: {
          title: 'commodity',
          affix: true,
        },
      },
    ],
  },
]
