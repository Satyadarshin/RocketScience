<template>
    <div>
        <h1>Science Fiction Literary Awards</h1>
        <button @click="viewAwardCategory(hugoAward, 'bestNovel')">Hugo Award for Best Novel</button>
        <button @click="viewAwardCategory(nebulaAward, 'bestNovel')">Nebula Award for Best Novel</button>
        <!-- <awardTable :selectedAward="displayCategory" /> -->
    </div>
</template>

<script>
import awardTable from '@/components/AwardTable.vue'
import awardDataService from '@/services/award-data-service.js'

export default { 
    data() {
        return {
            hugoAward: 'hugo_award',
            nebulaAward: 'nebula_award',
            awardHistory: {},
            displayCategory: {}
        }
    },
    props: {
        selectedAward: Object
    },
    methods: { 
        viewAwardCategory(awardBody, extractCategory) {
            awardDataService.fetchAward(awardBody)
            .then((jsonData) => {
                this.awardHistory = jsonData.results
                this.displayCategory = this.awardHistory.extractCategory
            })
            .catch((error) => {
                                console.log( 'foo')

                console.error('Error:', error);
            })
        }
    },
    components: {
        awardTable
    }
}
</script>
