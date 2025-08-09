<template>
  <div class="theme-color-picker">
    <el-color-picker v-model="selectedColor" @change="updateThemeColor" show-alpha />
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ThemeColorPicker',
  setup() {
    const store = useStore()
    const selectedColor = ref(store.state.themeColor)

    const updateThemeColor = (color) => {
      store.commit('setThemeColor', color)
    }

    // Watch for changes in store's theme color
    watch(
      () => store.state.themeColor,
      (newColor) => {
        selectedColor.value = newColor
      },
    )

    return {
      selectedColor,
      updateThemeColor,
    }
  },
}
</script>

<style scoped>
.theme-color-picker {
  padding: 10px;
}
</style>
