<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Enrollment</h5>
              <div class="card-text py-2">
                <div class="row justify-between">
                  <div class="col-5">
                    <div class="flex flex-column">
                      <span>Enrolment Date</span>
                      <span>100</span>
                    </div>
                  </div>
                  <el-divider direction="vertical" />
                  <div class="col-5">
                    <div class="flex flex-column">
                      <span>Enrolment Plan End Date</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>
                <div class="mt-4 d-flex flex-column items-center justify-content-center">
                  <el-progress
                    type="circle"
                    :percentage="25"
                    :stroke-width="10"
                    :color="primaryColor"
                  />
                  <div class="mt-2">
                    <span v-cloak>Course Progress</span>
                  </div>
                </div>
                <div class="mt-4 d-flex flex-column items-center justify-content-center">
                  <el-button type="primary">
                    <template #default>
                      See Full Course Activity
                      <i class="bi bi-arrow-right ms-2"></i>
                    </template>
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mt-4 mt-md-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Enrollment</h5>
              <div class="card-text py-2">
                <div class="row justify-between">
                  <div class="col-5">
                    <div class="flex flex-column">
                      <span>Enrolment Date</span>
                      <span>100</span>
                    </div>
                  </div>
                  <el-divider direction="vertical" />
                  <div class="col-5">
                    <div class="flex flex-column">
                      <span>Enrolment Plan End Date</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>
                <div class="mt-4 d-flex flex-column items-center justify-content-center">
                  <el-progress
                    type="circle"
                    :percentage="25"
                    :stroke-width="10"
                    :color="primaryColor"
                  />
                  <div class="mt-2">
                    <span v-cloak>Course Progress</span>
                  </div>
                </div>
                <div class="mt-4 d-flex flex-column items-center justify-content-center">
                  <el-button type="primary">
                    <template #default>
                      See Full Course Activity
                      <i class="bi bi-arrow-right ms-2"></i>
                    </template>
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Enrollment</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    primaryColor() {
      return 'var(--el-color-primary)'
    },
  },
}
</script>
