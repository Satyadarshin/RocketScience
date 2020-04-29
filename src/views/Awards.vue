<template>
    <div class="content">
        <h1>Science Fiction Literary Awards</h1>
        <div id="award-category-selector">

        <button @click="viewAwardCategory(hugoAward, 'bestNovel')">Hugo Award for Best Novel</button>
        <button @click="viewAwardCategory(nebulaAward, 'bestNovel')">Nebula Award for Best Novel</button>
        <app-award-table :selectedAward="displayCategory" :who="awarder" :what="category"></app-award-table>
        </div>
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
            displayCategory: [],
            awarder: '',
            category: ''
        }
    },
    methods: { 
        viewAwardCategory(awardBody, extractCategory) {
            //Comment on the purpose of the regx
            this.awarder = awardBody.replace(/_/g, " ")
            this.category = extractCategory.replace(/([A-Z])/g, ' $1')
            awardDataService.fetchAward(awardBody)
            .then((jsonData) => {
                let awardHistory = jsonData.results
                this.displayCategory = awardHistory[0][extractCategory] 
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

<style lang="scss" scoped>
#award-category-selector {
    button { 
        border-radius: 2px;
        background-color: lightblue; 
        border: none; 
        height: 2.5rem; 
        width: 10rem; 
        margin: 0 .25rem;
    }
    // display: flex; flex-direction: row;
}
</style>
