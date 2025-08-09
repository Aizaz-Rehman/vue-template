<template>
  <div class="m-0 p-0 flex justify-between items-center w-full">
    <el-tooltip content="Toggle Sidebar" placement="bottom">
      <i class="bi bi-layout-sidebar action-btn fs-6 transition-all" @click="toggleSidebar"></i>
    </el-tooltip>
    <el-dropdown :hide-on-click="false">
      <el-avatar :size="40" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <i class="bi bi-box-arrow-right"></i>
            Logout</el-dropdown-item
          >
          <el-dropdown-item>
            <i class="bi bi-person"></i>
            Profile</el-dropdown-item
          >
          <el-dropdown-item>
            <i class="bi bi-gear"></i>
            Settings</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isDarkMode: false,
    }
  },
  computed: {
    sidebarCollapsed() {
      return this.$store.state.sidebarCollapsed
    },
  },
  methods: {
    toggleSidebar() {
      this.$store.state.sidebarCollapsed = !this.$store.state.sidebarCollapsed
    },
  },
}
</script>
