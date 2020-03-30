<template>
  <div class="home">
    <h1>Home</h1>
    <awardTable prizeWinner="" />
  </div>
</template>

<script>
// @ is an alias to /src
import awardTable from '@/components/AwardTable.vue'

export default {
  name: 'Home',
  props: {
    prizeWinner: Object 
  },
  components: {
    awardTable
  }
};
</script>
