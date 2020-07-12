<template>
  <div>
    <el-timeline>
      <el-timeline-item
        v-for="(timeline, index) in timelineData"
        :key="index"
        placement="top"
        size="large"
        color="rgba(0, 173, 239, 1.00)"
        :class="{'timeline-left': index % 2 === 1}"
        :timestamp="timeline.timestamp">
        <el-card>
          <span class="timeline-content">{{timeline.content}}</span>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
import Vue from 'vue'
import timelineData from '../assets/data/timeline'
export default Vue.extend({
  data() {
    return {
      timelineData,
    }
  },
})
</script>
<style lang="scss" scoped>
.timeline-content {
  white-space: pre-wrap;
}
</style>