<template>
     <div class="PointOut">
         <!-- 头部 -->
         <home-header></home-header>
         重要工作提示
     </div>
</template>

<script>
import Header from '@/pages/home/components/Header'
export default {
  name: 'PointOut',
  data () {
    return {
    }
  },
  components: {
    'home-header': Header
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
