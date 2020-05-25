<template>
  <div class="authors content">
    <h2>Authors</h2>
    <p>This is a reference for SF authors of <em>significance</em>, that is an author that has either won or been nominated for a literary award for a text that is recgnised as Science Fiction.</p>
    <app-author-spotlight :authorName="spotlightOn"></app-author-spotlight> 
    <app-author-table :authorList="authors"></app-author-table>
  </div>
</template>

<script>
import sfDataService from '@/services/sf-data-service.js'
import authorSpotlight from '@/components/AuthorSpotlight'
import authorTable from '@/components/AuthorTable'

export default {
  data() {
    return {
      authors: []
    }
  },
  props: {
    spotlightOn: String
  },
  components: {
    appAuthorTable: authorTable,
    appAuthorSpotlight: authorSpotlight
  },
  mounted() {
    sfDataService.fetchTextRecords('authors')
    .then((jsonData) => {
        this.authors = jsonData.results
    })
    .catch((error) => {
        console.error('Error:', error);
    })
  }
}
</script>