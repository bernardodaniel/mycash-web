import { createRouter, createWebHistory } from 'vue-router'
import Lancamentos from '../views/lancamentos/Lancamentos.vue'
import AlterarSenha from '../views/alterarsenha/AlterarSenha.vue'
import Usuarios from '../views/usuarios/Usuarios.vue'
import Login from '../views/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Lancamentos',
    component: Lancamentos
  },
  {
    path: '/alterarsenha',
    name: 'AlterarSenha',
    component: AlterarSenha
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('mycash_token')

  if (!token && to.matched.some(record => record.name != 'Login')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
