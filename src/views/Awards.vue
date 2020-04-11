<template>
    <div>
        <h1>Science Fiction Literary Awards</h1>
        <button @click="viewAwardCategory(hugoAward, 'bestNovel')">Hugo Award for Best Novel</button>
        <button @click="viewAwardCategory(nebulaAward, 'bestNovel')">Nebula Award for Best Novel</button>
        <app-award-table :selectedAward="displayCategory"></app-award-table>
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
            displayCategory: {},
        }
    },
    methods: { 
        viewAwardCategory(awardBody, extractCategory) {
            awardDataService.fetchAward(awardBody)
            .then((jsonData) => {
                let awardHistory = jsonData.results
                // This works:
                this.displayCategory = awardHistory[0].bestNovel 
                console.log( typeof displayCategory)
                // But this doesn't:
                // this.selectedAward = this.awardHistory[0].extractCategory 
                // So I'm getting the suyntax wrong somehow?

                console.log(this.displayCategory)
            })
            .catch((error) => {
                console.error('Error:', error);
            })
        }
    },
    components: {
        appAwardTable: awardTable
    }
}
</script>

