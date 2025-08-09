<template>
  <div class="min-h-screen bg-gray-100">
    <el-menu
      class="border-0 bg-gray-100 py-1 d-flex flex-column"
      :collapse="collapsed"
      :collapse-transition="false"
      router
      background-color="#f3f4f6"
      :style="{ height: loggedIn ? 'calc(100vh - 60px)' : '100vh' }"
    >
      <el-menu-item index="1" route="home" :class="{ 'active-menu-item': $route.path === '/home' }">
        <el-icon>
          <i class="bi bi-grid"></i>
        </el-icon>
        <template #title>
          <span>Dashboard</span>
        </template>
      </el-menu-item>
      <el-menu-item
        index="2"
        route="accounts"
        @click="store.state.notificationType = 0"
        :class="{ 'active-menu-item': $route.path === '/accounts' }"
      >
        <el-icon>
          <i class="bi bi-layers"></i>
        </el-icon>
        <template #title>
          <span>My Accounts</span>
        </template>
      </el-menu-item>
      <el-menu-item
        index="3"
        route="deposits"
        @click="store.state.notificationType = 0"
        :class="{ 'active-menu-item': isActive('/deposits') }"
      >
        <el-icon>
          <i class="bi bi-arrow-down-circle"></i>
        </el-icon>
        <template #title>
          <span>Deposit</span>
        </template>
      </el-menu-item>
      <el-menu-item
        index="4"
        route="withdraws"
        @click="store.state.notificationType = 0"
        :class="{ 'active-menu-item': isActive('/withdraws') }"
      >
        <el-icon>
          <i class="bi bi-arrow-up-right-circle"></i>
        </el-icon>
        <template #title>
          <span>Withdraw</span>
        </template>
      </el-menu-item>
      <el-menu-item
        index="5"
        route="transactions"
        :class="{ 'active-menu-item': isActive('/transactions') }"
        @click="store.state.notificationType = 0"
      >
        <el-icon>
          <!--          <i class="bi bi-currency-bitcoin"></i>-->
          <i class="bi bi-currency-dollar"></i>
        </el-icon>
        <template #title>
          <span>Transactions</span>
        </template>
      </el-menu-item>
      <el-menu-item
        index="11"
        route="partners"
        :class="{ 'active-menu-item': isActive('/partners') }"
        @click="store.state.notificationType = 0"
      >
        <el-icon>
          <!--          <i class="bi bi-currency-bitcoin"></i>-->
          <i class="bi bi-layout-text-sidebar"></i>
        </el-icon>
        <template #title>
          <span>IB Dashboard</span>
        </template>
      </el-menu-item>
      <el-menu-item @click="profileDialog = true" v-if="Number(role) === 30">
        <el-icon>
          <i class="bi bi-person"></i>
        </el-icon>
        <template #title>
          <span>Profile</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="Number(role) === 10 || Number(role) === 20"
        index="6"
        route="users"
        :class="{ 'active-menu-item': isActive('/users') }"
      >
        <el-icon>
          <i class="bi bi-people"></i>
        </el-icon>
        <template #title>
          <span>Users</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="Number(role) === 10 || Number(role) === 20"
        index="8"
        route="tickets"
        :class="{ 'active-menu-item': isActive('/tickets') }"
      >
        <el-icon>
          <i class="bi bi-patch-question"></i>
        </el-icon>
        <template #title>
          <span>Support Tickets</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="Number(role) === 10 || Number(role) === 20"
        index="9"
        route="useraccounts"
        :class="{ 'active-menu-item': isActive('/useraccounts') }"
      >
        <el-icon>
          <i class="bi bi-person-circle"></i>
        </el-icon>
        <template #title>
          <span>Users Accounts</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="Number(role) === 10 || Number(role) === 20"
        index="38"
        route="funding-accounts"
        :class="{ 'active-menu-item': isActive('/funding-accounts') }"
      >
        <el-icon>
          <i class="bi bi-bank"></i>
        </el-icon>
        <template #title>
          <span>Funding Accounts</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import store from '@/store/index'
export default {
  name: 'Sidebar',
  data() {
    return {
      loggedIn: store.state.loggedIn,
      profileDialog: false,
      activeMenuItem: this.$route.path,
    }
  },
  methods: {
    handleResize() {
      store.state.sidebarCollapsed = window.innerWidth < 768
    },
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  watch: {
    $route(to) {
      this.activeMenuItem = to.path
    },
  },
  computed: {
    isActive() {
      return (route) => {
        return this.$route.path === route
      }
    },

    role() {
      return store.state.role
    },
    collapsed() {
      return store.state.sidebarCollapsed
    },
    store() {
      return store
    },
  },
}
</script>

<style scoped>
.el-menu-item.is-active {
  color: #fff !important;
  background-color: #020617 !important;
}

.active-menu-item {
  color: #fff !important;
  background-color: #020617 !important;
}

/*
.el-menu-item.is-active {
  color: #18a058 !important;
  background-color: #18a05829 !important;
}
*/
.el-menu-item:hover {
  background-color: #f1f5f9 !important;
}

.el-menu-item.is-active.active-menu-item:hover {
  color: #fff !important;
  background-color: #020617e8 !important;
}

.active-menu-item:hover {
  color: #fff !important;
  background-color: #020617e8 !important;
}

.el-menu-item {
  border-radius: 5px;
  height: 40px;
  color: #64748b;
  margin: 5px 0 5px 0 !important;
}
</style>
