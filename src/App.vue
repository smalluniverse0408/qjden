<template>
  <div id="app">
    <el-row>
      <el-col :xs="{span: 20, offset: 2}" :sm="{span: 16, offset: 4}">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 30px;
}
html, body, ul {
  margin: 0;
  padding: 0;
}
</style>
