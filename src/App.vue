<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/layout/Sidebar.vue'
import Header from './components/layout/Header.vue'
import store from '@/store/index'
// v-if="loggedIn && showSidebar"
</script>

<template>
  <el-container>
    <el-aside
      :width="sidebarCollapsed ? '78px' : '220px'"
      class="transition-all px-2"
      style="position: fixed"
      :style="{
        backgroundColor: store.state.theme === 'dark' ? '#020617' : '#f3f4f6',
      }"
    >
      <Sidebar
    /></el-aside>
    <el-container>
      <el-header
        class="flex items-center border-b border-gray-200 transition-all px-2"
        style="overflow-y: auto"
        :style="computedStyle"
        ><Header></Header
      ></el-header>
      <el-main
        :style="computedStyle"
        style="overflow-y: auto; overflow-x: hidden"
        class="m-0 p-0 transition-all"
      >
        <RouterView class="p-2 transition-all" :style="computedStyle" />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    handleResize() {
      store.state.showSidebar = window.innerWidth > 768
    },
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  computed: {
    computedStyle() {
      if (!this.loggedIn) {
        return { marginLeft: '0px' }
      }
      if (this.loggedIn && this.$store.state.sidebarCollapsed) {
        return { marginLeft: '78px' }
      }
      return { marginLeft: this.showSidebar ? '220px' : '0px' }
      // return { marginLeft: this.sidebarCollapsed ? '78px' : '220px' };
    },
    headerStyle() {
      if (this.screenWidth <= 768) {
        return { marginLeft: '0px' }
      } else if (this.sidebarCollapsed && this.loggedIn) {
        return { marginLeft: '78px' }
      } else {
        return { marginLeft: '220px' }
      }
    },
    colors() {
      return colors
    },
    loggedIn() {
      return store.state.loggedIn
    },

    sidebarCollapsed() {
      return store.state.sidebarCollapsed
    },
    showSidebar() {
      return store.state.showSidebar
    },
    role() {
      return Number(sessionStorage.getItem('role'))
    },
  },
}
</script>
<style>
@import '../src/assets/bootstrap/css/bootstrap.css';
@import './assets/themes/elementplus.css';
@import './assets/icons/MingCute/fonts/MingCute.css';
@import './assets/styles/style.css';
</style>
