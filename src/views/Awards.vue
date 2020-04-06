<template>
    <div>
        <h1>Science Fiction Literary Awards</h1>
        <button @click="viewAwardCategory(hugoAwardNovels)">Hugo Award for Bset Novel</button>
        <button @click="viewAwardCategory(nebulaAwardNovels)">Nebula Award for Bset Novel</button>
        <!-- <awardTable :selectedAward="displayCategory" /> -->
    </div>
</template>

<script>
import awardTable from '@/components/AwardTable.vue'
import fetchAwardWinners from '@/services/fetchAwardWinners.js'

export default { 
    data() {
        return {
            hugoAwardNovels: 'hugo_award_novels',
            nebulaAwardNovels: 'nebula_award_novels',
            displayCategory: {}
        }
    },
    props: {
        selectedAward: Object
    },
    methods: {
        viewAwardCategory(category) {
            console.log('foo') 
            fetchAwardWinners(category)
            .then((jsonData) => {
                this.displayCategory = jsonData.results
            })
            .catch((error) => {
                console.error('Error:', error);
            })
        }
    },
    components: {
        awardTable
    }
}
</script>
