import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthUserStore = defineStore('authUser', {
  state: () => ({
    authUser: (JSON.parse(localStorage.getItem('authUser') || 'null'))
  }),
  getters: {
    isLoggedIn: (state) => computed(() => state.authUser != null),
    isAdmin: (state) => computed(() => state.authUser && state.authUser.role === 'admin'),
    getUser: (state) => state.authUser,
  },
  actions: {
    setUser(user) {
      if(user) {
        localStorage.setItem('authUser', JSON.stringify(user))
      }
      this.authUser = user
    },
    logout() {
      localStorage.removeItem('authUser')
      this.authUser = null
    }
  }
})