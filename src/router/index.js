import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas
  },
  {
    path: '/editar-comuna/:id',
    name: 'EditarComuna',
    component: EditarComuna
  },
  {
    path: '/add-comuna/',
    name: 'NewComuna',
    component: NewComuna
  },
  {
    path: '/municipios',
    name: 'Municipios',
    component: Municipios
  },
  {
    path: '/municipios/nuevo',
    name: 'NuevoMunicipio',
    component: NewMunicipio,
  },
  {
    path: '/municipios/editar/:id',
    name: 'EditarMunicipio',
    component: EditarMunicipio,
  },
  {
    path: '/departamentos',
    name: 'Departamentos',
    component: Departamentos
  },
  {
    path: '/departamentos/nuevo',
    name: 'NuevoDepartamento',
    component: NewDepartamento,
  },
  {
    path: '/departamentos/editar/:id',
    name: 'EditarDepartamento',
    component: EditarDepartamento,
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
