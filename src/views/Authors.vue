<template>
  <div class="authors content">
    <h1>Authors</h1>
    <p>This is a reference for SF authors of <em>significance</em>, that is an author that has either won or been nominated for a literary award for a text that is recgnised as Scienmce Fiction.</p>
    <ul>
      <li v-for="(author, index) in  authors" :key="index">{{ author.name }}, {{author.born}} &ndash; {{ author.died }}</li>
    </ul>
  </div>
</template>

<script>
import awardDataService from '@/services/award-data-service.js'

export default {
  data() {
    return {
      authors: []
    }
  },
  mounted() {
      awardDataService.fetchTextRecords('authors')
      .then((jsonData) => {
          this.authors = jsonData.results
      })
      .catch((error) => {
          console.error('Error:', error);
      })
  }
}
</script>