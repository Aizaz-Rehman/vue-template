import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn: true,
    showSidebar: true,
    sidebarCollapsed: false,
    theme: localStorage.getItem('theme') || 'light'
  },
  getters: {
    currentTheme: state => state.theme,
  },
  mutations: {
    setLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn
    },
    setTheme(state, theme) {
      state.theme = theme
      localStorage.setItem('theme', theme)
      document.documentElement.classList.toggle('dark', theme === 'dark') // ✅ Toggle class
    },
  },
  actions: {
    toggleTheme({ commit, state }) {
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      commit('setTheme', newTheme)
    },
  },
  modules: {
  }
})
