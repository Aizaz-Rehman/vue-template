<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="row w-full justify-center">
      <div class="col-12 col-lg-3">
        <div class="card shadow-custom">
          <div class="card-body">
            <div>
              <h1 class="fs-2 fw-bold">Login</h1>
              <p class="text-sm fw-normal text-gray-400">
                Welcome back! Please enter your details.
              </p>
            </div>
            <el-form label-position="top">
              <el-form-item label="Username">
                <el-input class="input-shadow" v-model="username" placeholder="Enter username" />
              </el-form-item>
              <el-form-item label="Password">
                <el-input
                  class="input-shadow"
                  v-model="password"
                  type="password"
                  placeholder="Enter password"
                />
              </el-form-item>
            </el-form>
            <div class="mt-4">
              <el-button :loading="loading" class="w-full" type="primary" @click="handleLogin"
                >Login</el-button
              >
              <el-divider>OR</el-divider>
              <el-button class="w-full">Signin with Google</el-button>
            </div>
            <div class="mt-3 text-center">
              <p>
                Don't have an account?
                <RouterLink to="/" class="text-primary">Register</RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'LoginPage',
  components: {
    RouterLink,
  },
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      loading: false,
    }
  },
  methods: {
    async handleLogin() {
      try {
        this.loading = true
        // Add your login logic here
        await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulated API call
        this.$message.success('Login successful!')
        this.$store.commit('setLoggedIn', true)
        this.$router.push('/home')
      } catch (error) {
        this.$message.error(error?.$message ?? 'Login failed. Please try again.')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped></style>
